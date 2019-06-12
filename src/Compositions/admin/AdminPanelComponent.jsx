import React, { useState, useEffect } from 'react'
import { makeAdmin } from '../../api/api'
import { validateEmail } from '../../../lib/validation.js'

require('./AdminPanelComponent.css')
require('../sharedCss.css')

function AdminPanelComponent(props) {
    const [state, setState] = useState({
        allUsers: [],
        filteredVolunteers: [],
        loadingScreenShow: false,
        makeAdminField: '',
    })

    const showLoadingScreen = () => {
        if (state.loadingScreenShow) {
            return (
                <div className="loadingScreenContainer">
                    Loading...
                </div>
            )
        }
    }

    const handleMakeAdmin = (event) => {
        setState({
            ...state,
            makeAdminField: event.target.value,
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

    return (
        <div className="adminPanelContainer">
            { showLoadingScreen() }
            <div className="adminHeaderContainer">
                <div>
                    <div>
                        <input type="text" onChange={handleMakeAdmin} />
                        <button onClick={submitMakeAdmin} >Make New Admin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelComponent
