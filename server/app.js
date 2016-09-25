var express = require("express");
var bodyParser = require('body-parser').json();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
if(!process.env.MLABURI) var config = require('./config/mongo');

var mongoose = require('mongoose');

var pdfConverter = require('./modules/pdfConverter/pdfconverter.js');

var mongoUrl = process.env.MLABURI || config.mongoURI;

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


app.listen(process.env.PORT || 3000);
console.log("Server running on port 3000");

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
  console.log('query', req.query.siteName);
  var findMeals = function(db, callback) {
   var mealArr = [];
   var cursor =db.collection('weeklyMealReport').find(req.query);
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

app.use(express.static(__dirname + "/public"));
