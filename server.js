
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;  // Used in API endpoints
var db;

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors());  // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static("www"));

var MONGODB_URI = process.env.MONGODB_URI;

// Initialize database connection and then start the server.
mongoClient.connect(MONGODB_URI, function (err, database) {
  if (err) {
    process.exit(1);
  }
  db = database;  // Our database object from mLab
  console.log("Database connection ready");
  // Initialize the app.
  app.listen(app.get('port'), function () {
    console.log("[*] mealtally running on port", app.get('port'));
  });
});

/*
* Endpoint --> "/api/libraries"
*/

// GET: retrieve all libraries
app.get("/api/libraries", function(req, res) {
  db.collection("libraries").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get libraries");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*
* Endpoint --> "/api/meals"
*/

// GET: retrieve meals in date range of one week
app.get("/api/meals/:start/:end", function(req, res) {
  var cursor = db.collection("meals").aggregate([
    { $match: { date: {$gte: req.params.start, $lte: req.params.end}}},
    { $group: { _id: { library: "$library", mealType: "$mealType" },
                totalReceived: { $sum: "$numReceivedMeals"},
                totalLeftover: { $sum: "$numLeftoverMeals"},
                totalStaff: { $sum: "$numStaffMeals"},
                totalChildren: { $sum: "$numChildrenMeals"},
                totalAdult: { $sum: "$numAdultMeals"},
                totalVolunteer: { $sum: "$numVolunteerMeals"},
                totalWasted: { $sum: "$numWastedMeals"}
              }
    }
  ]).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get meals in date range");
    } else {
      res.status(200).json(docs);
    }
  });
});


// POST: create a new todo
app.post("/api/meals", function(req, res) {
  db.collection("meals").insertOne(req.body, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to post meal");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*
* Endpoint --> "/api/logs"
*/

// POST: create a new log
app.post("/api/logs", function(req, res) {
  db.collection("logs").insertOne(req.body, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to post log");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

// Error handler for the api
function handleError(res, reason, message, code) {
  console.log("API Error: " + reason);
  res.status(code || 500).json({"Error": message});
}
