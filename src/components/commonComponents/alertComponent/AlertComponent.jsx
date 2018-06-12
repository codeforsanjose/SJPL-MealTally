import * as React from 'react'
import moment from 'moment'

require('./AlertComponent.scss');


class AlertComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        this.state = {
            message: ''
        }
    }

    showDetails = () => {
        console.log("show details called for alert copoentntntntn", this.props)
        if (this.props.isLoading) {
            return (
                <div className="loadingMessageContainer">
                    {this.props.message}
                </div>
            )
        }
        else {
            return (
                <div className="messageContainer">
                    <div className="message">
                        {this.props.message}
                    </div>
                    <div className="alertActions">
                        <button className="okButton" onClick={this.props.handleAlert}>O.K</button>
                    </div>
                </div>
            ) 
        }
    }

    render () {
        return (
            <div className="alertContainer" >
                {this.showDetails()}
            </div>
        )
    }
}

export default AlertComponent
