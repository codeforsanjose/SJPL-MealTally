'use strict'
var convertPDF = require('../pdfConverter/pdfconverter.js');
var http = require('http');
var fs = require('fs');

var cronTask = function() {
  var cronTime = new Date(),
      weekBegin = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000).toISOString(),
      mealsStr = '',
      mealsArr = [],
      locations = {},
      monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
          //console.log('each', locations[location][mealType]);

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

          var req = http.request(options, function(res) {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
              console.log(`BODY: ${chunk}`);
            });
            res.on('end', function() {
              console.log('No more data in response.');
            });
          });
          req.on('error', function(e) {
            console.log(`problem with request: ${e.message}`);
          });
          req.write(postData);
            req.end();
          }
      }
    });
  }).on('error', function(e) {
    console.log(`Got error: ${e.message}`);
  });
};


// for(var location in locations) {
//   // set the temp files back to default template
//   var cbCalled = false,
//       rd = fs.createReadStream('public/templates/ymcaReport.html'),
//       wr = fs.createWriteStream('modules/pdfConverter/tempReport.html'),
//       cb = function(e){console.log(e)};
//   rd.on("error", function(err) {
//     done(err);
//   });
//   wr.on("error", function(err) {
//     done(err);
//   });
//   wr.on("close", function(ex) {
//     done();
//   });
//   rd.pipe(wr);
//
//   function done(err) {
//     if (!cbCalled) {
//       cb(err);
//       cbCalled = true;
//     }
//   }
// }
// // replace custom fields in temp file
// fs.readFile('modules/pdfConverter/tempReport.html', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = function(){
//     data.replace('$Month$Year', monthsArr[cronTime.getMonth()] + ' ' + cronTime.getYear());
//   };
//
//   fs.writeFile('modules/pdfConverter/tempReport.html', result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
// });

module.exports = cronTask;
