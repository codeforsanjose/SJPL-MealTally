import * as React from 'react'
import moment from 'moment'

import DatePickerComponent from '../commonComponents/DatePickerComponent'
import ReportsListComponent from '../admin/ReportsList/ReportsListComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import { getUser, getReportsInRange } from '../../api/api'
require('./ReportsComponent.scss')


class ReportsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            showStartDate: false,
            showEndDate: false,
            library: '',
            type: '',
            reports: []
        }
    }
    componentDidMount() {
        const href = window.location.href;
        const id = href.substr(href.lastIndexOf('/') + 1);
        getUser(id).then(response => {
            if (response['error']) {
                window.location.href = '/login'
            }
            else {
                this.setState({
                    ...this.state,
                    user: {
                        ...response.user
                    }
                })
            }
        }).catch( error => {
            window.alert('Invalid operation')
            window.location.href = '/login'
        });
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

    handleGetReports = (event) => {
        const data = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            library: this.state.library,
            type: this.state.type
        }
        getReportsInRange(data).then(allReports => {
            this.setState({
                ...this.setState,
                reports: allReports
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
    
    render() {
        console.log('reports component libraries passed: ', this.props)
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
                    <ReportsListComponent allReports={this.state.reports} />
                </div>
            </div>
        )
        
    }
}

export default ReportsComponent