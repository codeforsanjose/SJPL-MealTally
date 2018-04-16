import * as React from 'react'
import moment from 'moment'

require('./ModalComponent.scss');


class ModalComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        this.state = {
        }
    }

    showMealDetails = () => {
        
        return (
            <div className="messageContainer">
                <div>
                    <span>Meals received from Vendor: {this.props.meal.received}</span>
                </div>
            </div>
        )
        
    }

    render () {
        return (
            <div className="ModalContainer" >
                {this.showMealDetails()}
            </div>
        )
    }
}

export default ModalComponent
