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
const getTotalCategoryFromReport = (report, category) => {
    switch(category) {
        case('youth'): {
            let mealTotal = report.childrenAndTeens + report.teenStaffAndVolunteers
            return mealTotal
        }
        case('adult'): {
            let mealTotal = report.adult
            return mealTotal
        }
        case('all'): {
            let mealTotal = report.childrenAndTeens + report.teenStaffAndVolunteers + report.adult
            return mealTotal    
        }
        default: {
            let mealTotal = report.childrenAndTeens + report.teenStaffAndVolunteers + report.adult
            return mealTotal
        }
    }
}
const getTotalsFromData = (data, category) => {
    let receivedTotal = 0
    let youthUnderTotal = 0
    let staffUnderTotal = 0
    let adultTotal = 0
    let unusableTotoal = 0
    let grandTotal = 0
    data.map(report => {
        youthUnderTotal += report.childrenAndTeens
        staffUnderTotal += report.staffUnderTotal
        adultTotal += adultTotal
        unusableTotoal += report.unusable
        grandTotal += getTotalCategoryFromReport(report, category)
        receivedTotal += report.received
    })
    var tots = {
        youthUnderTotal,
        staffUnderTotal,
        adultTotal,
        unusableTotoal,
        grandTotal,
        receivedTotal
    }
    return tots
}
const getCategoryTotals = (data, category) => {
    let totals = {}
    data.map(report => {
        const key = moment(report.date).format('ddd. DD h:mm:ss a')
        totals[key] = getTotalCategoryFromReport(report, category)
    })
    return totals
}
const addWeeklyData = (sheet, data, category) => {
    const totals = getCategoryTotals(data, category)
    console.log(totals)
    sheet.addRow(_.keys(totals))
    sheet.addRow(_.values(totals))
}
const addDataToSheet = (sheet, data, category) => { // this is daily data
    data.map(report => {
        sheet.addRow([
            moment(report.date).format('dddd, MMMM DD'),
            report.received,
            report.leftovers,
            (report.received + report.leftovers),
            report.unusable,
            getTotalCategoryFromReport(report, category),
            report.signature
        ])
    })
}
const addDatasheetHeaders = (sheet, report, program, category) => {
    sheet.addRow([program])
    sheet.addRow(['Summer Report Sheet for:' + moment(report.date).format('MMM YYYY'), '', '' , category])
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
const addBlankRow = (sheet) => {
    sheet.addRow([''])
}
function createExcelReport(data) {
    
    return new Promise((resolve, reject) => {
        if (data) {
            var workbook = new Excel.Workbook()
            const fileData = getFileNameAndPath('weekly')
            var sheet =  workbook.addWorksheet(fileData['fileName'])
            const youthTotals = getTotalsFromData(data, 'youth')
            const adultTotals = getTotalsFromData(data, 'adult')

            addDatasheetHeaders(sheet, data[0], 'Summer Food Service Program: SFSP', 'Children (18 and Under)')
            addWeeklyInfomation(sheet, youthTotals, data[0], data[data.length - 1])
            addWeeklyData(sheet, data, 'youth')
            addBlankRow(sheet)
            addDataTableHeaders(sheet, TABLE_HEADERS_DAILY)
            addDataToSheet(sheet, data, 'youth')
            
            addBlankRow(sheet)
            sheet.addRow(['---------','---------','---------','---------','---------','---------','---------'])
            addBlankRow(sheet)

            addDatasheetHeaders(sheet, data[0], '', 'Adult (18 and Over)')
            addWeeklyInfomation(sheet, adultTotals, data[0], data[data.length - 1])
            addWeeklyData(sheet, data, 'adult')
            addBlankRow(sheet)
            addDataTableHeaders(sheet, TABLE_HEADERS_DAILY)
            addDataToSheet(sheet, data, 'adult')
            
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