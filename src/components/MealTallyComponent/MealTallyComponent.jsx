
import * as React from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper'

import IncrementComponent from '../commonComponents/incrementComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import DatePickerComponent from '../commonComponents/DatePickerComponent'

require('./MealTallyComponent.scss');

//const mealTypes = ['Breakfast', 'AM Snack', 'Lunch', 'PM Snack', 'Dinner']
//const libraries = ['lib1', 'lib 2', 'lib 3']

class MealTallyComponent extends React.Component {
    constructor(props) {
        super(props)
        var mealTallyDetails = {
            library: '',
            date: moment(),
            type: '',
            received: 0,
            leftovers: 0,
            children: 0,
            volunteer: 0,
            adult: 0,
            staff: 0,
            nonreimbursment: 0,
            createdBy: {},
            signature:''
            
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
                ...this.state.mealTallyDetails,
                [fieldName]: incValue
            }
        })
    }
    handleMealTallyDetailsOptionsField = (event, fieldName) => {
        event.preventDefault()
        
        this.setState({
            ...this.state,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                [fieldName]: event.target.value
            }
        })
    }
    handleDateField = (date) => {
        this.setState({
            ...this.state,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                date: date
            }
        })
    }
    render() {
        const libraryOptions = this.props.libraries.map(library => {
            return library.name
        })
        return (
            <div className="mealTallyContainer">
                <Paper>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Meal Info</h3>
                        <OptionsSelectorComponent
                            optionsName={'library'}
                            options={libraryOptions}
                            itemSelected={this.state.mealTallyDetails.library}
                            optionsHandler={this.handleMealTallyDetailsOptionsField}
                        />
                        <OptionsSelectorComponent
                            optionsName={'Type'}
                            options={this.props.mealTypes}
                            itemSelected={this.state.mealTallyDetails.type}
                            optionsHandler={this.handleMealTallyDetailsOptionsField}
                        />
                        <div>
                            <span>Date: {moment(this.state.mealTallyDetails.date).format('MMM DD YYYY')}</span>
                            <DatePickerComponent
                                name={'Date'}
                                dateSelected={this.state.mealTallyDetails.date}
                                handleDateSelected={this.handleDateField}
                            />
                        </div>
                    </div>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Inventory</h3>
                        <IncrementComponent 
                            incrementerName={"Received"} 
                            itemCount={this.state.mealTallyDetails.received} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Leftovers"} 
                            itemCount={this.state.mealTallyDetails.leftovers} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />

                    </div>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Categories</h3>
                        <IncrementComponent 
                            incrementerName={"Staff"} 
                            itemCount={this.state.mealTallyDetails.staff} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Children"} 
                            itemCount={this.state.mealTallyDetails.children} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Adult"} 
                            itemCount={this.state.mealTallyDetails.adult} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Volunteer"} 
                            itemCount={this.state.mealTallyDetails.volunteer} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Nonreimbursment"} 
                            itemCount={this.state.mealTallyDetails.nonreimbursment} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />

                    </div>
                </Paper>
            </div>
        )
    }
}

export default MealTallyComponent
