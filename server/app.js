var fs = require('fs');
var express = require("express");
var bodyParser = require('body-parser').json();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var cron = require('node-cron');
var cronTask = require('./modules/cronConfig/cron')

var config = fs.existsSync('./config/index.json') ? require('./config') : {};
var mongoUrl = process.env.MLABURI || config.MLABURI;

app.listen(process.env.PORT || 3000);
console.log("Server running on port 3000");

//cron.schedule('* * * * *', function() {
  cronTask();
//});

app.post('/meal', bodyParser, function(req, res) {
  var insertDocument = function(db, callback) {
   db.collection('meal').insertOne(req.body, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
    assert.equal(err, null);
    console.log("Inserted a document into the meal collection.");
    callback();
    });
  };

  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
      db.close();
    });
  });
});

app.get('/meal', function(req,res) {
  var findMeals = function(db, callback) {
   var mealArr = [];
   if(req.query.DATEFROM) {
     var cursor =db.collection('meal').find({"date": { $gte : req.query.DATEFROM }});
   }
   else var cursor =db.collection('meal').find(req.query).sort({date:1});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         mealArr.push(doc);
      } else {
         callback(mealArr);
      }
   });
  };
  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    findMeals(db, function(result) {
      if(err) res.status(500).json(err);
      else res.status(200).json(result);
      db.close();
    });
  });
});

app.post('/weeklyMealReport', bodyParser, function(req,res) {
  var insertDocument = function(db, callback) {
   db.collection('weeklyMealReport').insertOne(req.body, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
    assert.equal(err, null);
    console.log("Inserted a document into the weeklyMealReport collection.");
    callback();
    });
  };

  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
      db.close();
    });
  });
});

app.get('/weeklyMealReport', function(req,res) {
  var findMeals = function(db, callback) {
   var mealArr = [];
   var rollup = false;
   if(req.query.DATEFROM) {
     var cursor =db.collection('weeklyMealReport').find({"date": { $gte : req.query.DATEFROM }});
   }
   else if(req.query.siteName && req.query.meal) var cursor =db.collection('weeklyMealReport').find(req.query).sort({date:1}).limit(12);
   else if(req.query.siteName){
     rollup = true;
     var cursor =db.collection('weeklyMealReport').find(req.query).sort({date:1}).limit(12);
   }
   else if(req.query) var cursor =db.collection('weeklyMealReport').find(req.query).sort({date:1});
   else var cursor =db.collection('weeklyMealReport').find().sort({date:1});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         mealArr.push(doc);
      } else {
        if(rollup){
          var dateObj = {},
              dateArr = [];

          mealArr.forEach(function(entry) {
            if(!dateObj[entry.date.substr(0,10)]) {
              dateObj[entry.date.substr(0,10)] = {
                date: entry.date.substr(0,10),
                siteName: entry.siteName,
                meal: {
                  totalConsumed: 0,
                  totalWasted: 0,
                  totalCarryOver: 0,
                  totalDamaged: 0
                }
              }
            }

            dateObj[entry.date.substr(0,10)].meal.totalConsumed+= entry.meal.totalConsumed;
            dateObj[entry.date.substr(0,10)].meal.totalWasted+= entry.meal.totalWasted;
            dateObj[entry.date.substr(0,10)].meal.totalCarryOver+= entry.meal.totalCarryOver;
            dateObj[entry.date.substr(0,10)].meal.totalDamaged+= entry.meal.totalDamaged;
          });
          for(var key in dateObj) dateArr.push(dateObj[key]);
          callback(dateArr);
        }
        else callback(mealArr);
      }
   });
  };
  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    findMeals(db, function(result) {
      if(err) res.status(500).json(err);
      else res.status(200).json(result);
      db.close();
    });
  });
});

app.post('/reflogs', bodyParser, function(req,res) {
  var insertDocument = function(db, callback) {
   db.collection('reflogs').insertOne(req.body, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
    assert.equal(err, null);
    console.log("Inserted a document into the reflogs collection.");
    callback();
    });
  };

  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
      db.close();
    });
  });
});

app.get('/reflogs', function(req,res) {
  var findMeals = function(db, callback) {
   var mealArr = [];
   if(req.query.DATEFROM) {
     var cursor =db.collection('reflogs').find({"date": { $gte : req.query.DATEFROM }}).sort({date:1});
   }
   else var cursor =db.collection('reflogs').find(req.query).sort({date:1});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         mealArr.push(doc);
      } else {
         callback(mealArr);
      }
   });
  };
  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    findMeals(db, function(result) {
      if(err) res.status(500).json(err);
      else res.status(200).json(result);
      db.close();
    });
  });
});

app.get('/foodlogs', function(req,res) {
  var findMeals = function(db, callback) {
   var mealArr = [];
   if(req.query.DATEFROM) {
     var cursor =db.collection('foodlogs').find({"date": { $gte : req.query.DATEFROM }});
   }
   else var cursor =db.collection('foodlogs').find(req.query).sort({date:1});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         mealArr.push(doc);
      } else {
         callback(mealArr);
      }
   });
  };
  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    findMeals(db, function(result) {
      if(err) res.status(500).json(err);
      else res.status(200).json(result);
      db.close();
    });
  });
});

app.post('/foodlogs', bodyParser, function(req,res) {
  var insertDocument = function(db, callback) {
   db.collection('foodlogs').insertOne(req.body, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
    assert.equal(err, null);
    console.log("Inserted a document into the foodlogs collection.");
    callback();
    });
  };

  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
      db.close();
    });
  });
});

app.use(express.static(__dirname + "/public"));
