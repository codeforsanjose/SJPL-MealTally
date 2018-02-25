import * as React from 'react'
import { exportUserData, getAllUsers, searchVolunteers, makeAdmin } from '../../api/api'
import { interests } from '../../models/interests'
import VolunteerInterestsCheckboxesComponent from '../commonComponents/VolunteerInterestsCheckboxesComponent'
import VolunteerSkillsInputComponent from '../commonComponents/SkillsInputComponent'
import VolunteerListComponent from './volunteerList/VolunterrListComponent'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector-material-ui'
import { validateEmail } from '../../../lib/validation.js'

require('./AdminPanelComponent.css')
require('../sharedCss.css')



class AdminPanelComponent extends React.Component {
    constructor(props) {
        super(props)
        const checkInterests = interests.map(interest => ({ interest: interest, checked: false }));
        this.state = {
            allUsers: [],
            filteredVolunteers: [],
            loadingScreenShow: false,
            makeAdminField: '',
            searchQuery: {
            },
        }
    }
    componentDidMount() {
        getAllUsers().then( response => {
            this.setState({
                filteredVolunteers: response,
            })
        }).catch( error => {
            console.log(error)    
        })
    }

    handleGettingData = (event) => {
        event.preventDefault()
        exportUserData().then(data => {
        }).catch( (error) => {
            console.log(error)
            window.alert('Error getting export data')
        })
    }

    getAllVolunteers = () => {
        getAllUsers().then( response => {
            this.setState({
                filteredVolunteers: response,
                loadingScreenShow: false,
            })
        }).catch( error => {
            console.log(error)    
        })
    }

    

    searchVolunteersHandler = (searchQuery) => {

        if (Object.keys(searchQuery).length != 0) {
            searchVolunteers(searchQuery).then( response => {
                console.log(response)
                if (response.length) {
                    this.setState({
                        ...this.state,
                        filteredVolunteers: response,
                        loadingScreenShow: false,
                        searchQuery: {
                            ...searchQuery,
                        }
                    })
                }
                else {
                    this.setState({
                        ...this.state,
                        filteredVolunteers: [],
                        loadingScreenShow: false,
                        searchQuery: {
                            ...searchQuery,
                        }
                    })

                }
            }).catch( error => {
                console.log(error)
                this.setState({ ...this.state, loadingScreenShow: false })
            })
        }
        else {
            this.getAllVolunteers()
        }
    }

    showLoadingScreen = () => {
        if (this.state.loadingScreenShow) {
            return (
                <div className="loadingScreenContainer">
                    Searching Volunteers Please Wait...
                </div>
            )
        }
    }

    displayVolunteerList = () => {
        if (this.state.filteredVolunteers.length == 0) {
            return (
                <div> No Results for search query</div>
            )
        }
        else {
            return (
                <VolunteerListComponent allVolunteers={this.state.filteredVolunteers} />
            )
        }
    }

    handleMakeAdmin = (event) => {
        this.setState({
            ...this.state,
            makeAdminField: event.target.value,
        })
    }
    submitMakeAdmin = () => {
        event.preventDefault()
        let emailInvalidMsg = validateEmail(this.state.makeAdminField, '')
            if (emailInvalidMsg == '') {
            let data = {
                'email': this.state.makeAdminField
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

    render() {
        return (
            <div className="adminPanelContainer">
                {this.showLoadingScreen()}
                <div className="adminHeaderContainer">
                    <div>
                        <button onClick={this.handleGettingData}>Export User Data</button>
                        <div>
                            <input type="text" onChange={this.handleMakeAdmin} />
                            <button onClick={this.submitMakeAdmin} >Make New Admin</button>
                        </div>
                    </div>
                </div>
                <div className="filterContainer">
                    
                </div>
                <div className="filterResultsContainer">
                    { this.displayVolunteerList() }
                </div>
            </div>
            )
    }
}

export default AdminPanelComponent
