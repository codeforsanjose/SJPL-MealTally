import React from 'react'
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import CallIcon from 'material-ui/svg-icons/communication/call'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import MapIcon from 'material-ui/svg-icons/maps/map'
require('./VolunteerDisplayComponent.css');

export default function VolunteerDisplayComponent(props) {
    return (
        <div className='volunteerDisplayContainer'>
            <div className='volunteerContactInformation'>
                <div className='accountIcon'>
                    <AccountCircleIcon />
                </div>
                <div className='name'>
                    {props.volunteerData.name}
                </div>
            
                <div className='emailIcon'>
                    <EmailIcon />
                </div>
                <div className='email'>
                    {props.volunteerData.email}
                </div>
            
                <div className='phoneIcon'>
                    <CallIcon />
                </div>
                <div className='phone'>
                    {props.volunteerData.phone}
                </div>
            </div> 
        </div>
    )

}
