import * as React from 'react'
import $ from 'jquery'
import moment from 'moment'

import ModalComponent from '../../commonComponents/modalComponent/ModalComponent'
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
        event.preventDefault()
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
                <ModalComponent closeReport={this.toggleDetails} report={this.props.reportData} />
            </div>
        )
    }

    render () {
        return [
            <tr key={this.props.reportData._id} onClick={this.toggleDetails} handleGetReportsInRange={this.props.handleGetReportsInRange}>
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
                    {this.props.reportData.comments}
                </td>
                <td>
                    {this.props.reportData.signature}
                </td>
                
            </tr>,
            <div key={moment()}>
                {this.state.showDetails ? this.showReportDetails(): ''}
            </div>
        ]
    }
    componentDidMount() {
        
    }
}

export default ReportDisplayComponent
