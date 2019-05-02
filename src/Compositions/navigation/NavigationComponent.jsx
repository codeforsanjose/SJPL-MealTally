import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../header/Header'
import SignupComponent from '../signup/SignupComponent'
import LoginComponent from '../login/LoginComponent'
import MealTallyComponent from '../MealTallyComponent/MealTallyComponent'
import InAppNavigationComponent from '../navigation/InAppNavigationComponent'

require('./NavigationComponent.css');

export default function NavigationComponent(props) {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={MealTallyComponent}/>
                    <Route path='/signup' component={SignupComponent}/>
                    <Route path='/login' component={LoginComponent}/>
                    <Route path='/profile' component={InAppNavigationComponent}/>
                </Switch>

            </div>
        </BrowserRouter>
    )
}
