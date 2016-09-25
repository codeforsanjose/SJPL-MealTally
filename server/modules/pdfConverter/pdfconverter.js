'use strict'
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./public/templates/ymcaReport.html', 'utf8');
var options = { format: 'Letter' };

module.exports = pdf.create(html, options).toFile('./test.pdf', function(err, res) {
  console.log('Creating pdf..');
  if (err) return console.log(err);
  console.log(res);
});
