import * as React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LogoComponent from '../commonComponents/LogoComponent'

import IncrementComponent from '../commonComponents/incrementComponent'

import { loginUser } from '../../api/api'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from 'react-router-dom'

require('./LoginComponent.css')
require('../sharedCss.css')
require('../facebook/FacebookButton.css')


class LoginComponent extends React.Component {
    state = {
        email: '',
        passphrase: '',
        facebookLogin: false,
        goToProfile: false
    }

    handleField = (event, fieldName) => {
        event.preventDefault()
        this.setState({
            [fieldName]: event.target.value
        })
    }

    responseFacebook = (response) => {
        this.setState({
            facebookLogin: true,
            name: response.name,
            email: response.email
        })
        this.handleLoggingUser()
    }

    loginWithFacebook = (e) => {
        e.preventDefault()
        window.location = '/api/auth/facebook'
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.handleLoggingUser()
    }

    handleLoggingUser = () => {
        loginUser(this.state).then(user => {
            if (user._id) {
                this.setState({
                    user,
                    goToProfile: true
                })
            }
            else {
                window.alert('Error logging in please try again')
                this.setState({
                    email: '',
                    passphrase: ''
                })
            }
        }).catch( (error) => {
            console.log('Error in login', error)
            window.alert('Error logging in please try again')
        })
    }

    goBacktoGiveLightMain = (event) => {
        // TODO: place in config
        window.location = 'http://www.givelight.org'
    }

    render() {
        if (this.state.goToProfile && this.state.user) {
            let userData = this.state.user
            let profileComponentDataAndNavBarFunctions = {
                pathname: `/profile/${userData._id}`,
                state: {
                    logoutNavBar: this.props.location.state,
                    userData
                }
            }
            return (
                <Redirect to={profileComponentDataAndNavBarFunctions} />
            )
        }
        return (
            <Paper zDepth={1} className="paperStyle">
                <LogoComponent />
                <form onSubmit={this.onSubmit} className="LoginForm">
                    <div><TextField type="text" name="email" value={this.state.email} floatingLabelText="Email" onChange={e => this.handleField(e, 'email')} /></div>
                    <div><TextField type="password" name="passphrase" value={this.state.passphrase} floatingLabelText="Passphrase" onChange={e => this.handleField(e, 'passphrase')} /></div>
                    <div><button className="appButton" onClick={e => this.handleSubmit(e)} >login</button></div>
                </form>
                <IncrementComponent />
            </Paper>
        )
    }
}

export default LoginComponent
