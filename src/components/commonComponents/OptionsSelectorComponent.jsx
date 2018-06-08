

import * as React from 'react'
import appConfig from '../../AppContentConfig.json'

//require('./incrementComponent.css');


class OptionsSelectorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        const overrideText = this.props.overrideText
        var chooseText = 'Choose ' + this.props.fieldName + '...'
        var options = [chooseText, ...this.props.options]
        this.state = {
            chooseText: overrideText | chooseText,
            options: options
        }
    }
    componentWillReceiveProps = (props) => {
        this.props = props
        var chooseText = 'Choose ' + this.props.fieldName + '...'
        var options = [chooseText, ...this.props.options]
        this.setState({
            chooseText: chooseText,
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
        const optionsName = this.props.fieldName
        const itemSelected = this.props.itemSelected
        let item = this.state.chooseText
        if (this.props.itemSelected !== '') {
            item = this.props.itemSelected
        }
        return (
            <div className="incrementContainer">
                <select onChange={(e) => this.props.optionsHandler(e, this.props.fieldName)} value={item}>
                    {this.displayOptions()}
                </select>
            </div>
        )
    }
}

export default OptionsSelectorComponent
