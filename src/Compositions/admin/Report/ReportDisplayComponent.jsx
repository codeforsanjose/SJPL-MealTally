import React, { useState } from 'react'
import moment from 'moment'

import ModalComponent from '../../../Components/modalComponent/ModalComponent'

require('./ReportDisplayComponent.scss');


export default function ReportDisplayComponent(props) {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = (event) => {
        event.preventDefault()
        setShowDetails(!showDetails)
    }

    const handleDelete = (event, reportID) => {
        event.preventDefault()
        props.handleDeleteReport(reportID)
    }
    const showReportDetails = () => {
        const reportData = props.reportData
        return (
            <div>
                <ModalComponent closeReport={toggleDetails} report={reportData} />
            </div>
        )
    }

    const reportId = props.reportData._id
    const { date, library, type, comments } = props.reportData
    const formattedDate = moment(date).format('MMM DD, YYYY, hh:mm:ss a')
    const url = props.reportData.esigbase64 ? props.reportData.esigbase64 : ''
    const signature = url !== '' ? <img src={url} className='signature-image' /> : 'No eSignature'
    const modalDetails = showDetails ? showReportDetails() : null
    return [
        <tr key={ reportId }>
            <td className='deleteContainer'>
                <button className='deleteButton' onClick={(event) => handleDelete(event, reportId)} >X</button>
            </td>
            <td className='date' onClick={ toggleDetails }>
                { formattedDate }
            </td>
            <td className='libraryName' onClick={ toggleDetails }>
                { library }
            </td>
            <td className='type' onClick={ toggleDetails }>
                { type }
            </td>
            <td onClick={ toggleDetails }>
                { comments }
            </td>
            <td onClick={ toggleDetails }>
                { signature }
            </td>
            <td className="digital-signature">
                {signature}
            </td>
            
        </tr>,
        <div key={moment()}>
            { modalDetails }
        </div>
    ]   
}
