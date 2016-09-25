'use strict'
var convertPDF = require('../pdfConverter/pdfconverter.js');
var http = require('http');

var cronTask = function() {
  var cronTime = new Date(),
      weekBegin = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000).toISOString(),
      mealsStr = '',
      mealsArr = [],
      locations = {};
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
console.log(mealsArr);
      //mealsArr.forEach()

    });
  }).on('error', function(e) {
    console.log(`Got error: ${e.message}`);
  });
};

module.exports = cronTask;
