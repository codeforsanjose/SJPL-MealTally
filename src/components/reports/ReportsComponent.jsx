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
            received: 0,
            leftovers: 0,
            children: 0,
            volunteer: 0,
            adult: 0,
            staff: 0,
            nonreimbursment: 0
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
        getReportsInRange(data).then(response => {
            console.log('range response: ', response)
            this.setState({
                ...this.setState,
                startDate: data.startDate,
                endDate: data.endDate,
                reports: response['allMeals'],
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

    handleDate = (date, type) => {
        if (type === "startDate") {
            this.setState({
                ...this.state,
                startDate: date,
                showStartDate: !this.state.showStartDate
            })
        }
        else {
            this.setState({
                ...this.state,
                endDate: date,
                showEndDate: !this.state.showEndDate
            })
        }
        
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
        generateReport(this.state.reports).then(reseponse => {
            console.log('should be pdf downloading: reseponse: ', reseponse)
        }).catch(error => {
            console.log('pdf donwload errir: ', error)
        })
    }
    handleGetReports = (event) => {
        const data = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            library: this.state.library,
            type: this.state.type
        }
        getReportsInRange(data).then(response => {
            console.log('range response totals: ', response.totals)
            this.setState({
                ...this.setState,
                reports: response['allMeals'],
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
        
        this.setState({
            ...this.state,
            [fieldName]: event.target.value
        })
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
        console.log('display totals : ', this.state.totals)
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
                <div className="startDateContainer">
                    <div onClick={(event) => this.toggleShowDate(event, 'startDate')}>
                        <span>Start Date: {moment(this.state.startDate).format('MMM, DD YYYY')}</span>
                    </div>
                    {this.state.showStartDate ? this.getDatePicker('startDate') : ''}
                </div>
                <div className="endDateContainer">
                    <div onClick={(event) => this.toggleShowDate(event, 'endDate')}>
                        <span>End Date: {moment(this.state.endDate).format('MMM, DD YYYY')}</span>
                    </div>
                    {this.state.showEndDate ? this.getDatePicker('endDate') : ''}

                    <hr />
                    <OptionsSelectorComponent
                        optionsName={'library'}
                        options={libraryOptions}
                        itemSelected={this.state.library}
                        optionsHandler={this.handleMealTallyDetailsOptionsField}
                    />
                    <OptionsSelectorComponent
                        optionsName={'Type'}
                        options={this.props.mealTypes}
                        itemSelected={this.state.type}
                        optionsHandler={this.handleMealTallyDetailsOptionsField}
                    />

                    <button onClick={this.handleGetReports}>Get Reports</button>
                    <button onClick={this.handleGenerateReport}>Generate Report</button>
                    
                    <ReportsListComponent allReports={this.state.reports} />
                    <div className="totalsContainer">
                        {this.state.reports.length > 0 ? this.displayTotals(): ''}
                    </div>
                </div>
            </div>
        )
        
    }
}

export default ReportsComponent