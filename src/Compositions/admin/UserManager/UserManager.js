import React from 'react'

import './UserManager.css'

export default function UserManager(props) {
    const handleGettingData = (event) => {
        event.preventDefault()
        exportUserData().then(data => {
        }).catch( (error) => {
            console.log(error)
            window.alert('Error getting export data')
        })
    }

    const getAllVolunteers = () => {
        getAllUsers().then( response => {
            setState({
                filteredVolunteers: response,
                loadingScreenShow: false,
            })
        }).catch( error => {
            console.log(error)    
        })
    }
    const displayVolunteerList = () => {
        if (state.filteredVolunteers.length == 0) {
            return (
                <div> No Results for search query</div>
            )
        }
        else {
            return (
                <VolunteerListComponent allVolunteers={state.filteredVolunteers} />
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
        event.preventDefault()
        const emailInvalidMsg = validateEmail(state.makeAdminField, '')
            if (emailInvalidMsg == '') {
            const data = {
                'email': state.makeAdminField
            }
            makeAdmin(data).then( response => {
                console.log(response)
            }).catch( error => {
                console.log(error)
            })
        }
        else {
            window.alert('Invalid Email')
        }
    }
    const searchVolunteersHandler = (searchQuery) => {
        if (Object.keys(searchQuery).length != 0) {
            searchVolunteers(searchQuery).then( response => {
                console.log(response)
                if (response.length) {
                    setState({
                        ...state,
                        filteredVolunteers: response,
                        loadingScreenShow: false,
                        searchQuery: {
                            ...searchQuery,
                        }
                    })
                }
                else {
                    setState({
                        ...state,
                        filteredVolunteers: [],
                        loadingScreenShow: false,
                        searchQuery: {
                            ...searchQuery,
                        }
                    })

                }
            }).catch( error => {
                console.log(error)
                setState({ ...state, loadingScreenShow: false })
            })
        }
        else {
            getAllVolunteers()
        }
    }

    const showLoadingScreen = () => {
        if (state.loadingScreenShow) {
            return (
                <div className="loadingScreenContainer">
                    Loading Please Wait...
                </div>
            )
        }
    }

    return (
        <div className="adminPanelContainer">
            { showLoadingScreen() }
            <div className="adminHeaderContainer">
                <div>
                    <button onClick={handleGettingData}>Export User Data</button>
                    <div>
                        <input type="text" onChange={handleMakeAdmin} />
                        <button onClick={submitMakeAdmin} >Make New Admin</button>
                    </div>
                </div>
            </div>
            <div className="filterContainer">
                
            </div>
            <div className="filterResultsContainer">
                { displayVolunteerList() }
            </div>
        </div>
    )
}