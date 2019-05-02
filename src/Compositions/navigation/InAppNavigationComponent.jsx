import React, {useState, useEffect } from 'react'

import ProfileComponent from '../profile/ProfileComponent'
import AdminPanelComponent from '../admin/AdminPanelComponent'
import MealTallyComponent from '../MealTallyComponent/MealTallyComponent'
import ReportsComponent from '../reports/ReportsComponent'

import { getUser, getLibraries } from '../../api/api'

import './InAppNavigationComponent.css'

export default function InAppNavigationComponent(props) {
    const user = {
        _id: '',
        name: '',
        email: '',
        phone: '',
        oldPassphrase: '',
        newPassphrase: '',
        retypeNewPassphrase: '',
        isAdmin: false,
    }
    const mealTallyDetails = {
  
    }
    const [state, setState ] = useState({
        user: user,
        mealTallyDetails: mealTallyDetails,
        tabs: 2,
        libraries: [],
        mealTypes: ['Breakfast', 'AM Sanck', 'Lunch', 'PM Snack', 'Dinner'],
        isAdmin: props.isAdmin
    })
    
    useEffect( () => {
        if (state.libraries.length === 0) {
            getLibraries().then(libraries => {
                setState({
                    ...state,
                    libraries: libraries
                })
            }).catch(error => {
                console.log('error getting libraries: ', error)
                setState({
                    ...state,
                    libraries: []
                })
            })
        }
    })

    useEffect( () => {
        if (state.user._id === '') {
            const href = window.location.href;
            const id = href.substr(href.lastIndexOf('/') + 1);
            getUser(id).then(response => {
                if (response['error']) {
                    window.location.href = '/login'
                }
                else {
                    setState({
                        ...state,
                        user: {
                            ...response.user
                        }
                    })
                }
            }).catch( error => {
                window.alert('Invalid operation')
                window.location.href = '/login'
            });
        }
    })
    
    const handleTabs = (event, tab) => {
        setState({
            ...state,
            tabs: tab,
        })
    }
    const displayNavigation = () => {
        if (state.user.isAdmin) {
            return (
                <div>
                    <div className="adminProfileNavigationContainer">
                        <a className="navItem" onClick={(e) => handleTabs(e, 0)} >Accounts</a>
                        <a className="navItem" onClick={(e) => handleTabs(e, 2)} >Tally</a>
                        <a className="navItem" onClick={(e) => handleTabs(e, 3)} >Reports</a>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="profileNavigationContainer">
                        <a className="navItem" onClick={(e) => handleTabs(e, 2)} >Meal Tally</a>
                    </div>
                </div>
            )
        }
    }

    const displayPanels = () => {
        if (state.user.isAdmin) {
            const { user, libraries, mealTypes } = state
            switch (state.tabs) {
                case (0): {
                    return (
                        <AdminPanelComponent />
                    )
                }
                case (1): {
                    return (
                        <ProfileComponent user={ user } />
                    )
                }
                case (2): {
                    return (
                        <MealTallyComponent user={ user } />
                    )
                }
                case (3): {
                    return (
                        <ReportsComponent user={ user } libraries={ libraries } mealTypes={ mealTypes } />
                    )
                }
                default: {
                    console.log('admin default')
                }
            }
        }
        else {
            const { user } = state
            switch (state.tabs) {
                case (1): {
                    return (
                        <ProfileComponent user={ user } />
                    )
                }
                case (2): {
                    return (
                        <MealTallyComponent user={ user || {} } />
                    )
                }
                default: {
                    console.log('just default')
                }
            }
        }
    }
    const navigation = displayNavigation()
    const panels = displayPanels()
    return (
        <div>
            { navigation }
            { panels }
        </div>
    )
}
