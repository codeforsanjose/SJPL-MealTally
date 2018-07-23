
import * as React from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper'
import NoSleep from 'nosleep.js'
import SignatureCanvas from 'react-signature-canvas'

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
        type: '',
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
        comments: '',
        signature:'',
        esigbase64: ''
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
        var noSleep = new NoSleep()
        noSleep.enable()
    }

    componentWillReceiveProps = (newProps) => {
        this.props = newProps
        if (this.props.useEsig) {
            const details = props.mealTallyDetails
            this.sigCanvas ? this.sigCanvas.fromDataURL(details.esigbase64) : null
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
            showAlert: false,
            showError: false
        })
    }
    handleSaveMealTally = (event) => {
        event.preventDefault()
        // if no _id then is a new meal if _id then editing one from report component
        if (this.state.mealTallyDetails._id !== '') {
            this.props.editReport(event, this.state.mealTallyDetails)
        }
        else {
            this.handleCreateMeal()
        }
    }

    handleComments = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                comments: event.target.value
            }
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

    handleModalEdit = (event) => {
        event.preventDefault()
        this.props.closeModal(event)
    }

    handleCreateMeal = () => {
        // if event is empty object then don't call preventDefault when needing to call programatically without event
        //Object.keys(event).length > 0 ? event.preventDefault(): ''
        let errors = this.validateMeal()
        if (Object.keys(errors).length > 0) {
            this.setState({
                ...this.state,
                showError: true,
                errors: errors
            })
        }
        else {
            this.setState({
                ...this.state,
                showLoading: true
            })
            const data = this.state.mealTallyDetails
            console.log('all datat', data)
            data['createdBy'] = (this.props.user && this.props.user._id) || 'guest'
            createMeal(data).then(response => {
                this.setState({
                    ...this.state,
                    mealTallyDetails: this.INITIAL_MEAL_TALLY_DETAILS,
                    showAlert: true,
                    showLoading: false,
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
    }

    validateMeal = () => {
        let errors = {}
        if (this.state.mealTallyDetails.library === '') {
            errors.library = 'Please select a library.'
        }
        if (this.state.mealTallyDetails.type === '') {
            errors.type = 'Please select meal type'    
        }
        if (this.state.mealTallyDetails.signature === '') {
            errors.signature = 'Please print name'    
        }
        if (this.state.mealTallyDetails.esigbase64 === '') {
            errors.esignature = 'Please sign'    
        }
        return errors
    }

    handleCanvasSignature = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            mealTallyDetails: {
                ...this.state.mealTallyDetails,
                esigbase64: this.sigCanvas.toDataURL()
            }
        })
    }
    clearCanvas = (event) => {
        event.preventDefault()
        this.sigCanvas.clear()
    }

    getSignature = (url) => {
        if (this.state.mealTallyDetails._id !== '') {
            return (
                <img src={url} className="signature-image" />
            )
        }
        else {
            return (
                <div>
                    <SignatureCanvas penColor='black' onEnd={this.handleCanvasSignature} ref={(ref) => { this.sigCanvas = ref }} canvasProps={{width: 600, height: 200, className: 'sigCanvas'}} />
                    <br />
                    <button onClick={this.clearCanvas}>Clear Signature</button>
                </div>
            )
        }

    }
    render() {
        const totalMealAvailable = this.state.mealTallyDetails.received + this.state.mealTallyDetails.leftovers
        const totalMealServed = this.state.mealTallyDetails.childrenAndTeens + this.state.mealTallyDetails.teenStaffAndVolunteers + this.state.mealTallyDetails.adult
        const totalLeftover = totalMealAvailable - totalMealServed - this.state.mealTallyDetails.unusable
        const totalMinors = this.state.mealTallyDetails.childrenAndTeens + this.state.mealTallyDetails.teenStaffAndVolunteers
        const signature = this.getSignature(this.state.mealTallyDetails.esigbase64)
        const libraryOptions = this.state.libraries.map(library => {
            return library.name
        })
        
        return (
            <div className="mealTallyContainer">
                {this.state.showLoading ? <AlertComponent isLoading={true} message={'Saving report please wait...'} />: ''}
                {this.state.showAlert ? <AlertComponent isLoading={false} handleAlert={this.alertHandler} message={this.state.alertMessage} />: ''}
                {this.state.showError ? <AlertComponent isError={true} errors={this.state.errors} isLoading={false} handleAlert={this.alertHandler} message={'Errors with report please review'} />: ''}
                <Paper>
                    <div className="infoContainer">
                        <div className="introContainer">
                            <div>
                                <h3 className="infoContainerTitle">Meal Tally</h3>
                            </div>
                            <div className="dateContainer">
                                <DatePickerComponent
                                    name={'Date'}
                                    dateSelected={moment(this.state.mealTallyDetails.date)}
                                    handleDateSelected={this.handleDateField}
                                />
                            </div>
                        </div>
                        <div className="libraryType">
                            <div className="infoContainer">
                                <OptionsSelectorComponent
                                    fieldName={'library'}
                                    options={libraryOptions}
                                    itemSelected={this.state.mealTallyDetails.library}
                                    optionsHandler={this.handleMealTallyDetailsOptionsField}
                                    errorMessage={this.state.errors ? this.state.errors.library: ''}
                                />
                                <OptionsSelectorComponent
                                    fieldName={'type'}
                                    options={this.state.mealTypes}
                                    itemSelected={this.state.mealTallyDetails.type}
                                    optionsHandler={this.handleMealTallyDetailsOptionsField}
                                    errorMessage={this.state.errors ? this.state.errors.type: ''}
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
                        <div className="childrenServed">
                            <IncrementComponent 
                                incrementerName={'Children and Teens'}

                                fieldName={'childrenAndTeens'}
                                itemCount={this.state.mealTallyDetails.childrenAndTeens} 
                                incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                            />
                        </div>
                        <div className="staffServed">
                            <IncrementComponent 
                                incrementerName={'Teen Staff and Volunteers'}
                                fieldName={'teenStaffAndVolunteers'}
                                itemCount={this.state.mealTallyDetails.teenStaffAndVolunteers} 
                                incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                            />
                        </div>
                        <div className="adultsServed">
                            <IncrementComponent 
                                incrementerName={"Adults"} 
                                fieldName={'adult'}
                                itemCount={this.state.mealTallyDetails.adult} 
                                incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                            />
                        </div>
                        <div className="unusableMeals">
                            <IncrementComponent 
                                incrementerName={"Unusable Meals"}
                                fieldName={'unusable'}
                                itemCount={this.state.mealTallyDetails.unusable} 
                                incrementerHandler={this.handleMealTallyDetailsIncrementField} 
                            />
                        </div>

                    </div>
                    
                    <div className="infoContainer">

                       
                    </div>
                    <div className="totalsContainer">
                        <div className="totalsHeader">Tally Totals</div>
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

                    <div className="commentsBox">
                        <label>Comments: </label><input type="text" value={this.state.mealTallyDetails.comments} onChange={this.handleComments} />
                    </div>
                    <div className="signatureBox">
                        <label>Signed by: </label><input type="text" wrap="hard" value={this.state.mealTallyDetails.signature} onChange={this.handleSignature} />
                        <div className="errorContainer">
                            <span className="errorMessage">{this.state.errors ? this.state.errors.signature: ''}</span>
                        </div>
                        <div className="e-signature-container">
                            { signature }
                            <div className="errorContainer">
                                <span className="errorMessage">{this.state.errors ? this.state.errors.esignature: ''}</span>
                            </div>
                        </div>
                    </div>

                    {this.state.mealTallyDetails._id ? <button className="saveMealTally" onClick={this.handleSaveMealTally}>Save</button>: <button className="saveMealTally" onClick={this.handleSaveMealTally}>Done</button>}
                    {this.state.mealTallyDetails._id ? <button className="closeEdit" onClick={this.handleModalEdit}>Cancel</button>: null}
                </Paper>
            </div>
        )
    }
}

export default MealTallyComponent
