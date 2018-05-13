'use strict'
const fs = require('fs')
var Excel = require('exceljs')
const moment = require('moment')

function createExcelReport(data) {

    return new Promise((resolve, reject) => {
        console.log('what is data: ', data)
        if (data) {
            var workbook = new Excel.Workbook()
            /**
             * library: 'Educational Park Branch Library',
    date: '2018-05-11T03:37:50.397Z',
    type: 'PM Snack',
    received: 4,
    leftovers: 5,
    childrenAndTeens: 6,
    teenStaffAndVolunteers: 3,
    adult: 0,
    unusable: 2,
    createdBy: 'guest',
    signature: 'Vivek'
             */
            
            var today = new Date()
            var year = today.getFullYear() + 1
            var month = today.getMonth() + 1
            var day = today.getDate()
            var filePath = "./reports/report-" + year + "-" + month + "-" + day + ".xlsx"
            var fileName = "report-" + year + "-" + month + "-" + day + ".xlsx"
            var sheet =  workbook.addWorksheet(fileName)
            var dataRows = {
                'Date': moment().format('MMM/DD/YYYY'),
                'Day': moment().format('DDD'),
                'Meal Received': 0,
                'Leftover Meal': 0,
                'No. of meals available': 0,
                'Youth (Under 18)': 0,
                'Staff (Under 18)': 0,
                'Adult (Above 18)': 0,
                'No. of meals unusable': 0,
                'No. of meal served': 0,
                'Signature': 0
            }

            sheet.addRow(['Report Generation Date & Time'])
            sheet.addRow(['Library:', data[0].library])
            sheet.addRow(['Date Range:', data[0].date])
            sheet.addRow(['type:', data[0].type])
            sheet.addRow([''])
            sheet.addRow(Object.keys(dataRows))
            data.map(report => {
                sheet.addRow([
                    moment(report.date).format('YYYY-MMM-DDD'),
                    moment(report.date).format('dddd'),
                    report.received,
                    report.leftovers,
                    (report.received + report.leftovers),
                    report.childrenAndTeens,
                    report.teenStaffAndVolunteers,
                    report.adult,
                    report.unusable,
                    (report.childrenAndTeens + report.teenStaffAndVolunteers + report.adult),
                    report.signature
                ])
            })
            workbook.xlsx.writeFile(filePath).then( result => {
                console.log('RESULT: ', result)
                return resolve(fileName)
            }).catch(error => {
                console.log("ERROR write: ", error)
                return reject(error)
            })
            
            
        } else { // report the lack of data or output or both
            return reject("no report data")
        }
    })
}

// export the pdf creation function
module.exports = {createExcelReport,}