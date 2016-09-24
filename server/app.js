//declaring express on the server.js file
var express = require("express");
var app = express();

var mongoose = require('mongoose');

mongoose.connect( 'mongodb://togetherly:togetherly2016@ds046549.mlab.com:46549/mealtally', function (err) { //TODO: config
 if (err) console.log('Error: Failed to connect to mongoose!', err);
 else console.log('Connected to mongodb!');
});

var mealSchema = mongoose.Schema({
  "date": Date,
  "siteName": String,
  "meal": {
    "type": String,
    "vendorReceived": Number,
    "carryOver": Number,
    "consumed": {
      "child": Number,
      "adult": Number,
      "volunteer": Number
    },
    "damaged": Number,
    "wasted": Number
  }
}, {collection: 'meal'});

var meal = mongoose.model('meal', mealSchema);﻿

app.get("/meal", function(req, res) {
  meal.find({}, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

app.post("/meal", function(req, res) {
  meal.insert({
    "date": req.body.date,
    "siteName": req.body.siteName,
    "meal": {
      "type": req.body.meal.type,
      "vendorReceived": req.body.meal.vendorReceived,
      "carryOver": req.body.meal.carryOver,
      "consumed": {
        "child": req.body.meal.consumed.child,
        "adult": req.body.meal.consumed.adult,
        "volunteer": req.body.meal.consumed.volunteer
      },
      "damaged": req.body.meal.damaged,
      "wasted": req.body.meal.wasted
    }
  }, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");
