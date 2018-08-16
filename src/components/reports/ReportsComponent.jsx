import * as React from 'react'
import moment from 'moment'

import DatePickerComponent from '../commonComponents/DatePickerComponent'
import ReportsListComponent from '../admin/ReportsList/ReportsListComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import SignatureCanvas from 'react-signature-canvas'
import { getUser, getReportsInRange, generateReport } from '../../api/api'
require('./ReportsComponent.scss')


class ReportsComponent extends React.Component {
    MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    //YEARS = 
    constructor(props) {
        super(props)
        this.props = props
        var totals = {
            
        }
        this.state = {
            startDate: moment().endOf('day'),
            endDate: moment().startOf('day'),
            selectedDate: moment(),
            showStartDate: false,
            showEndDate: false,
            library: '',
            type: '',
            totals: totals,
            reports: [],
            months: this.MONTHS,
            selectedMonth: '',
            tabs: 0,
            esigbase64: ''
        }
    }
    componentDidMount() {
        
    }
    componentWillMount(newProps) {
        this.setState({
            ...this.state,
            startDate: moment().endOf('day'),
            endDate: moment().subtract(7,'d').startOf('day'),
            library: '',
            type: ''
        })
    }

    handleDate = (date, type) => {
        let data = {}
        if (type === 'startDate') {
            const startDate = date.startOf('day')
            data = {
                ...this.state,
                startDate: startDate,
                showStartDate: !this.state.showStartDate
            }
        }
        else if (type === 'endDate') {
            const endDate = date.startOf('day')
            data = {
                ...this.state,
                endDate: endDate,
                showEndDate: !this.state.showEndDate
            }
        }
        
        this.handleGetReportsInRange(data)
    }
    

    toggleShowDate = (event, type) => {
        if (type === "startDate") {
            this.setState({
                ...this.state,
                showStartDate: !this.state.showStartDate
            })
        }
        else if (type === "endDate") {
            this.setState({
                ...this.state,
                showEndDate: !this.state.showEndDate
            })
        }
        else if (type === "selectedDate") {
            this.setState({
                ...this.state,
                showSelectedDate: !this.state.showSelectedDate
            })
        }
    }

    enableExportButton = () => {
        if (this.state.library === '' || this.state.type === '' || this.state.reports.length === 0 || this.state.esigbase64.length === 0) {
            return (<button className="disableGenerateReport" disabled onClick={this.handleGenerateReport}>Export Reports</button>)
        }
        else {
            return (<button className="enableGenerateReport" onClick={this.handleGenerateReport}>Export Reports</button>)
        }
    }

    // may not need anymore due to disabling the export button if none these valid
    validateExportRequest = () => {
        let errors = {}
        if (this.state.library === '') {
            errors['library'] = 'Please select a library'
        }
        if (this.state.type === '') {
            errors['type'] = 'Please select meal type'
        }
        if (this.state.reports.length === 0) {
            errors['reports'] = 'Please export at least one report'
        }
        if (this.state.esigbase64.length === 0) {
            errors['reports'] = 'Please sign report'
        }
        return Object.values(errors).join(' : ')
    }
    handleGenerateReport = (event) => {
        const errors = this.validateExportRequest()
        if (Object.keys(errors).length > 0) {
            window.alert(errors)
        }
        else {
            const data = {
                reports: this.state.reports,
                esigbase64: this.state.esigbase64
            }
            generateReport(data)
        }
    }

    getSelectedDay = (date, type) => {
        const startDate = moment(date).startOf("day")
        const endDate = startDate.endOf("day")
        const data = {
            startDate: startDate,
            endDate: endDate
        }
        this.handleGetReportsInRange(data)
        
    }

    getLastSevenDays = (event) => {
        event.preventDefault()
        let today = moment()
        let lastSeven = moment().subtract(7,'d')
        
        const data = {
            startDate: today,
            endDate: lastSeven,
            library: this.state.library,
            type: this.state.type
        }
        this.handleGetReportsInRange(data)
    }

    getMonthStartEndDates = (event) => {
        event.preventDefault()
        
        const year = +moment().format('YYYY')
        let startDate = moment([year, event.target.selectedIndex - 1])
        let endDate = moment(startDate).endOf('month')

        const data = {
            startDate: endDate,
            endDate: startDate,
            library: this.state.library,
            type: this.state.type
        }

        this.handleGetReportsInRange(data, event.target.value)
    }

