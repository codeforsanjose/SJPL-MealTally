import React, { useState, useRef } from 'react'
import moment from 'moment'

import DatePickerComponent from '../../Components/DatePickerComponent'
import ReportsListComponent from '../admin/ReportsList/ReportsListComponent'
import OptionsSelectorComponent from '../../Components/OptionsSelectorComponent'
import SignatureCanvas from 'react-signature-canvas'
import { getReportsInRange, generateReport } from '../../api/api'
require('./ReportsComponent.scss')

export default function ReportsComponent(props) {
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const totals = {
            
    }
    const sigCanvas = useRef(null)
    const [state, setState] = useState({
        startDate: new Date(moment().endOf('day')),
        endDate: new Date(moment().subtract(7,'d').startOf('day')),
        selectedDate: new Date(),
        showStartDate: false,
        showEndDate: false,
        library: '',
        type: '',
        totals: totals,
        reports: [] ,
        months: MONTHS,
        selectedMonth: '',
        tabs: 0,
        esigbase64: ''
    })

    const handleDate = (date, type) => {
        let data = {}
        if (type === 'startDate') {
            const startDate = date
            data = {
                ...state,
                startDate: startDate,
                showStartDate: !state.showStartDate
            }
        }
        else if (type === 'endDate') {
            const endDate = date
            data = {
                ...state,
                endDate: endDate,
                showEndDate: !state.showEndDate
            }
        }
        
        handleGetReportsInRange(data)
    }
    

    // const toggleShowDate = (event, type) => {
    //     if (type === "startDate") {
    //         setState({
    //             ...state,
    //             showStartDate: !state.showStartDate
    //         })
    //     }
    //     else if (type === "endDate") {
    //         setState({
    //             ...state,
    //             showEndDate: !state.showEndDate
    //         })
    //     }
    //     else if (type === "selectedDate") {
    //         setState({
    //             ...state,
    //             showSelectedDate: !state.showSelectedDate
    //         })
    //     }
    // }

    const enableExportButton = () => {
        if (state.library === '' || state.type === '' || state.reports.length === 0 || state.esigbase64.length === 0) {
            return (<button className="disableGenerateReport" disabled onClick={ handleGenerateReport }>Export Reports</button>)
        }
        else {
            return (<button className="enableGenerateReport" onClick={ handleGenerateReport }>Export Reports</button>)
        }
    }

    // may not need anymore due to disabling the export button if none these valid
    const validateExportRequest = () => {
        let errors = {}
        if (state.library === '') {
            errors['library'] = 'Please select a library'
        }
        if (state.type === '') {
            errors['type'] = 'Please select meal type'
        }
        if (state.reports.length === 0) {
            errors['reports'] = 'Please export at least one report'
        }
        if (state.esigbase64.length === 0) {
            errors['reports'] = 'Please sign report'
        }
        return Object.values(errors).join(' : ')
    }
    const handleGenerateReport = (event) => {
        const errors = validateExportRequest()
        if (Object.keys(errors).length > 0) {
            window.alert(errors)
        }
        else {
            const data = {
                reports: state.reports,
                esigbase64: state.esigbase64
            }
            generateReport(data)
        }
    }

    const getSelectedDay = (date, type) => {
        const startDate = new Date(moment(date).startOf("day"))
        const endDate = startDate.endOf("day")
        const data = {
            startDate: startDate,
            endDate: endDate
        }
        handleGetReportsInRange(data)
    }

    // const getLastSevenDays = (event) => {
    //     event.preventDefault()
    //     let today = moment()
    //     let lastSeven = moment().subtract(7,'d')
    //     const { library, type } = state
    //     const data = {
    //         startDate: today,
    //         endDate: lastSeven,
    //         library: library,
    //         type: type
    //     }
    //     handleGetReportsInRange(data)
    // }

    const getMonthStartEndDates = (event) => {
        event.preventDefault()
        
        const year = +moment().format('YYYY')
        let startDate = new Date(moment([year, event.target.selectedIndex - 1]))
        let endDate = new Date(moment(startDate).endOf('month'))
        const { library, type } = state
        const data = {
            startDate: endDate,
            endDate: startDate,
            library: library,
            type: type
        }

        handleGetReportsInRange(data, event.target.value)
    }

    const handleGetReportsInRange = (data, month = MONTHS[0]) => {
        const postData = {
            startDate: data.startDate,
            endDate: data.endDate,
            library: data.library,
            type: data.type
        }

        getReportsInRange(postData).then(response => {
            setState({
                ...state,
                ...data,
                selectedMonth: month,
                reports: response.allMeals,
                totals: {
                    ...response.totals
                }
            })
        }).catch(error => {
            console.log("error: ", error)
            setState({
                ...setState,
                reports: []
            })
        })
    }

    const handleMealTallyDetailsOptionsField = (event, fieldName) => {
        event.preventDefault()
        const data = {
            ...state,
            [fieldName]: event.target.value
        }
        handleGetReportsInRange(data)
    }

    const getDatePicker = (type) => {
        if (type === 'startDate') {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={state.startDate}
                    handleDateSelected={handleDate}
                />
            )
        }
        else if (type === 'endDate') {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={state.endDate}
                    handleDateSelected={handleDate}
                />
            )
        }
        else {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={state.selectedDate}
                    handleDateSelected={getSelectedDay}
                />
            )
        }
    }
    
    // const displayTotals = () => {
    //     return Object.keys(state.totals).map((key, index) => {
    //         itemTotals.push(<span key={index} className="itemTotal">{key}: {state.totals[key]}</span>)
    //     })
    // }

    const getMonthSelector = () => {
        return (
            <div className="monthSelector">
                <OptionsSelectorComponent
                    options={MONTHS}
                    fieldName={'month'}
                    itemSelected={state.selectedMonth}
                    optionsHandler={getMonthStartEndDates}
                />
            </div>
        )
    }

    const getDateRangeSelector = () => {
        return (
            <div className="dateRangeSelector">
                <div className="endDateContainer">
                    { getDatePicker('endDate') }
                </div>
                <span>To</span>
                <div className="startDateContainer">
                    { getDatePicker('startDate') }
                </div>
            </div>
        )
    }

    const setTabs = (event, tab) => {
        event.preventDefault()
        setState({
            ...state,
            tabs: tab
        })
    }
    const isActiveTab = (tab) => {
        return tab === state.tabs ? 'nav-item active': 'nav-item'
    }

    const handleCanvasSignature = (event) => {
        event.preventDefault()
        setState({
            ...state,
            esigbase64: sigCanvas.current.toDataURL()
        })
    }
    const clearCanvas = (event) => {
        event.preventDefault()
        sigCanvas.clear()
    }

    const libraryOptions = props.libraries.map(library => {
        return library.name
    })
    const dateSelector = state.tabs === 0 ? getDateRangeSelector() : getMonthSelector()
    return (
        <div className="ReportContainer">
            <div className="report-controls">
                <div>
                    <h3 className="title">Tally Reports</h3>
                </div>
                    <div className="dateContainer">
                        <div className="report-controls-nav">
                            <a className={isActiveTab(0)} href="#" onClick={(event) => setTabs(event, 0)}>Choose a Date Range</a>
                            <a className={isActiveTab(1)} href="#" onClick={(event) => setTabs(event, 1)}>Choose a Month</a>
                        </div>
                        { dateSelector }
                    </div>
            </div>

            <div className="dateContainerContainer">
                <OptionsSelectorComponent
                    fieldName={ 'library' }
                    options={ libraryOptions }
                    itemSelected={ state.library }
                    optionsHandler={ handleMealTallyDetailsOptionsField }
                />
                <OptionsSelectorComponent
                    fieldName={'type'}
                    options={ props.mealTypes }
                    itemSelected={ state.type }
                    optionsHandler={ handleMealTallyDetailsOptionsField }
                />
            </div>
            <div>
                <SignatureCanvas penColor='black' onEnd={handleCanvasSignature} ref={sigCanvas} canvasProps={{width: 600, height: 200, className: 'sigCanvas'}} />
                <br />
                <button onClick={ clearCanvas }>Clear Signature</button>
            </div>
            <div >
                { enableExportButton() }
            </div>
            <ReportsListComponent allReports={ state.reports } />
        </div>
    )
}