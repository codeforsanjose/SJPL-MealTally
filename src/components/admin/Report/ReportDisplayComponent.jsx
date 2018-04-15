import * as React from 'react'
import moment from 'moment'

require('./ReportDisplayComponent.scss');


class ReportDisplayComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        this.state ={
            showDetails: false
        }
    }

    toggleDetails = (event) => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails
        })
    }

    showReportDetails = () => {
        const children = this.props.reportData.children
        const adults = this.props.reportData.adults
        return (
            <div>
                <span>Children: {children}</span>
            </div>
        )
    }

    render () {
        return (
            <div className="reportDisplayContainer" onClick={this.toggleDetails} >
                <div className="reportSummaryInformation">
                    <table>
                        <tbody>
                            <tr>
                                <td className="date">
                                    {moment(this.props.reportData.date).format('MMM, DD YYYY')}
                                </td>
                                <td className="libraryName">
                                    {this.props.reportData.library}
                                </td>
                                <td className="type">
                                    {this.props.reportData.type}
                                </td>
                                <td>
                                    {this.props.reportData.signature}
                                </td>
                            </tr> 
                            
                        </tbody>
                    </table>
                </div>
                {this.state.showDetails ? this.showReportDetails(): ''}
            </div>
        )
    }
}

export default ReportDisplayComponent
