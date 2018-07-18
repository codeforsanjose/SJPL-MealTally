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

    handleDelete = (event, reportID) => {
        event.preventDefault()
        this.props.handleDeleteReport(reportID)
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
        const url = this.props.reportData.esigbase64 ? this.props.reportData.esigbase64 : '';
        const signatureStyle = {
            backgroundImage: `url(${url})`,
        }
        const signature = url !== '' ? <img src={url} className="signature-image" /> : 'No eSignature'
        return [
            <tr key={this.props.reportData._id}>
                <td className="deleteContainer">
                    <button className="deleteButton" onClick={(event) => this.handleDelete(event, this.props.reportData._id)} >X</button>
                </td>
                <td className="date" onClick={this.toggleDetails}>
                    {moment(this.props.reportData.date).format('MMM DD, YYYY, hh:mm:ss a')}
                </td>
                <td className="libraryName" onClick={this.toggleDetails}>
                    {this.props.reportData.library}
                </td>
                <td className="type" onClick={this.toggleDetails}>
                    {this.props.reportData.type}
                </td>
                <td onClick={this.toggleDetails}>
                    {this.props.reportData.comments}
                </td>
                <td onClick={this.toggleDetails}>
                    {this.props.reportData.signature}
                    
                </td>
                <td className="digital-signature">
                    {signature}
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
