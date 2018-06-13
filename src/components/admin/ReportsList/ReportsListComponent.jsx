import * as React from 'react'
import ReportDisplayComponent from '../Report/ReportDisplayComponent'
import { deleteMeal } from '../../../api/api'
import { AlertComponent } from '../../commonComponents/alertComponent/AlertComponent'

require('./ReportsListComponent.scss');

class ReportListComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        this.state = {
            allReports: this.props.allReports
        }
    }

    componentWillReceiveProps = (newProps) => {
        this.props = newProps
        this.setState({
            allReports: newProps.allReports
        })
    }

    handleDeleteReport = (reportId) => {
        const filteredReports = this.state.allReports.filter(report => {
            return report._id !== reportId
        })
        
        deleteMeal(reportId).then(response => {
            this.setState({
                allReports: filteredReports
            })
        }).catch(error => {
            console.log('error with delete', error)
            this.setState({
                allReports: this.state.allReports,
                showError: true
            })
        })
        

    }

    alertHandler = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            showLoading: false,
            showError: false
        })
    }

    render () {
        if (this.state.allReports) {
            return (
                <div className="reportListContainer">
                {this.state.showLoading ? <AlertComponent isLoading={true} message={'Deleting report please wait...'} />: ''}
                {this.state.showError ? <AlertComponent isError={true} errors={''} handleAlert={this.alertHandler} message={'Report not deleted'} />: ''}
                
                    <table>
                        <thead>
                            <tr>
                                <th ></th>
                                <th className="date">Date</th>
                                <th className="library">Library</th>
                                <th className="type">Type</th>
                                <th className="comment">Comment</th>
                                <th className="signature">Signature</th>
                            </tr>
                        </thead>
                        <tbody className="reportList">
                        {
                            this.state.allReports.map( (report, index) => {
                                return ( <ReportDisplayComponent key={index} handleDeleteReport={this.handleDeleteReport} reportData={report} />)
                            })
                        }
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}

export default ReportListComponent
