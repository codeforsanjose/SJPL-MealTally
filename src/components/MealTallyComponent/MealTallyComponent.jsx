
import * as React from 'react'
import IncrementComponent from '../commonComponents/incrementComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'

//require('./incrementComponent.css');


class MealTallyComponent extends React.Component {
    constructor(props) {
        super(props)
        var mealTallyDetails = {
            received: 0,
            library: ''
            
        }
        this.state = {
            mealTallyDetails: mealTallyDetails
        }
    }
    handleMealTallyDetailsIncrementField = (event, fieldName, value) => {
        event.preventDefault()
        let incValue = this.state.mealTallyDetails[fieldName] + value
        this.setState({
            ...this.state,
            mealTallyDetails: {
                [fieldName]: incValue
            }
        })
    }
    handleMealTallyDetailsOptionsField = (event, fieldName) => {
        event.preventDefault()
        console.log(event.target.value)
        
        this.setState({
            ...this.state,
            mealTallyDetails: {
                [fieldName]: event.target.value
            }
        })
    }
    render() {
        return (
            <div className="MealTallyContainer">
                <IncrementComponent 
                    incrementerName={"Received"} 
                    itemCount={this.state.mealTallyDetails.received} 
                    incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                />
                <OptionsSelectorComponent
                    optionsName={'library'}
                    options={['lib 1', 'lib2', 'lib 3']}
                    itemSelected={this.state.mealTallyDetails.library}
                    optionsHandler={this.handleMealTallyDetailsOptionsField}
                />
            </div>
        )
    }
}

export default MealTallyComponent
