

import * as React from 'react'
import appConfig from '../../AppContentConfig.json'

//require('./incrementComponent.css');


class OptionsSelectorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    displayOptions() {
        let fieldName = this.props.optionsName
        return this.props.options.map( (option, index) => {
            if (option.toLowerCase() === 'lunch') {
                return (
                    <option selected key={index} value={option} >{option}</option>
                )
            }
            else {
                return (
                    <option key={index} value={option} >{option}</option>
                )
            }
        })

    }
    render() {
        const { optionsName, itemSelected } = this.props
        const fieldName = optionsName.toLowerCase()
        return (
            <div className="incrementContainer">
                <span>{optionsName}</span>
                <select onChange={(e) => this.props.optionsHandler(e,fieldName)} >
                    {this.displayOptions()}
                </select>
            </div>
        )
    }
}

export default OptionsSelectorComponent
