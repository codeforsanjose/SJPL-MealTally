'use strict'
const fs = require('fs')
var Excel = require('exceljs')
const moment = require('moment')
const _ = require('lodash')

const TABLE_HEADERS_DAILY = {
    'Date': moment().format('MMM/DD/YYYY'),
    'Vendor Meals': 0,
    'Previous Day Meals': 0,
    'Available Meals': 0,
    'Unusable Meals': 0,
    'Served Meals': 0,
    'Certified': '',
    'By': ''
}

const TABLE_HEADERS_WEEKLY = {
    'Date Range': moment().format('MMM/DD/YYYY'),
    'Meals From Vendor': 0,
    'Leftovers From Previous Day': 0,
    'Total meals available': 0,
    'Unusable Meals': 0,
    'Total Meals Served': 0
}
const getFileNameAndPath = (type, first, last) => {
    var today = moment()
    var year = today.format('YYYY')
    var month = today.format('MMM')
    var day = today.format('DDD')
    var filePath = "./reports/" + "report-date-" + year + "-" + month + "-" + day + ".xlsx"
    var fileName = "report-date-" + year + "-" + month + "-" + day + ".xlsx"
    var fileAdultName = "Adult Totals (" + moment(first.date).format('MM/DD/YYYY') + ") to (" + moment(last.date).format('MM/DD/YYYY') + ").xlsx"
    var fileYouthName = "Children Totals (" + moment(first.date).format('MM/DD/YYYY') + ") to (" + moment(last.date).format('MM/DD/YYYY') + ").xlsx"
    return {
        "fileName": fileName,
        "filePath": filePath,
        "fileAdultName": fileAdultName,
        "fileYouthName": fileYouthName
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
        youthUnderTotal += getTotalCategoryFromReport(report, category) //report.childrenAndTeens + report.teenStaffAndVolunteers
        staffUnderTotal += report.teenStaffAndVolunteers
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

const addDataToSheet = (workbook, sheet, data, category) => { // this is daily data
    data.map((report, index) => {
        const data = [
            moment(report.date).format('ddd, MMM DD'),
            report.received,
            report.leftovers,
            (report.received + report.leftovers),
            report.unusable,
            getTotalCategoryFromReport(report, category),
            report.signature,
        ]
        sheet.addRow(data)
        sheet.lastRow.height = 25
        const image = (report.esigbase64 && report.esigbase64 !== '') ? report.esigbase64 : null

        const imageID = (image) ? workbook.addImage({
            base64: image,
            extension: 'png',
        }) : null
        const startIndex = `H${index + 8}`
        const endIndex = `H${index + 8}`
        // image id can be 0 if ( 0 ) is false
        if (imageID || imageID === 0) {
            sheet.addImage(imageID, `${startIndex}:${endIndex}`)
        }
    })
}
const addDatasheetHeaders = (sheet, report, program, category, weeklyTotal) => {
    const addHeaderFont = (sheet) => {
        sheet.eachRow((row, index) => {
            if (index < 4) {
                row.font = {
                    'size': 11
                }
            }
        })
    }
    const monthYear = moment(report.date).format('MMMM YYYY')
    addHeaderFont(sheet)
    sheet.addRow([program, '', '', '', '', ''])
    sheet.addRow(['Report Sheet for:' + moment(report.date).format('MMMM YYYY'), '', '', '', 'Meal Type:', report.type + ' (' + category + ')'])
    sheet.addRow(['Site Name:' + report.library, '', '', '', '', ''])
    sheet.mergeCells('A2:D2')
    sheet.mergeCells('F2:H2')
    sheet.mergeCells('A3:D3')
    sheet.mergeCells('F3:H3')
    sheet.mergeCells('A4:D4')
    sheet.mergeCells('F4:H4')
    addBlankRow(sheet)
}

const addSheetColumns = (sheet) => {
    sheet.columns = ['','','','','','','', ''].map(header => {
        return {
            header: header,
            width: 14,
            size: 11,
            name: 'Arial',
        }
    })
    
}
const formatEachCell = (sheet) => {
    sheet.eachRow(row => {
        row.eachCell({ includeEmpty: true }, cell => {
            cell.alignment = { 'horizontal': 'left' }
            cell.font = { name: 'Arial', size: 11 }
        })
    })
}
const addDataTableHeaders = (sheet, headers) => {
    sheet.addRow(_.keys(headers))
    sheet.lastRow.font = {
        bold: true,
        name: 'Arial',
        size: 11
    }
}
const createSheetXLSInWorkbook = (workbook, filePath) => {
    return workbook.xlsx.writeFile(filePath)
}
const getDateRange = (first, last) => {
    const dateRangeFirst = moment(first.date).startOf('week')
    const dateRangeLast = moment(last.date).endOf('week')
    if (moment(first.date).format('M') === moment(last.date).format('M')) {
        return dateRangeFirst.format('MMM Do - ') + dateRangeLast.format('MMM DD')    
    }
    else {
        return dateRangeFirst.format('MMM Do - ') + dateRangeLast.format('MMM DD')
    }
}
const addBlankRow = (sheet) => {
    sheet.addRow(['', '', '' ,'', '', '', '', ''])
    sheet.lastRow.eachCell({ includeEmpty: true }, function(cell, rowNumber) {
        cell.font = {
            name: 'Arial'
        }
    })
}
const addFooterRow = (workbook, sheet, weeklyTotal, signature) => {
    sheet.addRow(['I certify the above information is accurate and true: x.___________________________', '', '', '', '', 'Total Meals', weeklyTotal])
    const rowOffset = 9 + totalDataLength
    sheet.mergeCells(`A${rowOffset}:E${rowOffset}`)
    const image = signature
    const imageID = (image) ? workbook.addImage({
        base64: image,
        extension: 'png',
    }) : null
    const startIndex = `D${rowOffset}`
    const endIndex = `E${rowOffset}`

    if (imageID || imageID === 0) {
        sheet.addImage(imageID, `${startIndex}:${endIndex}`)
    }
    
    sheet.lastRow.font = {
        bold: true,
        size: 11,
        name: 'Arial',
    }
    sheet.lastRow.height = 30
}

const addLatestLaundryFormattingList = (sheet) => {
    sheet.getRow(7).alignment = { wrapText: true }
    sheet.getRow(7).height = 30
    sheet.getRow(7).font = {
        bold: true,
        name: 'Arial'
    }
}
let totalDataLength = 0
function createExcelReport(data, signature) {
    totalDataLength = data.length
    return new Promise((resolve, reject) => {
        if (data) {
            //console.log('[', data.map((datum,index) => index < 5 ? JSON.stringify(datum) + ',': null), ']'  )
            data.reverse()
            var workbook = new Excel.Workbook()
            const firstReport = data[0]
            const lastReport = data[data.length - 1]
            const fileData = getFileNameAndPath('weekly', firstReport, lastReport)
            var sheetChildren =  workbook.addWorksheet(fileData['fileYouthName'], {
                pageSetup:{orientation:'landscape'}
            })
            var sheetAdult =  workbook.addWorksheet(fileData['fileAdultName'], {
                pageSetup:{orientation:'landscape'}
            })
            const youthTotals = getTotalsFromData(data, 'youth')
            const adultTotals = getTotalsFromData(data, 'adult')

            addDataStructureToSheet(workbook, sheetChildren, data, youthTotals, 'youthUnderTotal', 'Youth', signature)
            addDataStructureToSheet(workbook, sheetAdult, data, adultTotals, 'adultTotal', 'Adult', signature)
            createSheetXLSInWorkbook(workbook, fileData['filePath']).then( result => {
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

const addDataStructureToSheet = (workbook, sheet, data, totals, type, mealType, signature) => {
    addSheetColumns(sheet)
    addDatasheetHeaders(sheet, data[0], 'Food Service Program', mealType, totals[type])
    addBlankRow(sheet)
    addDataTableHeaders(sheet, TABLE_HEADERS_DAILY)
    addDataToSheet(workbook, sheet, data, mealType.toLowerCase())
    addBlankRow(sheet)
    formatEachCell(sheet)
    addLatestLaundryFormattingList(sheet)
    addFooterRow(workbook, sheet, totals[type], signature)
}

// export the pdf creation function
module.exports = {createExcelReport,}