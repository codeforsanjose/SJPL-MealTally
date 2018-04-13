import * as React from 'react'
import  Checkbox from 'material-ui/Checkbox'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

import { getUser, updateUser } from '../../api/api'
import { interests } from '../../models/interests'

require('../signup/SignupComponent.css');
require('./ProfileComponent.css');
require('../sharedCss.css');

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        
        this.state = {
            ...this.props.user
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
                this.setState({
                    ...response.user
                })
                // if (response.user._id !== this.state._id) {
                //     console.log('response.user._id !== this.state._id uh oh')
                //     window.alert('Invalid operation')
                //     window.location.href = '/login'
                // }
                // else {
                //     console.log('dont need to set state siince user already passed?')
                //     // this.setState({
                //     //     ...response.user
                //     // })
                //}
            }
        }).catch( error => {
            window.alert('Invalid operation')
            window.location.href = '/login'
        });

    }

    handleField = (event, fieldName) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            [fieldName]: event.target.value
            
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

    render () {
        return (
            <div>
                { this.profileDisplayDetails() }
            </div>
        )
        
    }

    profileDisplayDetails = () => {
        return (
            <Paper>
            <form onSubmit={e => this.onSubmit(e)} className="main">
                <h2>Volunteer Profile</h2>
                <div className="section">
                    <div className="checkBoxStyle"><TextField type="text" name="name" value={this.state.name} floatingLabelText="Name" onChange={(e) => this.handleField(e, 'name')} /></div>
                    <div><TextField type="text" name="email" value={this.state.email} floatingLabelText="Email" onChange={(e) => this.handleField(e, 'email')} /></div>
                    <div><TextField type="number" floatingLabelText="Phone" name="phone" value={this.state.phone} onChange={(e) => this.handleField(e, 'phone')} /></div>
                    <div><TextField type="password" name="passphrase" value={this.state.oldPassphrase} floatingLabelText="Coming soon Old Passphrase" onChange={(e) => this.handleField(e, 'oldPassphrase')} /></div>
                    <div><TextField type="password" name="passphrase" value={this.state.newPassphrase} floatingLabelText="Coming soon New Passphrase" onChange={(e) => this.handleField(e, 'newPassphrase')} /></div>
                    <div><TextField type="password" name="retypePassphrase" value={this.state.retypePassphrase} floatingLabelText="Coming soon Retype Passphrase" onChange={(e) => this.handleField(e, 'retypePassphrase')} /></div>
                </div>

                <div><RaisedButton className={`darkStyle saveButton`} type="submit" label="Update Profile" /></div>
            </form>
            </Paper>
        )
    }
}

export default ProfileComponent
