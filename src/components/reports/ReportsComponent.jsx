import * as React from 'react'
import DatePickerComponent from '../commonComponents/DatePickerComponent'

import { getUser } from '../../api/api'
require('./ReportsComponent.scss')


class ReportsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        
        this.state = {
            startDate: '',
            endDate: ''
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
    
    render() {
        return (
            <div>
                start date end date
            </div>
        )
        
    }
}

export default ReportsComponent