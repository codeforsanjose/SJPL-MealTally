import * as React from 'react'
import moment from 'moment'

import DatePickerComponent from '../commonComponents/DatePickerComponent'
import ReportsListComponent from '../admin/ReportsList/ReportsListComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import { getUser, getReportsInRange, generateReport } from '../../api/api'
require('./ReportsComponent.scss')


class ReportsComponent extends React.Component {
    MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    constructor(props) {
        super(props)
        this.props = props
        var totals = {
            
        }
        this.state = {
            startDate: moment(),
            endDate: moment(),
            selectedDate: moment(),
            showStartDate: false,
            showEndDate: false,
            library: '',
            type: '',
            totals: totals,
            reports: [],
            months: this.MONTHS,
            selectedMonth: this.MONTHS[0],
            
        }
    }
    componentDidMount() {
        
    }
    componentWillMount(newProps) {
        const data = {
            startDate: moment(),
            endDate: moment().subtract(7,'d'),
            library: '',
            type: ''
        }
        this.handleGetReportsInRange(data)
        
    }

    handleDate = (date, type) => {
        let data = {}
        if (type === 'startDate') {
            data = {
                ...this.state,
                startDate: date,
                showStartDate: !this.state.showStartDate
            }
        }
        else if (type === 'endDate') {
            data = {
                ...this.state,
                endDate: date,
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

    handleGenerateReport = (event) => {
        const data = {
            reports: this.state.reports
        }
        generateReport(data)
    }

    getSelectedDay = (date, type) => {
        const startDate = moment(date).startOf("day")
        const endDate = startDate.endOf("day")
        const data = {
            startDate: startDate,
            endDate: endDate
        }
        console.log(data)
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
        let startDate = moment([year, event.target.selectedIndex])
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

    render() {
        const libraryOptions = this.props.libraries.map(library => {
            return library.name
        })
        return (
            <div className="ReportContainer">
                <div className="report-controls">
                    <div className="dateContainer">
                        <div>
                            <h3 className="title">Report Settings</h3>
                        </div>
                        <div>
                            <div className="singleDay">
                                <div onClick={(event) => this.toggleShowDate(event, 'selectedDate')}>
                                    <span> {moment(this.state.selectedDate).format('MMM, DD YYYY')}</span>
                                </div>
                                {this.state.showSelectedDate ? this.getDatePicker('selectedDate') : ''}
                            </div>
                            <button onClick={this.getLastSevenDays}>Last 7 Days</button>
                            <OptionsSelectorComponent
                                optionsName={'Month'}
                                fieldName={'selectedMonth'}
                                options={this.state.months}
                                itemSelected={this.state.selectedMonth}
                                optionsHandler={this.getMonthStartEndDates}
                            />
                        </div>
                        <div className="endDateContainer">
                            <div onClick={(event) => this.toggleShowDate(event, 'endDate')}>
                                <span> {moment(this.state.endDate).format('MMM, DD YYYY')}</span>
                            </div>
                            {this.state.showEndDate ? this.getDatePicker('endDate') : ''}
                        </div>
                        <span>To</span>
                        <div className="startDateContainer">
                            <div onClick={(event) => this.toggleShowDate(event, 'startDate')}>
                                <span> {moment(this.state.startDate).format('MMM, DD YYYY')}</span>
                            </div>
                            {this.state.showStartDate ? this.getDatePicker('startDate') : ''}
                        </div>
                        </div>
                        <OptionsSelectorComponent
                            optionsName={'library'}
                            fieldName={'library'}
                            options={libraryOptions}
                            itemSelected={this.state.library}
                            optionsHandler={this.handleMealTallyDetailsOptionsField}
                        />
                        <OptionsSelectorComponent
                            optionsName={'Type'}
                            fieldName={'type'}
                            options={this.props.mealTypes}
                            itemSelected={this.state.type}
                            optionsHandler={this.handleMealTallyDetailsOptionsField}
                        />

                        <button className="generateReport" onClick={this.handleGenerateReport}>Export Reports</button>
                        
                    </div>
             

                    <ReportsListComponent allReports={this.state.reports} />
                    
                
            </div>
        )
        
    }
}

export default ReportsComponent