

import * as React from 'react'
import appConfig from '../../AppContentConfig.json'

//require('./incrementComponent.css');


class OptionsSelectorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        var chooseText = 'Choose ' + this.props.fieldName + '...'
        var options = [chooseText, ...this.props.options]
        this.state = {
            options: options
        }
    }
    componentWillReceiveProps = (props) => {
        this.props = props
        var chooseText = 'Choose ' + this.props.fieldName + '...'
        var options = [chooseText, ...this.props.options]
        this.setState({
            options: options
        })
    }

    displayOptions() {
        let fieldName = this.props.optionsName
        return this.state.options.map( (option, index) => {
            return (
                <option key={index} value={option} >{option}</option>
            )
        })

    }
    render() {
        const { optionsName, itemSelected } = this.props
        let item = 'Lunch'
        if (this.props.itemSelected !== '') {
            item = this.props.itemSelected
        }
        return (
            <div className="incrementContainer">
                <span>{optionsName}</span>
                <select onChange={(e) => this.props.optionsHandler(e, this.props.fieldName)} >
                    {this.displayOptions()}
                </select>
            </div>
        )
    }
}

export default OptionsSelectorComponent
