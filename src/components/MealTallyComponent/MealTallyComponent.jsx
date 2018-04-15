
import * as React from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper'

import IncrementComponent from '../commonComponents/incrementComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import DatePickerComponent from '../commonComponents/DatePickerComponent'
import AlertComponent from '../commonComponents/alertComponent/AlertComponent'
import { createMeal } from '../../api/api'

require('./MealTallyComponent.scss');

class MealTallyComponent extends React.Component {
    INITIAL_MEAL_TALLY_DETAILS = {
        library: '',
        date: moment(),
        type: '',
        received: 0,
        leftovers: 0,
        childrenAndTeens: 0,
        teenStaffAndVolunteers: 0,
        adult: 0,
        unusable: 0,
        createdBy: {},
        signature:''
    }
    constructor(props) {
        super(props)
        console.log('initail meal tal.y: ', this.INITIAL_MEAL_TALLY_DETAILS)
        this.state = {
            showDate: false,
            mealTallyDetails: this.INITIAL_MEAL_TALLY_DETAILS
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
    alertHandler = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            showAlert: false
        })
    }
    handleSaveMealTally = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            showLoading: true,
            loadingMessage: 'Saving please wait...'
        })
        createMeal(this.state.mealTallyDetails).then(response => {
            console.log('create meal resut', response)
            this.setState({
                ...this.state,
                mealTallyDetails: this.INITIAL_MEAL_TALLY_DETAILS,
                showLoading: false,
                showAlert: true,
                alertMessage: 'Successfully saved!'
            })
        }).catch(error => {
            console.log('create meal error: ', error)
            this.setState({
                ...this.state,
                showLoading: false,
                showAlert: true,
                alertMessage: 'Error saving please try again later!'
            })
        })
    }

    render() {
        const libraryOptions = this.props.libraries.map(library => {
            return library.name
        })
        return (
            <div className="mealTallyContainer">
                {this.state.showLoading ? <AlertComponent isLoading={true} message={this.state.loadingMessage} />: ''}
                {this.state.showAlert ? <AlertComponent isLoading={false} handleAlert={this.alertHandler} message={this.state.alertMessage} />: ''}
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
                            optionsName={'Library'}
                            fieldName={'library'}
                            options={libraryOptions}
                            itemSelected={this.state.mealTallyDetails.library}
                            optionsHandler={this.handleMealTallyDetailsOptionsField}
                        />
                        <OptionsSelectorComponent
                            optionsName={'Type'}
                            fieldName={'library'}
                            options={this.props.mealTypes}
                            itemSelected={this.state.mealTallyDetails.type}
                            optionsHandler={this.handleMealTallyDetailsOptionsField}
                        />
                        
                    </div>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Available Meals</h3>
                        <IncrementComponent 
                            incrementerName={"Received"}
                            fieldName={'received'}
                            itemCount={this.state.mealTallyDetails.received} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Leftover Meals"}
                            fieldName={'leftovers'}
                            itemCount={this.state.mealTallyDetails.leftovers} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />

                    </div>
                    </div>
                    <div className="infoContainer">
                        <h3 className="infoContainerTitle">Served Meals</h3>
                        
                        <IncrementComponent 
                            incrementerName={"Children & Teens"}
                            fieldName={'childrenAndTeens'}
                            itemCount={this.state.mealTallyDetails.childrenAndTeens} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="infoContainer">
                        <IncrementComponent 
                            incrementerName={"Teen Staff & Volunteers"} 
                            fieldName={'teenStaffAndVolunteers'}
                            itemCount={this.state.mealTallyDetails.teenStaffAndVolunteers} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Adults"} 
                            fieldName={'adult'}
                            itemCount={this.state.mealTallyDetails.adult} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="infoContainer">
                        <IncrementComponent 
                            incrementerName={"Unusable Meals"}
                            fieldName={'unusable'}
                            itemCount={this.state.mealTallyDetails.unusable} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />

                    </div>
                    
                    <button onClick={this.handleSaveMealTally}>Save</button>
                </Paper>
            </div>
        )
    }
}

export default MealTallyComponent
