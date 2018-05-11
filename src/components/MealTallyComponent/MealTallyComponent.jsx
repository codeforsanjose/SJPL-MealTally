
import * as React from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper'

import IncrementComponent from '../commonComponents/incrementComponent'
import OptionsSelectorComponent from '../commonComponents/OptionsSelectorComponent'
import DatePickerComponent from '../commonComponents/DatePickerComponent'
import AlertComponent from '../commonComponents/alertComponent/AlertComponent'
import ModalComponent from '../commonComponents/modalComponent/ModalComponent'
import { createMeal, getLibraries } from '../../api/api'

require('./MealTallyComponent.scss');

class MealTallyComponent extends React.Component {
    INITIAL_MEAL_TALLY_DETAILS = {
        _id: '',
        library: '',
        date: moment(),
        type: 'Lunch',
        received: 0,
        leftovers: 0,
        childrenAndTeens: 0,
        teenStaffAndVolunteers: 0,
        staff: 0,
        volunteers: 0,
        adult: 0,
        children: 0,
        teenagers: 0,
        unusable: 0,
        createdBy: {},
        signature:''
    }
    
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            showDate: false,
            libraries: [],
            mealTypes: ['Breakfast', 'AM Sanck', 'Lunch', 'PM Snack', 'Dinner'],
            mealTallyDetails: this.props.report || this.INITIAL_MEAL_TALLY_DETAILS
        }
    }

    componentWillMount(props) {
        this.props = props
        getLibraries().then(libraries => {
            this.setState({
                ...this.state,
                libraries: libraries
            })
        }).catch(error => {
            this.setState({
                ...this.state,
                libraries: []
            })
        })
    }

    toggleShowDate = (event) => {
        this.setState({
            ...this.state,
            showDate: !this.state.showDate
        })
    }

    handleMealTallyDetailsIncrementField = (event, fieldName, value) => {
        event.preventDefault()
        let incValue = 0
        if (value !== -1 && value !== 1) {
            incValue = +value    
        }
        else {
            incValue = this.state.mealTallyDetails[fieldName] + value
        }
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
        let selection = event.target.value
        if (selection === 'Choose one...') {
            selection = ''
        }
        this.setState({
            ...this.state,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                [fieldName]: selection
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
        // if no _id then is a new meal if _id then editing one from report component
        if (this.state.mealTallyDetails._id !== '') {
            console.log("this.props", this.props)
            this.props.editReport(event, this.state.mealTallyDetails)
        }
        else {
            this.setState({
                ...this.state,
                loadingMessage: 'Saving please wait...',
                showModal: true,
                modalMessage: 'Please review report before saving.'
            })
        }
        //this.handleCreateMeal({})
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

    handleModalEdit = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            showModal: false,
            showLoading: false
        })
    }

    handleCreateMeal = (event) => {
        // if event is empty object then don't call preventDefault when needing to call programatically without event
        Object.keys(event).length > 0 ? event.preventDefault(): ''

        const data = this.state.mealTallyDetails
        data['createdBy'] = (this.props.user && this.props.user._id) || 'guest'
        createMeal(data).then(response => {
            this.setState({
                ...this.state,
                mealTallyDetails: this.INITIAL_MEAL_TALLY_DETAILS,
                showLoading: false,
                showAlert: true,
                showModal: false,
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

    validateMeal = () => {
        let message = ''

        if (this.state.mealTallyDetails.library === '') {
            message += 'Please select a library.'
        }
        if (message !== '') {
            return false
            this.setState({
                ...this.state,
                showError: true,
                errorMessage: message
            })
        }
        else {
            return true
        }
    }

    render() {
        const totalMealAvailable = this.state.mealTallyDetails.received + this.state.mealTallyDetails.leftovers
        const totalMealServed = this.state.mealTallyDetails.childrenAndTeens + this.state.mealTallyDetails.teenStaffAndVolunteers + this.state.mealTallyDetails.adult
        const totalLeftover = totalMealAvailable - totalMealServed - this.state.mealTallyDetails.unusable
        const totalMinors = this.state.mealTallyDetails.childrenAndTeens + this.state.mealTallyDetails.teenStaffAndVolunteers
        let librariesList = []
        let libraryOptions = this.state.libraries.map(library => {
            return library.name
        })
        libraryOptions.splice(0, 0, 'Choose one...')

        return (
            <div className="mealTallyContainer">
                {this.state.showModal ? <ModalComponent message={this.state.modalMessage} handleEdit={this.handleModalEdit} handleSave={this.handleCreateMeal} report={this.state.mealTallyDetails} />: ''}
                {this.state.showLoading ? <AlertComponent isLoading={true} message={this.state.loadingMessage} />: ''}
                {this.state.showAlert ? <AlertComponent isLoading={false} handleAlert={this.alertHandler} message={this.state.alertMessage} />: ''}
                {this.state.showError ? <AlertComponent isLoading={false} handleAlert={this.alertHandler} message={this.state.errorMessage} />: ''}
                <Paper>
                    
                        <div className="infoContainer">
                        <div className="introContainer">
                            <div>
                                <h3 className="infoContainerTitle">Meal Plan</h3>
                            </div>
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
                        <div className="libraryType">
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
                                    fieldName={'type'}
                                    options={this.state.mealTypes}
                                    itemSelected={this.state.mealTallyDetails.type}
                                    optionsHandler={this.handleMealTallyDetailsOptionsField}
                                />
                                
                            </div>
                        </div>
                        <div className="infoContainer availableContainer">
                            <h3 className="infoContainerTitle">Available Meals</h3>
                            <div className="totalNumber">
                                {totalMealAvailable}
                            </div>
                            <IncrementComponent 
                                incrementerName={"Meals from Vendor"}
                                fieldName={'received'}
                                itemCount={this.state.mealTallyDetails.received} 
                                incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                            />
                            <IncrementComponent 
                                incrementerName={"Leftover from Yesterday"}
                                fieldName={'leftovers'}
                                itemCount={this.state.mealTallyDetails.leftovers} 
                                incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                            />
                            
                        </div>
                    </div>
                    <div className="infoContainer servedTitle">
                            <h3 className="infoContainerTitle">Served Meals</h3>
                        </div>
                    <div className="infoContainer servedContainer">
                        
                        <IncrementComponent 
                            incrementerName={'Children and Teens'}

                            fieldName={'childrenAndTeens'}
                            itemCount={this.state.mealTallyDetails.childrenAndTeens} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={'Teen Staff and Volunteers'}
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
                        <IncrementComponent 
                            incrementerName={"Unusable Meals"}
                            fieldName={'unusable'}
                            itemCount={this.state.mealTallyDetails.unusable} 
                            incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    
                    <div className="infoContainer">

                       
                    </div>
                    <div class="totalsContainer">
                        <div className="totalServed">
                            <span className="tallyTotal">18 and under:</span>
                            <div className="totalNumber">
                                {totalMinors > 0 ? totalMinors: 0}
                            </div>
                        </div>
                        <div className="totalServed">
                            <span className="tallyTotal">Adult:</span>
                            <div className="totalNumber">
                                {this.state.mealTallyDetails.adult > 0 ? this.state.mealTallyDetails.adult: 0}
                            </div>
                        </div>
                        <div className="totalServed">
                            <span className="tallyTotal">Total Meals Served:</span>
                            <div className="totalNumber">
                                {totalMealServed}
                            </div>
                        </div>

                        
                        <div className="totalLeftover">
                            <span className="tallyTotal">Leftover Meals:</span>
                            <div className="totalNumber">
                                {totalLeftover > 0 ? totalLeftover: 0}

                            </div>
                        </div>
                    </div>
                    <div className="signatureBox">
                        <label>Signature: </label><input type="text" onChange={this.handleSignature} />
                    </div>

                    <button className="saveMealTally" onClick={this.handleSaveMealTally}>Done</button>
                </Paper>
            </div>
        )
    }
}

export default MealTallyComponent
