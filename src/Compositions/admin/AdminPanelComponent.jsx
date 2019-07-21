import React, { useState, useEffect } from 'react'
import { makeAdmin, registerUser, getSponsers } from '../../api/api'
import { validateEmail } from '../../../lib/validation.js'

require('./AdminPanelComponent.css')
require('../sharedCss.css')

function AdminPanelComponent(props) {
    const [state, setState] = useState({
        allUsers: [],
        filteredVolunteers: [],
        loadingScreenShow: false,
        makeAdminField: '',
        sponsers: [],
        sponserSearch: '',
        sponser: '',
    })
    const [userState, setUserInfo] = useState({})

    const showLoadingScreen = () => {
        if (state.loadingScreenShow) {
            return (
                <div className="loadingScreenContainer">
                    Loading...
                </div>
            )
        }
    }
    useEffect( () => {
        if (state.sponsers.length === 0) {
            getSponsers().then(result => {
                setState({
                    ...state,
                    sponsers: result
                })
            })
        }
    })

    const handleMakeAdmin = (event) => {
        setState({
            ...state,
            makeAdminField: event.target.value,
        })
    }
    const handleInputField = (event, field) => {
        setUserInfo({
            ...userState,
            [field]: event.target.value,
        })
    }
    const submitMakeAdmin = () => {
        const emailInvalidMsg = validateEmail(state.makeAdminField, '')
        setState({
            ...state,
            loadingScreenShow: true
        })
        if (emailInvalidMsg === '') {
            const data = {
                'email': state.makeAdminField
            }
            makeAdmin(data).then( response => {
                setState({
                    ...state,
                    loadingScreenShow: false
                })
            }).catch( error => {
                console.log(error)
            })
        }
        else {
            window.alert('Invalid Email')
        }
    }
    const createSupervisor = () => {
        registerUser(userState)
    }

    const sponserSearch = (event) => {
        setState({
            ...state,
            sponserSearch: event.target.value,
        })
    }
    const selectSponser = (sponser) => {
        setState({
            ...state,
            sponser: sponser,
        })
    }
    const searchedSponsers = state.sponserSearch === '' ? state.sponsers : state.sponsers.filter(sponser => {
        return sponser.name.toLowerCase().includes(state.sponserSearch.toLowerCase())
    })
    const sponserMarkup = searchedSponsers.map(sponser => {
        return <li onClick={ selectSponser }>{ sponser.name }</li>
    })
    return (
        <div className="adminPanelContainer">
            { showLoadingScreen() }
            <div className="adminHeaderContainer">
                <div className="register-site-superviser">
                    <div>
                        <label htmlFor="name">First and Last Name</label><input name="name" type="text" onChange={(event) => handleInputField(event, 'name')} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><input name="email" type="email" onChange={(event) => handleInputField(event, 'email')} />
                    </div>
                    <div>
                        <label htmlFor="sponser">Sponser</label><input name="sponser" type="text" onChange={(event) => handleInputField(event, 'sponser')} />
                        
                    </div>
                    <div>
                        <input type="text" onChange={ sponserSearch } />
                        <ul className="sponser-list">
                            { sponserMarkup }
                        </ul>
                    </div>
                    <div>
                        <label htmlFor="region">Region</label><input name="region" type="text" onChange={(event) => handleInputField(event, 'region')} />
                    </div>
                </div>
                <button onClick={createSupervisor}>Register</button>

            </div>
        </div>
    )
}

export default AdminPanelComponent
