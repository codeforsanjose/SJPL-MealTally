'use strict'
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./public/templates/ymcaReport.html', 'utf8');
var options = { format: 'Letter' };

var createPDF = function(pdfDate, pdfSite) {
  pdfSite.replace(/ /g, '_');
  pdf.create(html, options).toFile('reports/Week_' + pdfDate + pdfSite +'.pdf', function(err, res) {
    console.log('Creating pdf..');
    if (err) return console.log(err);
    console.log(res);
  });
}

module.exports = createPDF;
