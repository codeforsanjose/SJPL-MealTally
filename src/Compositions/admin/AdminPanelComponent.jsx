import React, { useState, useEffect } from 'react'
import { exportUserData, getAllUsers, searchVolunteers, makeAdmin } from '../../api/api'
import VolunteerListComponent from './volunteerList/VolunterrListComponent'
import LibraryManager from '../admin/LibraryManager/LibraryManager'
import SponsorManager from '../admin/SponsorManager/SponsorManager'
import { validateEmail } from '../../../lib/validation.js'

require('./AdminPanelComponent.css')
require('../sharedCss.css')

function AdminPanelComponent(props) {
    const [state, setState] = useState({
        allUsers: [],
        filteredVolunteers: [],
        loadingScreenShow: false,
        makeAdminField: '',
        tab: 1,
    })

    useEffect( () => {
        if (state.allUsers.length === 0) {
            getAllUsers().then( response => {
                setState({
                    ...state,
                    allUsers: response,
                    filteredVolunteers: response,
                })
            }).catch( error => {
                console.log(error)    
            })
        }
    })  
    
    const handleTabNav = (tab) => {
        setState({
            ...state,
            tab: tab
        })
    }
    const adminNav = (
        <div className="adminNavigationContainer">
            <a className={`navItem ${state.tab === 0 ? 'active' : ''}`} onClick={(e) => handleTabNav(0)} >Users</a>
            <a className={`navItem ${state.tab === 1 ? 'active' : ''}`} onClick={(e) => handleTabNav(1)} >Libraries</a>
            <a className={`navItem ${state.tab === 2 ? 'active' : ''}`} onClick={(e) => handleTabNav(2)} >Sponsors</a>
        </div>
    )
    
    const getCurrentTab = () => {
        switch (state.tab) {
            case (0): {
                return <LibraryManager />
            }
            case (1): {
                return <LibraryManager />
            }
            case (2): {
                return <SponsorManager />
            }
            default: {
                return <LibraryManager />
            }
        }
    
    }
    const currentTab = getCurrentTab()
    return (
        <div className="AdminPanelComponent">
            { adminNav }
            { currentTab }
        </div>
    )
}

export default AdminPanelComponent
