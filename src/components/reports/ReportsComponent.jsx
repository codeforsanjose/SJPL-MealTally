import * as React from 'react'
import moment from 'moment'

import DatePickerComponent from '../commonComponents/DatePickerComponent'
import ReportsListComponent from '../admin/ReportsList/ReportsListComponent'
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
            endDate: this.state.endDate
        }
        getReportsInRange(data).then(allReports => {
            console.log("holy conoly response: ", allReports)
            this.setState({
                ...this.setState,
                reports: allReports
            })
        }).catch(error => {
            console.log("what luck an error: ", error)
            this.setState({
                ...this.setState,
                reports: []
            })
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
                    <button onClick={this.handleGetReports}>Get Reports</button>
                    <ReportsListComponent allReports={this.state.reports} />
                </div>
            </div>
        )
        
    }
}

export default ReportsComponent