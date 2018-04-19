import * as React from 'react'
import moment from 'moment'

import DatePickerComponent from '../commonComponents/DatePickerComponent'
import ReportsListComponent from '../admin/ReportsList/ReportsListComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import { getUser, getReportsInRange, generateReport } from '../../api/api'
require('./ReportsComponent.scss')


class ReportsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        var totals = {
            
        }
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            showStartDate: false,
            showEndDate: false,
            library: '',
            type: '',
            totals: totals,
            reports: []
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
        if (type === "startDate") {
            data = {
                ...this.state,
                startDate: date,
                showStartDate: !this.state.showStartDate
            }
        }
        else {
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
        else {
            this.setState({
                ...this.state,
                showEndDate: !this.state.showEndDate
            })
        }
    }

    handleGenerateReport = (event) => {
        const data = {
            reports: this.state.reports
        }
        generateReport(data).then(reseponse => {
            console.log('should be pdf downloading: reseponse: ', reseponse)
            console.log('should be pdf downloading: reseponse: ', reseponse.body())
        }).catch(error => {
            console.log('pdf donwload errir: ', error)
        })
    }

    handleGetReportsInRange = (data) => {
        const postData = {
            startDate: data.startDate,
            endDate: data.endDate,
            library: data.library,
            type: data.type
        }
        getReportsInRange(postData).then(response => {
            console.log('handle get reports in range response:', response)
            this.setState({
                ...this.state,
                ...data,
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
        else {
            return (
                <DatePickerComponent
                    name={type}
                    dateSelected={this.state.endDate}
                    handleDateSelected={this.handleDate}
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
                        <div className="endDateContainer">
                            <div onClick={(event) => this.toggleShowDate(event, 'endDate')}>
                                <span>From: {moment(this.state.endDate).format('MMM, DD YYYY')}</span>
                            </div>
                            {this.state.showEndDate ? this.getDatePicker('endDate') : ''}
                        </div>
                        <div className="startDateContainer">
                            <div onClick={(event) => this.toggleShowDate(event, 'startDate')}>
                                <span>To: {moment(this.state.startDate).format('MMM, DD YYYY')}</span>
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