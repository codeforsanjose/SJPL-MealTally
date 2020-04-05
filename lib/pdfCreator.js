'use strict'
const Handlebars = require('handlebars')
const fs = require('fs');
const templateFile = fs.readFileSync('./config/reportTemplate.html','utf8')
var template = Handlebars.compile(templateFile)
const pdf = require('html-pdf')

Handlebars.registerHelper('table', function(items, options) {
    // create string to collect output
    var out = ""
    // for each meal without the _id field
    for(var i=0, l=items.length; i<l; i++) {
        console.log(items[i])
        // put each useful field into the html template for html-pdf
        out = out + options.fn(items[i])
    }
    // return the output
    return out
})


function createPDFReport(data) {
    return new Promise((resolve, reject) => {
        // get the template with the data added to it
        var resultHTML = template({ meals: data })
        if (resultHTML && data) { // if we have both data and a resulting html from executing the template
            var today = new Date()
            var year = today.getFullYear() + 1
            var month = today.getMonth() + 1
            var day = today.getDate()
            var filePath = "./reports/report-" + year + "-" + month + "-" + day + ".pdf"
            var fileName = "report-" + year + "-" + month + "-" + day + ".pdf"
            // create the pdf landscape to fit the table
            pdf.create(resultHTML, { format: 'Letter',"orientation": "letter", phantomArgs: ['--web-security=no', '--local-url-access=false']} ).toFile(filePath, function(error, result){
                // create file to send pdf file back to user does not take up space on our server
                if (error) { // report pdf creation error
                    console.log("Could not create PDF")
                    console.log(error)
                    return reject(error)
                }
                return resolve(fileName)
            })
        } else { // report the lack of data or output or both
            return reject("no report data")
        }
    })
}

// export the pdf creation function
module.exports = {createPDFReport,}
