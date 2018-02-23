import * as React from 'react'
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import CallIcon from 'material-ui/svg-icons/communication/call'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import MapIcon from 'material-ui/svg-icons/maps/map'
require('./VolunteerDisplayComponent.css');


class VolunteerDisplayComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
    }

    render () {
        return (
            <div className="volunteerDisplayContainer">
                <div className="volunteerContactInformation">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <AccountCircleIcon />
                                </td>
                                <td>
                                    {this.props.volunteerData.name}
                                </td>
                            </tr> 
                            <tr>
                                <td>
                                    <EmailIcon />
                                </td>
                                <td>
                                    {this.props.volunteerData.email}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CallIcon />
                                </td>
                                <td>
                                    {this.props.volunteerData.phone}
                                </td>
                            </tr> 
                            <tr>
                                <td>
                                    <MapIcon />
                                </td>
                                <td>
                                    {this.props.volunteerData.country}<br />
                                    {this.props.volunteerData.region}
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div> 
                <div>
                    <div>Interests: 
                        <ul>
                            {this.props.volunteerData.interests.map( (interest, index) => {
                                return (<li key={index}>{interest}</li>)
                            })}
                        </ul>    
                    </div>
                    <div>Skills: 
                        <ul>
                            {this.props.volunteerData.skills.map( (skill, index) => {
                                return (<li key={index}>{skill}</li>)
                            })}
                        </ul>    
                    </div> 
                </div> 
            </div>
        )
    }
}

export default VolunteerDisplayComponent
