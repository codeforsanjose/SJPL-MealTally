

import * as React from 'react'

require('./OptionsSelectorComponent.scss');


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
        if (this.props.itemSelected && this.props.itemSelected !== '') {
            item = this.props.itemSelected
        }
        return (
            <div className="optionsSelectorContainer">
                <select onChange={(e) => this.props.optionsHandler(e, this.props.fieldName)} value={item}>
                    {this.displayOptions()}
                </select>
                <div className="errorContainer">
                    <span className="errorMessage">{this.props.errorMessage}</span>
                </div>
            </div>
        )
    }
}

export default OptionsSelectorComponent
