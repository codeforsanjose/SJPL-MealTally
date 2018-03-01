
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
        return (
            <div className="incrementContainer">

                IncrementComponent

            </div>
        )
    }
}

export default IncrementComponent
