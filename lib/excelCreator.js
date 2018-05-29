'use strict'
const fs = require('fs')
var Excel = require('exceljs')
const moment = require('moment')
const _ = require('lodash')

const TOTAL_DEMOGRAPHIC_VALUES = {
    'Youth (Under 18)': 0,
    'Staff (Under 18)': 0,
    'Adult (Above 18)': 0,
}
const TABLE_HEADERS_DAILY = {
    'Date': moment().format('MMM/DD/YYYY'),
    'Meal From Vendor': 0,
    'Leftovers From Previous Day': 0,
    'Total Meals Available': 0,
    'Unusable Meals': 0,
    'Total Meals Served': 0,
    'Certified By': ''
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
const getCategoryTotals = (data) => {
    let totals = {}
    data.map(report => {
        const key = moment(report.date).format('ddd. DD h:mm:ss a')
        totals[key] = report.childrenAndTeens + report.teenStaffAndVolunteers
    })
    return totals
}
const addWeeklyData = (sheet, data) => {
    const totals = getCategoryTotals(data)
    sheet.addRow(_.keys(totals))
    sheet.addRow(_.values(totals))
    
}
const addDataToSheet = (sheet, data) => { // this is daily data
    data.map(report => {
        let mealTotal = report.childrenAndTeens + report.teenStaffAndVolunteers + report.adult
        sheet.addRow([
            moment(report.date).format('dddd, MMMM DD'),
            report.received,
            report.leftovers,
            (report.received + report.leftovers),
            report.unusable,
            report.childrenAndTeens + report.teenStaffAndVolunteers,
            report.signature
        ])
    })
}
const addDatasheetHeaders = (sheet, report, program = 'Summer Food Service Program: SFSP', category = 'Children (18 Under)') => {
    sheet.addRow([program])
    sheet.addRow(['Summer  Report Sheet for:' + moment(report.date).format('MMM YYYY'), '', '' , category])
    sheet.addRow(['']) // empty space after header
}

const addWeeklyInfomation = (sheet, dataTotals, firstReport, lastReport) => {
    const dateRangeFirst = moment(firstReport.date).startOf('week')
    const dateRangeLast = moment(lastReport.date).endOf('week')
    const range = dateRangeFirst.format('MMM Do - ') + dateRangeLast.format('Do')
    addDataTableHeaders(sheet, TABLE_HEADERS_WEEKLY)
    sheet.addRow([range, firstReport.library, firstReport.type, dataTotals.grandTotal, 'Please sign here: ___________'])
}
const addDataTableHeaders = (sheet, headers) => {
    sheet.addRow(_.keys(headers)) // headers f the table 
}
const createSheetXLSInWorkbook = (workbook, sheet, filePath) => {
    return workbook.xlsx.writeFile(filePath)
}
function createExcelReport(data) {
    
    return new Promise((resolve, reject) => {
        if (data) {
            var workbook = new Excel.Workbook()
            const fileData = getFileNameAndPath('weekly')
            var sheet =  workbook.addWorksheet(fileData['fileName'])
            const dataTotals = getTotalsFromData(data)
            // these are used as the headers of the columns in data table
            var tableHeaders = TABLE_HEADERS_WEEKLY

            // first rows of the sheet with general header information
            addDatasheetHeaders(sheet, data[0])
            addWeeklyInfomation(sheet, dataTotals, data[0], data[data.length - 1])
            addWeeklyData(sheet, data)
            sheet.addRow([''])
            addDataTableHeaders(sheet, TABLE_HEADERS_DAILY)
            addDataToSheet(sheet, data)
            
            createSheetXLSInWorkbook(workbook, sheet, fileData['filePath']).then( result => {
                console.log("successful write of excel:")
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