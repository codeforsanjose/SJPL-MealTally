import * as React from 'react'
import moment from 'moment'

require('./ModalComponent.scss');


class ModalComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        this.state = {
            message: ''
        }
    }

    showDetails = () => {
        
        return (
            <div className="messageContainer">
                this is a modal
            </div>
        )
        
    }

    render () {
        return (
            <div className="ModalContainer" >
                {this.showDetails()}
            </div>
        )
    }
}

export default ModalComponent
