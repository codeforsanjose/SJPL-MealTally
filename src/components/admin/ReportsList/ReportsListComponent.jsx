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
                    {
                        this.props.allReports.map( (report, index) => {
                            return ( <ReportDisplayComponent key={index} reportData={report} />)
                        })
                    }
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}

export default ReportListComponent
