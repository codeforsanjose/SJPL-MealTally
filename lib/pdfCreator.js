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
        var resultHTML = template(data)
        if (resultHTML && data) { // if we have both data and a resulting html from executing the template
            // create the pdf landscape to fit the table
            pdf.create(resultHTML, { format: 'Letter',"orientation": "landscape" })
                // put the report in the base directory with the following title
                .toFile("report-" + new Date().toTimeString() + ".pdf", function(error, result){
                if (error) { // report pdf creation error
                    console.log("Could not create PDF")
                    console.log(error)
                    return reject(error)
                } // return the pdf name
                console.log(result)
                return resolve(result)
            })
        } else { // report the lack of data or output or both
            console.log(data)
            console.log(resultHTML)
            return reject("no report data")
        }
    })
}

// export the pdf creation function
module.exports = {createPDFReport,}
