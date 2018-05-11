
import * as React from 'react'
import Paper from 'material-ui/Paper'
import $ from 'jquery'
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
        const fieldName = this.props.fieldName
        return (
            <div className="incrementContainer">
                <span className="itemTitle">{incrementerName}</span> 
                <div className="buttonContainer">
                    <button className="inc no-zoom" onClick={(e) => this.props.incrementerHandler(e, fieldName, -1)}>-</button>
                    <input className="itemCount" type="number" value={itemCount} onChange={(e) => this.props.incrementerHandler(e, fieldName, e.target.value)} />
                    <button className="dec no-zoom" onClick={(e) => this.props.incrementerHandler(e, fieldName, 1)}>+</button>
                </div>
            </div>
        )
    }
    componentDidMount = () => {
        
    }
}

export default IncrementComponent
