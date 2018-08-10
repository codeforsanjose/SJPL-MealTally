'use strict'
const fs = require('fs')
var Excel = require('exceljs')
const moment = require('moment')
const _ = require('lodash')

const TABLE_HEADERS_DAILY = {
    'Date': moment().format('MMM/DD/YYYY'),
    'Meal From Vendor': 0,
    'Leftovers From Previous Day': 0,
    'Total Meals Available': 0,
    'Unusable Meals': 0,
    'Total Meals Served': 0,
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
    const range = getDateRange(first, last)
    var today = new Date()
    var year = today.getFullYear() + 1
    var month = today.getMonth() + 1
    var day = today.getDate()
    var filePath = "./reports/" + "report-date-" + type + "-" + year + "-" + month + "-" + day + ".xlsx"
    var fileName = "report-date-" + type + "-" + year + "-" + month + "-" + day + ".xlsx"
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
const getCategoryTotals = (data, category) => {
    let totals = {
        'Week of:': getDateRange(data[data.length - 1], data[0])
    }
    var sum = 0.0
    data.map(report => {
        const key = moment(report.date).format('ddd. DD')
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
        'bold': true,
        'size': 11
    }
    sheet.lastRow.border = {
        top: {style:'double', color: {argb:'00000000'}},
        left: {style:'double', color: {argb:'00000000'}},
        right: {style:'double', color: {argb:'00000000'}}
    }
    sheet.lastRow.fill = {
        type: 'pattern',
        pattern:'solid',
        fgColor:{argb:'EEEEEEEE'},
        bgColor:{argb:'EEEEEEEE'}
    };
    sheet.addRow(_.values(totals))
    sheet.lastRow.fill = {
        type: 'pattern',
        pattern:'solid',
        fgColor:{argb:'EEEEEEEE'},
        bgColor:{argb:'EEEEEEEE'}
    };
    sheet.lastRow.border = {
        left: {style:'double', color: {argb:'00000000'}},
        bottom: {style:'double', color: {argb:'00000000'}},
        right: {style:'double', color: {argb:'00000000'}}
    }
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
            ''
        ]
        sheet.addRow(data)
        sheet.lastRow.height = 25
        const image = (report.esigbase64 && report.esigbase64 !== '') ? report.esigbase64 : null

        const imageID = (image) ? workbook.addImage({
            base64: image,
            extension: 'png',
        }) : null
        const startIndex = `H${index + 11}`
        const endIndex = `H${index + 11}`
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
    sheet.addRow([program, '', '', '', 'Weekly Total:', weeklyTotal])
    sheet.addRow(['Summer Report Sheet for:' + moment(report.date).format('MMMM YYYY'), '', '', '', 'Meal Type:', report.type + ' (' + category + ')'])
    sheet.addRow(['Site Name:' + report.library, '', '', '', 'Site Name:', report.library])
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
            width: 12,
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
        return dateRangeFirst.format('MMM Do - ') + dateRangeLast.format('MMM Do')    
    }
    else {
        return dateRangeFirst.format('MMM Do - ') + dateRangeLast.format('MMM Do')
    }
}
const addBlankRow = (sheet) => {
    sheet.addRow(['', '', '' ,'', '', '', '', ''])
    sheet.lastRow.eachCell({ includeEmpty: true }, function(cell, rowNumber) {
        cell.font = {
            name: 'Arial'
        }
        cell.fill = {
            bgColor: {argb:'00000000'}
        }
    })
}
const addFooterRow = (workbook, sheet, weeklyTotal, signature) => {
    sheet.addRow(['I certify the above information is accurate and true: x.___________________________', '', '', '', '', 'Weekly Total', weeklyTotal])
    const rowOffset = 13 + totalDataLength
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
    
    sheet.lastRow.height = 30
    sheet.lastRow.font = {
        bold: true,
        size: 11,
        name: 'Arial',
    }
}

const addLatestLaundryFormattingList = (sheet) => {
    sheet.getRow(10).alignment = { wrapText: true }
    sheet.getRow(10).height = 30
    sheet.getRow(10).font = {
        bold: true,
        name: 'Arial'
    }
}
let totalDataLength = 0
function createExcelReport(data, signature) {
    totalDataLength = data.length
    return new Promise((resolve, reject) => {
        if (data) {
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

            addDataStructureToSheet(workbook, sheetChildren, data, youthTotals, 'youth', signature)
            addDataStructureToSheet(workbook, sheetAdult, data, adultTotals, 'adult', signature)
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

const addDataStructureToSheet = (workbook, sheet, data, totals, type, signature) => {
    sheet.font = {
        name: 'Airial'
    }
    addSheetColumns(sheet)
    addDatasheetHeaders(sheet, data[0], 'Summer Food Service Program: SFSP', type, totals.adultTotal)

    addWeeklyData(sheet, data, 'adult')
    
    addBlankRow(sheet)
    addBlankRow(sheet)
    addDataTableHeaders(sheet, TABLE_HEADERS_DAILY)
    addDataToSheet(workbook, sheet, data, type)
    addBlankRow(sheet)
    addBlankRow(sheet)

    
    formatEachCell(sheet)
    addLatestLaundryFormattingList(sheet)
    addFooterRow(workbook, sheet, totals.adultTotal, signature)
}

// export the pdf creation function
module.exports = {createExcelReport,}