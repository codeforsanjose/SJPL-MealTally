
import * as React from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper'

import IncrementComponent from '../commonComponents/incrementComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import DatePickerComponent from '../commonComponents/DatePickerComponent'
import { createMeal } from '../../api/api'

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
            childrenAndTenns: 0,
            teenStaffAndVolunteer: 0,
            adult: 0,
            unusable: 0,
            createdBy: {},
            signature:''
            
        }
        this.state = {
            showDate: false,
            mealTallyDetails: mealTallyDetails
        }
    }

    toggleShowDate = (event) => {
        this.setState({
            ...this.state,
            showDate: !this.state.showDate
        })
    }

    handleMealTallyDetailsIncrementField = (event, fieldName, value) => {
        event.preventDefault()
        let incValue = this.state.mealTallyDetails[fieldName] + value
        incValue = incValue > 0 ? incValue: 0
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
            showDate: !this.state.showDate,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                date: date
            }
        })
    }

    handleSaveMealTally = (event) => {
        event.preventDefault()
        const data = this.state.mealTallyDetails
        data['createdBy'] = this.props.user._id || 'guest'
        createMeal(this.state.mealTallyDetails).then(response => {
            console.log('create meal resut', response)
        }).catch(error => {
            console.log('create meal error: ', error)
        })
    }
    handleSignature = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                signature: event.target.value
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
                <div className="introContainer">
                    <div className="infoContainer">
                        <div className="dateContainer">
                            <span className="dateDisplay" onClick={this.toggleShowDate} >Date: {moment(this.state.mealTallyDetails.date).format('MMM DD YYYY')}</span>
                            {this.state.showDate ? <DatePickerComponent
                                name={'Date'}
                                dateSelected={this.state.mealTallyDetails.date}
                                handleDateSelected={this.handleDateField}
                            />
                            : ''}
                        </div>
                    </div>
                    <div className="infoContainer">
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
                        
                    </div>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Available Meals</h3>
                        <IncrementComponent 
                            incrementerName={"Received"} 
                            itemCount={this.state.mealTallyDetails.received} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Leftover Meals"} 
                            itemCount={this.state.mealTallyDetails.leftovers} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />

                    </div>
                    </div>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Served Meals</h3>
                        
                        <IncrementComponent 
                            incrementerName={"Children & Teens"} 
                            itemCount={this.state.mealTallyDetails.children} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="infoContainer">
                        <IncrementComponent 
                            incrementerName={"Teen Staff & Volunteers"} 
                            itemCount={this.state.mealTallyDetails.staff} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Adults"} 
                            itemCount={this.state.mealTallyDetails.adult} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="infoContainer">

                        <IncrementComponent 
                            incrementerName={"Unusable Meals"} 
                            itemCount={this.state.mealTallyDetails.nonreimbursment} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />

                    </div>
                    <label>Signature: </label><input type="text" onChange={this.handleSignature} />
                    <button onClick={this.handleSaveMealTally}>Save</button>
                </Paper>
            </div>
        )
    }
}

export default MealTallyComponent
