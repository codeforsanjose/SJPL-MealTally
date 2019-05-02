import React, { useState, useEffect } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

import { getUser, updateUser } from '../../api/api'

require('../signup/SignupComponent.css');
require('./ProfileComponent.css');
require('../sharedCss.css');

export default function ProfileComponent(props) {
    const [user, setUser] = useState(props.user)
    
    useEffect( () => {
        if (user._id && user._id === '') {
            const href = window.location.href;
            const id = href.substr(href.lastIndexOf('/') + 1);
            
            getUser(id).then(response => {
                if (response['error']) {
                    window.location.href = '/login'
                }
                else {
                    setUser({
                        ...response.user
                    })
                }
            }).catch( error => {
                window.alert('Invalid operation')
                window.location.href = '/login'
            });
        }
    })

    const handleField = (event, fieldName) => {
        event.preventDefault()
        setState({
            ...state,
            [fieldName]: event.target.value
            
        })
    }

    const validateState = () => {
        let errorMessage = ''
        let emailPatternReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!user.name) {
            errorMessage += 'Please enter a valid name\n'
        }
        if (!emailPatternReg.test(user.email)) {
            errorMessage += 'Please enter a valid email\n'
        }
        return errorMessage
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const error = validateState()
        if (!error) {
            handleUpdateProfile()
        }
        else {
            window.alert(error)
        }

    }

    const handleUpdateProfile = () => {
        updateUser(user).then( (response) => {
            console.log(response)
            window.alert('Thank you for editing your account information')
        }).catch( (error) => {
            console.log(error)
            window.alert('failed update')
        })
    }

    return (
        <Paper>
            <form onSubmit={e => onSubmit(e)} className='main'>
                <h2>Volunteer Profile</h2>
                <div className='section'>
                    <div className='checkBoxStyle'><TextField type='text' name='name' value={user.name} floatingLabelText='Name' onChange={(e) => this.handleField(e, 'name')} /></div>
                    <div><TextField type='text' name='email' value={user.email} floatingLabelText='Email' onChange={(e) => this.handleField(e, 'email')} /></div>
                    <div><TextField type='number' floatingLabelText='Phone' name='phone' value={user.phone} onChange={(e) => this.handleField(e, 'phone')} /></div>
                    <div><TextField type='password' name='passphrase' value={user.oldPassphrase} floatingLabelText='Coming soon Old Passphrase' onChange={(e) => this.handleField(e, 'oldPassphrase')} /></div>
                    <div><TextField type='password' name='passphrase' value={user.newPassphrase} floatingLabelText='Coming soon New Passphrase' onChange={(e) => this.handleField(e, 'newPassphrase')} /></div>
                    <div><TextField type='password' name='retypePassphrase' value={user.retypePassphrase} floatingLabelText='Coming soon Retype Passphrase' onChange={(e) => this.handleField(e, 'retypePassphrase')} /></div>
                </div>

                <div><RaisedButton className={`darkStyle saveButton`} type='submit' label='Update Profile' /></div>
            </form>
        </Paper>
    )
}
