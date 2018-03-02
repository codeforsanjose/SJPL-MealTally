
import * as React from 'react'
import moment from 'moment'

import IncrementComponent from '../commonComponents/incrementComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import DatePickerComponent from '../commonComponents/DatePickerComponent'

//require('./incrementComponent.css');


class MealTallyComponent extends React.Component {
    constructor(props) {
        super(props)
        var mealTallyDetails = {
            received: 0,
            library: '',
            date: moment()
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
    handleDateField = (date) => {
        console.log(date)
        
        this.setState({
            ...this.state,
            mealTallyDetails: {
                date: date
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
                <DatePickerComponent
                    name={'Date'}
                    dateSelected={this.state.mealTallyDetails.date}
                    handleDateSelected={this.handleDateField}
                />
            </div>
        )
    }
}

export default MealTallyComponent
