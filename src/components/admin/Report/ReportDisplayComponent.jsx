import * as React from 'react'
import moment from 'moment'

require('./ReportDisplayComponent.scss');


class ReportDisplayComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
    }

    render () {
        return (
            <div className="reportDisplayContainer">
                <div className="reportContactInformation">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    {moment(this.props.reportData.date).format('MMM, DD YYYY')}
                                </td>
                                <td>
                                    {this.props.reportData.library}
                                </td>
                                <td>
                                    {this.props.reportData.type}
                                </td>
                                <td>
                                    {this.props.reportData.signature}
                                </td>
                            </tr> 
                            
                        </tbody>
                    </table>
                </div> 
            </div>
        )
    }
}

export default ReportDisplayComponent
