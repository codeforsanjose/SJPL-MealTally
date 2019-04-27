import React, { useState, useEffect } from 'react'
import ReportDisplayComponent from '../Report/ReportDisplayComponent'
import { deleteMeal } from '../../../api/api'
import { AlertComponent } from '../../commonComponents/alertComponent/AlertComponent'

require('./ReportsListComponent.scss');

export default function ReportListComponent(props) {
    const [state, setState] = useState({allReports: props.allReports})

    useEffect( () => {
        console.log(props.allReports)
        if (state.allReports.length === 0) {
            setState({
                allReports: props.allReports
            })
        }
    })
    const handleDeleteReport = (reportId) => {
        const filteredReports = state.allReports.filter(report => {
            return report._id !== reportId
        })
        
        deleteMeal(reportId).then(response => {
            setState({
                allReports: filteredReports
            })
        }).catch(error => {
            console.log('error with delete', error)
            setState({
                allReports: state.allReports,
                showError: true
            })
        })
        

    }

    const alertHandler = (event) => {
        event.preventDefault()
        setState({
            ...state,
            showLoading: false,
            showError: false
        })
    }


    if (state.allReports) {
        const loading = state.showLoading ? <AlertComponent isLoading={true} message={'Deleting report please wait...'} /> : null 
        const error = state.showError ? <AlertComponent isError={true} errors={''} handleAlert={alertHandler} message={'Report not deleted'} /> : null
        const allReports = state.allReports.map( (report, index) => {
            return ( <ReportDisplayComponent key={index} handleDeleteReport={handleDeleteReport} reportData={report} />)
        })
        return (
            <div className="reportListContainer">
                { loading }
                { error }
                <table>
                    <thead>
                        <tr>
                            <th ></th>
                            <th className="date">Date</th>
                            <th className="library">Library</th>
                            <th className="type">Type</th>
                            <th className="comment">Comment</th>
                            <th className="signature">Print Signature</th>
                            <th className="signature">Signature</th>
                        </tr>
                    </thead>
                    <tbody className="reportList">
                    { allReports }
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}
