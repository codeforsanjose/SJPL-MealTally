import * as React from 'react'

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
                                    
                                </td>
                                <td>
                                    {this.props.reportData.date}
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
