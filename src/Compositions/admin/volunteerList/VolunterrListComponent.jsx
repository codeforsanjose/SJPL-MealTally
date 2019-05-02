import React from 'react'
import VolunteerDisplayComponent from '../volunteerDisplay/VolunteerDisplayComponent'

require('./VolunteerListComponent.css');

export default function VolunteerListComponent(props) {
    if (props.allVolunteers) {
        const volunteers = props.allVolunteers.map( (volunteer, index) => {
            return ( <VolunteerDisplayComponent key={index} volunteerData={volunteer} />)
        })
        return (
            <div className='volunteerListContainer'>
                { volunteers }
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}
