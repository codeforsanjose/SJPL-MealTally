import * as React from 'react'
import  Checkbox from 'material-ui/Checkbox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { validateEmail } from '../../../lib/validation.js'

import LogoComponent from '../commonComponents/LogoComponent'

import { registerUser } from '../../api/api'


require('../sharedCss.css')
require('./SignupComponent.css')
require('../facebook/FacebookButton.css')

class SignupComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',
            phone: '',
            passphrase: '',
            retypePassphrase: '',
            isAdmin: false,

        }
    }
    handleField = (fieldName, event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            [fieldName]: event.target.value
        })
    }
    
    responseFacebook = (response) => {
        this.setState({
            ...this.state,
            name: response.name,
            email: response.email,
        })
    }
    signupWithFacebook = (e) => {
        e.preventDefault()
        window.location = '/api/auth/facebook'
    }
    
    validateState = () => {
        var errorMessage = ''
        errorMessage = validateEmail(this.state.email)
        if (this.state.name.length == 0) {
            errorMessage += 'Please enter a valid name\n'
        }
        if (!this.state.passphrase) {
            errorMessage += 'Please enter a passphrase\n'
        }
        if (!this.state.retypePassphrase) {
            errorMessage += 'Please retype the passphrase\n'
        }
        if (this.state.passphrase !== this.state.retypePassphrase) {
            errorMessage += 'Passphrases do not match\n'
        }
        return errorMessage
    }
    handleSubmit(e) {
        e.preventDefault()
        let error = this.validateState()
        if (!error) {
            registerUser(this.state)
        }
        else {
            window.alert(error)
        }

    }

    render () {
        return (
            <Paper>
            <LogoComponent />
            <form onSubmit={e => this.onSubmit(e)} className="main">
                <div className="section">
                    
                    <div className="checkBoxStyle"><TextField type="text" name="name" value={this.state.name} floatingLabelText="Name" onChange={(e) => this.handleField('name', e)} /></div>
                    <div><TextField type="text" name="email" value={this.state.email} floatingLabelText="Email" onChange={(e) => this.handleField('email', e)} /></div>
                    <div><TextField type="number" floatingLabelText="Phone" name="phone" onChange={(e) => this.handleField('phone', e)} /></div>
                    <div><TextField type="password" name="passphrase" value={this.state.passphrase} floatingLabelText="Passphrase" onChange={(e) => this.handleField('passphrase', e)} /></div>
                    <div><TextField type="password" name="retypePassphrase" value={this.state.retypePassphrase} floatingLabelText="Retype Passphrase" onChange={(e) => this.handleField('retypePassphrase', e)} /></div>
                    
                </div>
                
                <div><button className="appButton" onClick={e =>this.handleSubmit(e)} >sign up</button></div>
            </form>
            </Paper>
        )
    }
}


export default SignupComponent
