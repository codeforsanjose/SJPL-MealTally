'use strict'
var convertPDF = require('../pdfConverter/pdfconverter.js');
var http = require('http');
var fs = require('fs');
var nodemailer = require('nodemailer');
var config = fs.existsSync('../../config/index.json') ? require('../../config') : {};
var transporter = nodemailer.createTransport(process.env.MAILURI || config.MAILURI);

var cronTask = function() {
  var cronTime = new Date(),
      weekBegin = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000).toISOString(),
      mealsStr = '',
      mealsArr = [],
      locations = {},
      weeklyMealsStr = '',
      weeklyMealsArr = [],
      monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      prettyCronTime = cronTime.getDate() + ' ' + monthsArr[cronTime.getMonth()] + ' ' + cronTime.getFullYear();
  console.log('Running 1 minute cron at', cronTime, weekBegin.substr(0,10));

  http.get('http://localhost:3000/meal?DATEFROM=2016-08-05', function(res) {
    var chunks = [];
    res.on('data', function(chunk) {
      chunks.push(chunk);
    });
    res.on('end', function() {
      var body = Buffer.concat(chunks);
      mealsStr+= body.toString();

      var mealsObj = JSON.parse(mealsStr);
      for(var i in mealsObj) mealsArr.push(mealsObj[i]);

      mealsArr.forEach(function(myMeal) {
        if(!locations[myMeal.siteName]) {
          locations[myMeal.siteName] = {};
        }
        if(!locations[myMeal.siteName][myMeal.meal.type]) {
          locations[myMeal.siteName][myMeal.meal.type] = {
            count: 1,
            date: new Date().toISOString(),
            siteName: myMeal.siteName,
            meal: {
              type: myMeal.meal.type,
              totalConsumed: 0,
              totalWasted: 0,
              totalCarryOver: 0,
              totalDamaged: 0
            },
            consumptionBreakdown: {
              day1: 0,
              day2: 0,
              day3: 0,
              day4: 0
            }
          };
        }
        var myConsumed = (myMeal.meal.consumed.child || 0) + (myMeal.meal.consumed.adult || 0) + (myMeal.meal.consumed.volunteer || 0);

        locations[myMeal.siteName][myMeal.meal.type].meal.totalConsumed+= myConsumed;
        locations[myMeal.siteName][myMeal.meal.type].meal.totalWasted+= (myMeal.meal.wasted || 0);
        locations[myMeal.siteName][myMeal.meal.type].meal.totalCarryOver+= (myMeal.meal.carryOver || 0);
        locations[myMeal.siteName][myMeal.meal.type].meal.totalDamaged+= (myMeal.meal.damaged || 0);
        locations[myMeal.siteName][myMeal.meal.type].consumptionBreakdown['day' + locations[myMeal.siteName][myMeal.meal.type].count++]+= myConsumed;
      });

      for(var location in locations) {
        for(var mealType in locations[location]) {

          var postData = JSON.stringify({
          	"date": cronTime.toISOString(),
          	"siteName": location,
          	"meal": {
          		"type": mealType,
          		"totalConsumed": locations[location][mealType].meal.totalConsumed,
          		"totalWasted": locations[location][mealType].meal.totalWasted,
          		"totalCarryOver": locations[location][mealType].meal.totalCarryOver,
          		"totalDamaged": locations[location][mealType].meal.totalDamaged
          	},
          	"consumptionBreakdown": {
          		"day1": locations[location][mealType].consumptionBreakdown.day1,
          		"day2": locations[location][mealType].consumptionBreakdown.day2,
          		"day3": locations[location][mealType].consumptionBreakdown.day3,
          		"day4": locations[location][mealType].consumptionBreakdown.day4,
          		"day5": locations[location][mealType].consumptionBreakdown.day5,
          		"day6": locations[location][mealType].consumptionBreakdown.day6
          	}
          });

          var options = {
            port: 3000,
            path: '/weeklyMealReport',
            method: 'POST',
            headers: {
              "content-type": "application/json",
            }
          };
//uncomment when ready to set cron to weekly
          // var req = http.request(options, function(res) {
          //   res.setEncoding('utf8');
          //   res.on('end', function() {
          //     console.log('Finished reading response.');
          //   });
          // });
          // req.on('error', function(e) {
          //   console.log(`problem with request: ${e.message}`);
          // });
          // req.write(postData);
          // req.end();
          }
      }

      //get latest weekly reports to make PDFs
      http.get('http://localhost:3000/weeklyMealReport?DATEFROM=2016-08-05', function(res) {
        var chunks = [];
        res.on('data', function(chunk) {
          chunks.push(chunk);
        });
        res.on('end', function() {
          var body = Buffer.concat(chunks);
          weeklyMealsStr+= body.toString();

          var weeklyMealsObj = JSON.parse(weeklyMealsStr);
          for(var key in weeklyMealsObj) weeklyMealsArr.push(weeklyMealsObj[key]);

          weeklyMealsArr.forEach(function(entry) {
            var outputName = entry.siteName.replace(/ /g, '').replace('.', '') + entry.meal.type.replace(/ /g, '') + '.html'
            // set the temp files back to default template
            fs.truncate('modules/pdfConverter/' + outputName, 0);
            var cbCalled = false,
                rd = fs.createReadStream('public/templates/ymcaReport.html'),
                wr = fs.createWriteStream('modules/pdfConverter/' + outputName),
                cb = function(e){return(e)};
            rd.on("error", function(err) {
              done(err);
            });
            wr.on("error", function(err) {
              done(err);
            });
            wr.on("close", function(ex) {
              done();
            });
            rd.pipe(wr);

            function done(err) {
              if (!cbCalled) {
                cb(err);
                cbCalled = true;
              }
            }

            // replace custom fields in temp file
            fs.readFile('modules/pdfConverter/' + outputName, 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
              var result = data.replace('$Month$Year', monthsArr[cronTime.getMonth()] + ' ' + cronTime.getFullYear())
                                .replace('$SiteName', entry.siteName)
                                .replace('$MealType', entry.meal.type)
                                .replace('$WeekDateAndYear', prettyCronTime)
                                .replace('$MonConsumed', (entry.consumptionBreakdown.day1 || 0))
                                .replace('$TueConsumed', (entry.consumptionBreakdown.day2 || 0))
                                .replace('$WedConsumed', (entry.consumptionBreakdown.day3 || 0))
                                .replace('$ThuConsumed', (entry.consumptionBreakdown.day4 || 0))
                                .replace('$FriConsumed', (entry.consumptionBreakdown.day5 || 0))
                                .replace('$SatConsumed', (entry.consumptionBreakdown.day6 || 0))
                                .replace('$TotalConsumed', entry.meal.totalConsumed)
                                .replace('$TotalWasted', entry.meal.totalWasted);

              fs.writeFile('modules/pdfConverter/' + outputName, result, 'utf8', function (err) {
                 if (err) return console.log(err);
                 var pdfName = convertPDF(outputName, prettyCronTime.replace(/ /g, '-'), entry.siteName.replace(/ /g, '_').replace('.', ''), entry.meal.type.replace(/ /g, ''),function(){
                   var mailOptions = {
                       from: '"MLK Library" <mlktestemail@gmail.com>', // sender address
                       to: 'mlktestemail@gmail.com', // list of receivers
                       subject: 'PDF ' + entry.siteName + ' ' + entry.meal.type + ' for week ending ' + prettyCronTime, // Subject line
                       text: 'PDF attached', // plaintext body
                       attachments: [{
                           path: pdfName
                       },]
                   };

                   transporter.sendMail(mailOptions, function(error, info){
                     if(error){
                         return console.log(error);
                     }
                     console.log('Message sent: ' + info.response);
                   });
                 });
              });

            });
          });

        });
          }).on('error', function(e) {
            console.log(`Got error: ${e.message}`);
          });
    });
  }).on('error', function(e) {
    console.log(`Got error: ${e.message}`);
  });
};

module.exports = cronTask;
