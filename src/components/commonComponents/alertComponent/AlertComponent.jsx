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

    displayErrors = () => {
        return Object.keys(this.props.errors).map((key, index) => {
            return (
                <div key={index}>
                    {key} : {this.props.errors[key]}
                </div>
            )
        })
    }
    showDetails = () => {
        if (this.props.isLoading) {
            return (
                <div className="loadingMessageContainer">
                    {this.props.message}
                </div>
            )
        }
        if (this.props.isError) {
            return (
                <div className="errorMessageContainer">
                    {Object.keys(this.props.errors).length} {this.props.message}<br />
                    {this.displayErrors()}
                    <div className="alertActions">
                        <button className="okButton" onClick={this.props.handleAlert}>O.K</button>
                    </div>
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