    handleGetReportsInRange = (data, month = this.MONTHS[0]) => {
        const postData = {
            startDate: data.startDate,
            endDate: data.endDate,
            library: data.library,
            type: data.type
        }
        getReportsInRange(postData).then(response => {
            this.setState({
                ...this.state,
                ...data,
                selectedMonth: month,
                reports: response.allMeals,
                totals: {
                    ...response.totals
                }
            })
        }).catch(error => {
            console.log("error: ", error)
            this.setState({
                ...this.setState,
                reports: []
            })
        })
    }

    handleMealTallyDetailsOptionsField = (event, fieldName) => {
        event.preventDefault()
        const data = {
            ...this.state,
            [fieldName]: event.target.value
        }
        this.handleGetReportsInRange(data)
    }

    getDatePicker = (type) => {
        if (type === 'startDate') {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={this.state.startDate}
                    handleDateSelected={this.handleDate}
                />
            )
        }
        else if (type === 'endDate') {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={this.state.endDate}
                    handleDateSelected={this.handleDate}
                />
            )
        }
        else {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={this.state.selectedDate}
                    handleDateSelected={this.getSelectedDay}
                />
            )
        }
    }
    
    displayTotals = () => {
        var itemTotals = []
        Object.keys(this.state.totals).map((key, index) => {
            itemTotals.push(<span key={index} className="itemTotal">{key}: {this.state.totals[key]}</span>)
        })
        return itemTotals
    }

    getMonthSelector = () => {
        return (
            <div className="monthSelector">
                <OptionsSelectorComponent
                    options={this.MONTHS}
                    fieldName={'month'}
                    itemSelected={this.state.selectedMonth}
                    optionsHandler={this.getMonthStartEndDates}
                />
            </div>
        )
    }

    getDateRangeSelector = () => {
        return (
            <div className="dateRangeSelector">
                <div className="endDateContainer">
                    {this.getDatePicker('endDate')}
                </div>
                <span>To</span>
                <div className="startDateContainer">
                    {this.getDatePicker('startDate')}
                </div>
            </div>
        )
    }

    setTabs = (event, tab) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            tabs: tab
        })
    }
    isActiveTab = (tab) => {
        return tab === this.state.tabs ? 'nav-item active': 'nav-item'
    }

    handleCanvasSignature = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            esigbase64: this.sigCanvas.toDataURL()
        })
    }
    clearCanvas = (event) => {
        event.preventDefault()
        this.sigCanvas.clear()
    }

    render() {
        const libraryOptions = this.props.libraries.map(library => {
            return library.name
        })
        return (
            <div className="ReportContainer">
                <div className="report-controls">
                    <div>
                        <h3 className="title">Tally Reports</h3>
                    </div>
                        <div className="dateContainer">
                            <div className="report-controls-nav">
                                <a className={this.isActiveTab(0)} href="#" onClick={(event) => this.setTabs(event, 0)}>Choose a Date Range</a>
                                <a className={this.isActiveTab(1)} href="#" onClick={(event) => this.setTabs(event, 1)}>Choose a Month</a>
                            </div>
                            {this.state.tabs === 0 ? this.getDateRangeSelector(): this.getMonthSelector()}
                        </div>
                </div>

                <div className="dateContainerContainer">
                    <OptionsSelectorComponent
                        fieldName={'library'}
                        options={libraryOptions}
                        itemSelected={this.state.library}
                        optionsHandler={this.handleMealTallyDetailsOptionsField}
                    />
                    <OptionsSelectorComponent
                        fieldName={'type'}
                        options={this.props.mealTypes}
                        itemSelected={this.state.type}
                        optionsHandler={this.handleMealTallyDetailsOptionsField}
                    />
                </div>
                <div>
                    <SignatureCanvas penColor='black' onEnd={this.handleCanvasSignature} ref={(ref) => { this.sigCanvas = ref }} canvasProps={{width: 600, height: 200, className: 'sigCanvas'}} />
                    <br />
                    <button onClick={this.clearCanvas}>Clear Signature</button>
                </div>
                <div >
                    {this.enableExportButton()}
                </div>
                <ReportsListComponent allReports={this.state.reports} />
            </div>
        )
        
    }
}

export default ReportsComponent