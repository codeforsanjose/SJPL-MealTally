
import * as React from 'react'
import Paper from 'material-ui/Paper'
import appConfig from '../../AppContentConfig.json'

require('./IncrementComponent.scss');


class IncrementComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }    
    render() {
        const { incrementerName, itemCount } = this.props
        console.log("what is props", this.props)
        const fieldName = incrementerName.toLowerCase()
        return (
            <div className="incrementContainer">
                <span className="itemTitle">{incrementerName}</span> 
                <div className="buttonContainer">
                    <button className="inc" onClick={(e) => this.props.incrementerHandler(e, fieldName, -1)}>-</button>
                    <span className="itemCount">{itemCount}</span>
                    <button className="dec" onClick={(e) => this.props.incrementerHandler(e, fieldName, 1)}>+</button>
                </div>
            </div>
        )
    }
}

export default IncrementComponent
