import * as React from 'react'

import ProfileComponent from '../profile/ProfileComponent'
import AdminPanelComponent from '../admin/AdminPanelComponent'
import LogoComponent from '../commonComponents/LogoComponent'
import MealTallyComponent from '../MealTallyComponent/MealTallyComponent'
import ReportsComponent from '../reports/ReportsComponent'

import { getUser } from '../../api/api'


class InAppNavigationComponent extends React.Component {
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
            isAdmin: this.props.isAdmin
        }
    }
    componentDidMount() {
        const href = window.location.href;
        const id = href.substr(href.lastIndexOf('/') + 1);
        getUser(id).then(response => {
            if (response['error']) {
                window.location.href = '/login'
            }
            else {
                this.setState({
                    ...this.state,
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
    handleTabs = (event, tab) => {
        this.setState({
            ...this.state,
            tabs: tab,
        })
    }
    displayNavigation = () => {
        if (this.state.user.isAdmin) {
            return (
                <div>
                    <div className="adminProfileNavigationContainer">
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 0)} >Dashboard</a></div> |
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 1)} >Profile</a></div> |
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 2)} >Meal Tally App</a></div> |
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 3)} >Reports</a></div> |
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="profileNavigationContainer">
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 1)} >Profile</a></div> | 
                        <div className="navItem"><a className="navItem" onClick={(e) => this.handleTabs(e, 2)} >Meal Tally</a></div>
                    </div>
                </div>
            )
        }
    }

    displayPanels = () => {
        console.log("DISPLAYING PANELS")
        if (this.state.user.isAdmin) {
            switch (this.state.tabs) {
                case (0): {
                    return (
                        <AdminPanelComponent />
                    )
                }
                case (1): {
                    return (
                        <ProfileComponent user={this.state.user} />
                    )
                }
                case (2): {
                    return (
                        <MealTallyComponent user={this.state.user} mealTallyDetails={this.state.mealTallyDetails} />
                    )
                }
                case (3): {
                    return (
                        <ReportsComponent user={this.state.user} />
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
                    return (
                        //this.profileDisplayDetails()
                        <ProfileComponent user={this.state.user} />
                    )
                }
                case (2): {
                    return (
                        <MealTallyComponent user={this.state.user} />
                    )
                }
                default: {
                    console.log('just default')
                }
            }
        }
    }
    render() {
        return (
            <div>
                <LogoComponent />
                { this.displayNavigation() }
                { this.displayPanels() }
            </div>
        )
        
    }
}

export default InAppNavigationComponent