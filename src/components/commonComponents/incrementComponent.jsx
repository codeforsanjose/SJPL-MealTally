
import * as React from 'react'
import appConfig from '../../AppContentConfig.json'

//require('./incrementComponent.css');


class IncrementComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }    
    render() {
        const { incrementerName, itemCount } = this.props
        const fieldName = incrementerName.toLowerCase()
        return (
            <div className="incrementContainer">
                <span><span>{incrementerName}</span> <span>{itemCount}</span></span>
                <button onClick={(e) => this.props.incrementerHandler(e, fieldName, -1)}>-</button>
                <button onClick={(e) => this.props.incrementerHandler(e, fieldName, 1)}>+</button>
            </div>
        )
    }
}

export default IncrementComponent
