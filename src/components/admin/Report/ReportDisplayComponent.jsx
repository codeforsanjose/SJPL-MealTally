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
                <ModalComponent report={this.props.reportData} />
            </div>
        )
    }

    render () {
        return (
            <div className="reportDisplayContainer" >
                <div className="reportSummaryInformation">
                    <tr onClick={this.toggleDetails}>
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
                        {this.state.showDetails ? this.showReportDetails(): ''}
                    </tr>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // i do not like and does not work correctly but only way i could think of a simple solution without using a framework
        const self = this
        $('div').click(function() {
            self.setState({
                ...self.state,
                showDetails: false
            })
        })
    }
}

export default ReportDisplayComponent
