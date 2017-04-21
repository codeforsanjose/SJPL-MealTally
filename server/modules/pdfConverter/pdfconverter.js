'use strict'
var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter' };

var createPDF = function(htmlName, pdfDate, pdfSite, pdfMeal, callback) {
  var html = fs.readFileSync('modules/pdfConverter/' + htmlName, 'utf8');
  var pdfName = 'reports/Week_' + pdfDate + pdfSite + '_' + pdfMeal +'.pdf';
  pdfSite.replace(/ /g, '_');
  
  if(html.length) {pdf.create(html, options).toFile(pdfName, function(err, res) {
    console.log('Creating pdf..');
    if (err) return console.log(err);
    console.log(res);
    callback();
  });}

  return pdfName;
}

module.exports = createPDF;
