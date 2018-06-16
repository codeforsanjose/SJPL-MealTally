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
    'Meals From Vendor': 0,
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
        adultTotal += report.adult
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
    let totals = {
        'Week of:': getDateRange(data[0], data[data.length - 1])
    }
    var sum = 0.0
    data.map(report => {
        const key = moment(report.date).format('ddd. DD h:mm:ss a')
        const total = getTotalCategoryFromReport(report, category)
        totals[key] = total
        sum += total
    })
    totals['Total'] = sum
    return totals
}
const addWeeklyData = (sheet, data, category) => {
    const totals = getCategoryTotals(data, category)
    
    sheet.addRow(_.keys(totals))
    sheet.lastRow.font = {
        'bold': true
    }
    sheet.addRow(_.values(totals))
}
const addDataToSheet = (sheet, data, category) => { // this is daily data
    data.map(report => {
        sheet.addRow([
            moment(report.date).format('dddd, MMMM DD h:mm:ss a'),
            report.received,
            report.leftovers,
            (report.received + report.leftovers),
            report.unusable,
            getTotalCategoryFromReport(report, category),
            report.signature
        ])
    })
}
const addDatasheetHeaders = (sheet, report, program, category, weeklyTotal) => {
    const addHeaderFont = (sheet) => {
        sheet.eachRow((row, index) => {
            if (index < 4) {
                row.font = {
                    'size': 16
                }
            }
        })
    }
    const monthYear = moment(report.date).format('MMMM YYYY')
    addHeaderFont(sheet)
    sheet.addRow([program, '', '', '', 'Weekly Total:', weeklyTotal])
    sheet.addRow(['Summer Report Sheet for:' + moment(report.date).format('MMMM YYYY'), '', '', '', 'Meal Type:', report.type + ' (' + category + ')'])
    sheet.addRow(['Site Name:' + report.library, '', '', 'Site Name:', report.library])
    sheet.addRow(['']) // empty space after header
}

const addWeeklyInfomation = (sheet, dataTotals, firstReport, lastReport) => {
    const dateRangeFirst = moment(firstReport.date).startOf('week')
    const dateRangeLast = moment(lastReport.date).endOf('week')
    //const range = dateRangeFirst.format('MMM Do - ') + dateRangeLast.format('Do')
    //addDataTableHeaders(sheet, TABLE_HEADERS_WEEKLY)
    //sheet.addRow([range, firstReport.library, firstReport.type, dataTotals.grandTotal])
}
const addSheetColumns = (sheet) => {
    sheet.columns = ['','','','','','',''].map(header => {
        return {
            'header': header,
            'width': 20,
            'size': 16
        }
    })
    
}
const formatEachCell = (sheet) => {
    sheet.eachRow(row => {
        row.eachCell(cell => {
            cell.alignment = { 'horizontal': 'left' }
        })
    })
}
const addDataTableHeaders = (sheet, headers) => {
    sheet.addRow(_.keys(headers)) // headers f the table
}
const createSheetXLSInWorkbook = (workbook, filePath) => {
    return workbook.xlsx.writeFile(filePath)
}
const getDateRange = (first, last) => {
    const dateRangeFirst = moment(first.date).startOf('week')
    const dateRangeLast = moment(last.date).endOf('week')
    if (dateRangeFirst.format('M') === dateRangeLast.format('M')) {
        return dateRangeFirst.format('MMMM Do - ') + dateRangeLast.format('Do')    
    }
    else {
        return dateRangeFirst.format('MMMM Do - ') + dateRangeLast.format('MMMM Do')
    }
}
const addBlankRow = (sheet) => {
    sheet.addRow([''])
}
const addFooterRow = (sheet, weeklyTotal) => {
    sheet.addRow(['I certify the above\n information is accurate and true\n x.______________', '', '', '', 'Weekly Total', weeklyTotal])
    sheet.lastRow.height = 40
}
function createExcelReport(data) {
    
    return new Promise((resolve, reject) => {
        if (data) {
            var workbook = new Excel.Workbook()
            const fileData = getFileNameAndPath('weekly')
            var sheetChildren =  workbook.addWorksheet(fileData['fileName'])
            var sheetAdult =  workbook.addWorksheet(fileData['fileName'])
            const youthTotals = getTotalsFromData(data, 'youth')
            const adultTotals = getTotalsFromData(data, 'adult')

            addSheetColumns(sheetChildren)
            addDatasheetHeaders(sheetChildren, data[0], 'Summer Food Service Program: SFSP', 'Children', youthTotals.youthUnderTotal)
            
            addWeeklyData(sheetChildren, data, 'youth')
            
            addBlankRow(sheetChildren)
            addDataTableHeaders(sheetChildren, TABLE_HEADERS_DAILY)
            addDataToSheet(sheetChildren, data, 'youth')
            addBlankRow(sheetChildren)
            addFooterRow(sheetChildren, youthTotals.youthUnderTotal)
            formatEachCell(sheetChildren)
            /**-------------------------------------------------------------------------------------- */
            addSheetColumns(sheetAdult)
            addDatasheetHeaders(sheetAdult, data[0], 'Summer Food Service Program: SFSP', 'Adult', adultTotals.adultTotal)

            addWeeklyData(sheetAdult, data, 'adult')
            
            addBlankRow(sheetAdult)
            addDataTableHeaders(sheetAdult, TABLE_HEADERS_DAILY)
            addDataToSheet(sheetAdult, data, 'adult')
            addBlankRow(sheetChildren)

            addFooterRow(sheetAdult, adultTotals.adultTotal)
            formatEachCell(sheetAdult)
            
            createSheetXLSInWorkbook(workbook, fileData['filePath']).then( result => {
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