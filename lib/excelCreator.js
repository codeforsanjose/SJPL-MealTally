'use strict'
const fs = require('fs')
var Excel = require('exceljs')
const moment = require('moment')

function createExcelReport(data) {

    return new Promise((resolve, reject) => {
        if (data) {
            var workbook = new Excel.Workbook()
            
            var today = new Date()
            var year = today.getFullYear() + 1
            var month = today.getMonth() + 1
            var day = today.getDate()
            var filePath = "./reports/report-" + year + "-" + month + "-" + day + ".xlsx"
            var fileName = "report-date-" + year + "-" + month + "-" + day + ".xlsx"
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
            let receivedTotal = 0
            let youthUnderTotal = 0
            let staffUnderTotal = 0
            let adultTotal = 0
            let unusableTotoal = 0
            let grandTotal = 0
            data.map(report => {
                let mealTotal = report.childrenAndTeens + report.teenStaffAndVolunteers + report.adult
                youthUnderTotal += report.childrenAndTeens
                staffUnderTotal += report.staffUnderTotal
                adultTotal += adultTotal
                unusableTotoal += report.unusable
                grandTotal += mealTotal
                receivedTotal += report.received

                sheet.addRow([
                    moment(report.date).format('YYYY-MMM-DD'),
                    moment(report.date).format('dddd'),
                    report.received,
                    report.leftovers,
                    (report.received + report.leftovers),
                    report.childrenAndTeens,
                    report.teenStaffAndVolunteers,
                    report.adult,
                    report.unusable,
                    mealTotal,
                    report.signature
                ])
            })
            sheet.addRow(['', '', '', '', 'Subtotal in age group:', youthUnderTotal, staffUnderTotal, adultTotal, unusableTotoal])
            sheet.addRow(['', 'Total Received:', receivedTotal, '', 'Total Served:', '', '', '', '', grandTotal])
            workbook.xlsx.writeFile(filePath).then( result => {
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