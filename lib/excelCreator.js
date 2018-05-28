'use strict'
const fs = require('fs')
var Excel = require('exceljs')
const moment = require('moment')

const TOTAL_DEMOGRAPHIC_VALUES = {
    'Youth (Under 18)': 0,
    'Staff (Under 18)': 0,
    'Adult (Above 18)': 0,
}
const TABLE_HEADERS_DAILY = {
    'Date': moment().format('MMM/DD/YYYY'),
    'Meal From Vendor': 0,
    'Leftovers From Previous Day': 0,
    'Total meals available': 0,
    'Unusable Meals': 0,
    'Total Meals Served': 0
}

const TABLE_HEADERS_WEEKLY = {
    'Date Range': moment().format('MMM/DD/YYYY'),
    'Meal From Vendor': 0,
    'Leftovers From Previous Day': 0,
    'Total meals available': 0,
    'Unusable Meals': 0,
    'Total Meals Served': 0
}
const getFileNameAndPath = (type) => {
    var today = new Date()
    var year = today.getFullYear() + 1
    var month = today.getMonth() + 1
    var day = today.getDate()
    var filePath = "./reports/" + "report-date-" + type + "-" + year + "-" + month + "-" + day + ".xlsx"
    var fileName = "report-date-" + type + "-" + year + "-" + month + "-" + day + ".xlsx"
    return {
        "fileName": fileName,
        "filePath": filePath
    }
}
const getTotalsFromData = (data) => {
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
    })
    return {
        youthUnderTotal,
        staffUnderTotal,
        adultTotal,
        unusableTotoal,
        grandTotal,
        receivedTotal
    }
}
const addDataToSheet = (sheet, data) => {
    data.map(report => {
        let mealTotal = report.childrenAndTeens + report.teenStaffAndVolunteers + report.adult
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
    console.log(sheet)
    return sheet
}

function createExcelReport(data) {
    
    return new Promise((resolve, reject) => {
        if (data) {
            var workbook = new Excel.Workbook()
            const fileData = getFileNameAndPath('weekly')
            var sheet =  workbook.addWorksheet(fileData['fileName'])
            // these are used as the headers of the columns in data table
            var tableHeaders = TABLE_HEADERS_WEEKLY

            // first rows of the sheet with general header information
            sheet.addRow(['Report Generation Date & Time'])
            sheet.addRow(['Library:', data[0].library])
            sheet.addRow(['Date Range:', data[0].date])
            sheet.addRow(['type:', data[0].type])
            sheet.addRow(['']) // empty space after header

            sheet.addRow(Object.keys(tableHeaders)) // headers f the table 

            const dataTotals = getTotalsFromData(data)
            sheet = addDataToSheet(sheet, data)
            // totals values applied after rows displayed, since need to loop through data to display the report
            // sum the values now and display after 
            

            
            sheet.addRow(['', '', '', '', 'Subtotal in age group:', dataTotals['youthUnderTotal'], dataTotals['staffUnderTotal'], dataTotals['adultTotal'], dataTotals['unusableTotoal']])
            sheet.addRow(['', 'Total Received:',  dataTotals['receivedTotal'] , '', 'Total Served:', '', '', '', '', dataTotals['grandTotal']])
            workbook.xlsx.writeFile(fileData['filePath']).then( result => {
                console.log("successful write of excel:", result)
                return resolve(fileData['fileName'])
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