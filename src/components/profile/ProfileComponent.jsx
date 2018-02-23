import * as React from 'react'
import  Checkbox from 'material-ui/Checkbox'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import AdminPanelComponent from '../admin/AdminPanelComponent'
import GiveLightLogoComponent from '../commonComponents/GiveLightLogoComponent'
import VolunteerInterestsCheckboxesComponent from '../commonComponents/VolunteerInterestsCheckboxesComponent'
import VolunteerSkillsInputComponent from '../commonComponents/SkillsInputComponent'

import { Redirect } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector-material-ui'
import { getUser, updateUser } from '../../api/api'
import { interests } from '../../models/interests'

require('../signup/SignupComponent.css');
require('./ProfileComponent.css');
require('../sharedCss.css');

class ProfileComponent extends React.Component {
    state = {
        _id: '',
        name: '',
        email: '',
        country: '',
        region: '',
        phone: '',
        interests: [],
        skills: [],
        skillsInput: '',
        oldPassphrase: '',
        newPassphrase: '',
        retypeNewPassphrase: '',
        checkboxInterests: [],
        isAdmin: false,
        adminTabs: 0,
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
                if (this.state.checkboxInterests.length === 0) {
                    checkboxInterests = interests.map(interest => ({ interest: interest, checked: false }))
                }

                checkboxInterests = checkboxInterests.map(interest => {
                    if (response.user && response.user.interests && response.user.interests.includes(interest.interest)) {
                        return { ...interest, checked: true };
                    } 
                    return { ...interest, checked: false };
                });
                this.setState({...response.user, checkboxInterests, skillsInput: response.user.skills && response.user.skills.join(',')});
            }
        }).catch( error => {
            window.alert('Invalid operation')
        });
    }

    handleField = (fieldName, event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            [fieldName]: event.target.value
        })
    }
    handleCountry = (event, index, value) => {
        this.setState({
            ...this.state,
            country: value
        })
    }
    handleRegion = (event, index, value) => {
        this.setState({
            ...this.state,
            region: value
        })
    }
    handleCheckbox = (event, index, interest) => {
        var data = this.state.checkboxInterests
        data[index] = { interest: data[index].interest, checked: !data[index].checked }
        var volunteerInterests = []
        data.map( interestCheckbox => {
            if (interestCheckbox.checked) {
                volunteerInterests.push(interestCheckbox.interest)
            }
        })
        this.setState({
            ...this.state,
            checkboxInterests: data,
            interests: volunteerInterests
        })
    }
    handleSkillsInput = (event) => {
        event.preventDefault()
        if (event.target.value == "") {
            this.setState({
                ...this.state,
                skillsInput: "",
                skills: []
            })
        }
        else {
            this.setState({
                ...this.state,
                skillsInput: event.target.value,
                skills: this.state.skillsInput.split(/[,]+/)
            })
        }
    }
    disableCheckboxes = () => {
        return this.state.checkboxInterests.filter( (interest) => {return interest.checked}).length < 3
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
        if (!this.state.country) {
            errorMessage += 'Please select a country\n'
        }
        if (!this.state.region) {
            errorMessage += 'Please select a region\n'
        }
            /*
        if (!this.state.passphrase) {
            errorMessage += 'Please enter a passphrase\n'
        }
        if (!this.state.retypePassphrase) {
            errorMessage += 'Please retype the passphrase\n'
        }
        if (this.state.passphrase !== this.state.retypePassphrase) {
            errorMessage += 'Passphrases do not match\n'
        }
             */
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
        this.setState({
            ...this.state,
            adminTabs: tab,
        })
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
                    <div className="countryRegionContainer">
                        <CountryDropdown
                            value={this.state.country}
                            onChange={this.handleCountry}
                        />
                    </div>
                    <div>
                        <RegionDropdown
                            country={this.state.country}
                            value={this.state.region}
                            onChange={this.handleRegion}
                        />
                    </div>
                </div>
                <div className={`section volunteerDetailsContainer`}>
                    <h3>Choose 3 Interests</h3>
                    <VolunteerInterestsCheckboxesComponent handleCheckbox={this.handleCheckbox} checkboxInterests={this.state.checkboxInterests} />
                    <VolunteerSkillsInputComponent handleSkillsInput={this.handleSkillsInput} skillsInput={this.state.skillsInput ? this.state.skillsInput : ''} />
                </div>
                <div><RaisedButton className={`darkStyle saveButton`} type="submit" label="Update Profile" /></div>
            </form>
            </Paper>
        )
    }

    displayAdminNavigation = () => {
        if (this.state.isAdmin) {
            return (
                <div>
                    <div className="adminProfileNavigationContainer">
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 0)} >Search</a></div> |
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 1)} >Profile</a></div>
                    </div>
                </div>
            )
        }
    }

    displayPanels = () => {
        if (this.state.isAdmin && this.state.adminTabs == 0) {
            return (
                <AdminPanelComponent />
            )
        }
        else {
            return (
                this.profileDisplayDetails()
            )
        }
    }

    render () {
        return (
            <div>
                <GiveLightLogoComponent />
                { this.displayAdminNavigation() }
                { this.displayPanels() }
            
            </div>
        )
    }
}

export default ProfileComponent
