import * as React from 'react'
import  Checkbox from 'material-ui/Checkbox'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import AdminPanelComponent from '../admin/AdminPanelComponent'
import LogoComponent from '../commonComponents/LogoComponent'
import MealTallyComponent from '../MealTallyComponent/MealTallyComponent'

import { Redirect } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector-material-ui'
import { getUser, updateUser } from '../../api/api'
import { interests } from '../../models/interests'

require('../signup/SignupComponent.css');
require('./ProfileComponent.css');
require('../sharedCss.css');

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        var user = {
            _id: '',
            name: '',
            email: '',
            phone: '',
            oldPassphrase: '',
            newPassphrase: '',
            retypeNewPassphrase: '',
            isAdmin: false,
        }
        var mealTallyDetails = {
            received: 0,
            library: ''
            
        }
        this.state = {
            user: user,
            mealTallyDetails: mealTallyDetails,
            tabs: 1,
        }
    }

    componentDidMount() {
        const href = window.location.href;
        const id = href.substr(href.lastIndexOf('/') + 1);
        
        
        getUser(id).then(response => {
            let checkboxInterests;
            
            if (response['error']) {
                window.location.href = '/login'
            }
            else {
                
                this.setState({...response.user});
            }
        }).catch( error => {
            window.alert('Invalid operation')
        });
    }

    handleUserDetailsField = (event, fieldName, value) => {
        event.preventDefault()

        this.setState({
            ...this.state,
            user: {
                [fieldName]: event.target.value
            }
        })
    }
    
    validateState = () => {
        let errorMessage = ''
        let emailPatternReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!this.state.name) {
            errorMessage += 'Please enter a valid name\n'
        }
        if (!emailPatternReg.test(this.state.email)) {
            errorMessage += 'Please enter a valid email\n'
        }
        
        return errorMessage
    }
    
    onSubmit(e) {
        e.preventDefault();
        let error = this.validateState()
        if (!error) {
            this.handleUpdateProfile()
        }
        else {
            window.alert(error)
        }

    }
    handleUpdateProfile = () => {
        updateUser(this.state).then( (response) => {
            console.log(response)
            window.alert('Thank you for editing your account information')    
        }).catch( (error) => {
            console.log(error)
            window.alert('failed update')
        })
    }


    handleTabs = (event, tab) => {
        console.log(tab)
        this.setState({
            ...this.state,
            tabs: tab,
        })
    }


    displayNavigation = () => {
        if (this.state.isAdmin) {
            return (
                <div>
                    <div className="adminProfileNavigationContainer">
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 0)} >Dashboard</a></div> |
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 1)} >Profile</a></div>
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 2)} >Meal Tally</a></div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="profileNavigationContainer">
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 1)} >Profile</a></div>
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 2)} >Meal Tally</a></div>
                    </div>
                </div>
            )

        }
    }

    displayPanels = () => {
        if (this.state.isAdmin) {
            switch (this.state.tabs) {
                case (0): {
                    console.log('admin tabs  is 0')
                    return (
                        <AdminPanelComponent />
                    )
                }
                case (1): {
                    console.log('admin tabs  is 1')

                    return (
                        this.profileDisplayDetails()
                    )
                }
                case (2): {
                    console.log('admin tabs  is 2')
                    return (
                        <MealTallyComponent />
                    )
                }

                default: {

                    console.log('admin default')
                }
            }

        }
        else {
            switch (this.state.tabs) {
                case (1): {
                    console.log('tabs  is 1')
                    return (
                        this.profileDisplayDetails()
                    )
                }
                case (2): {
                    console.log('tabs  is 2')
                    return (
                        <MealTallyComponent />
                    )
                }
                default: {
                    console.log('just default')
                }
            }

        }
    }

    render () {
        return (
            <div>
                <LogoComponent />
                { this.displayNavigation() }
                { this.displayPanels() }

            </div>
        )
    }
    profileDisplayDetails = () => {
        return (
            <Paper>
            <form onSubmit={e => this.onSubmit(e)} className="main">
                <h2>Volunteer Profile</h2>
                <div className="section">
                    <div className="checkBoxStyle"><TextField type="text" name="name" value={this.state.name} floatingLabelText="Name" onChange={(e) => this.handleField('name', e)} /></div>
                    <div><TextField type="text" name="email" value={this.state.email} floatingLabelText="Email" onChange={(e) => this.handleField('email', e)} /></div>
                    <div><TextField type="number" floatingLabelText="Phone" name="phone" value={this.state.phone} onChange={(e) => this.handleField('phone', e)} /></div>
                    <div><TextField type="password" name="passphrase" value={this.state.oldPassphrase} floatingLabelText="Coming soon Old Passphrase" onChange={(e) => this.handleField('oldPassphrase', e)} /></div>
                    <div><TextField type="password" name="passphrase" value={this.state.newPassphrase} floatingLabelText="Coming soon New Passphrase" onChange={(e) => this.handleField('newPassphrase', e)} /></div>
                    <div><TextField type="password" name="retypePassphrase" value={this.state.retypePassphrase} floatingLabelText="Coming soon Retype Passphrase" onChange={(e) => this.handleField('retypePassphrase', e)} /></div>
                    
                </div>
                
                <div><RaisedButton className={`darkStyle saveButton`} type="submit" label="Update Profile" /></div>
            </form>
            </Paper>
        )
    }
}

export default ProfileComponent
