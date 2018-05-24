import * as React from 'react'
import ReportDisplayComponent from '../Report/ReportDisplayComponent'

require('./ReportsListComponent.scss');

class ReportListComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
    }

    render () {
        if (this.props.allReports) {
            return (
                <div className="reportListContainer">
                    <table>
                        <thead>
                            <tr>
                                <th className="date">Date</th>
                                <th className="library">Library</th>
                                <th className="type">Type</th>
                                <th className="comment">Comment</th>
                                <th className="signature">Signature</th>
                            </tr>
                        </thead>
                        <tbody className="reportList">
                        {
                            this.props.allReports.map( (report, index) => {
                                return ( <ReportDisplayComponent key={index} reportData={report} handleGetReportsInRange={this.props.handleGetReportsInRange} />)
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
