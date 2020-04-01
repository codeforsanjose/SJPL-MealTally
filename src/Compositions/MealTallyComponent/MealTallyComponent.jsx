
import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper'
import NoSleep from 'nosleep.js'
import SignatureCanvas from 'react-signature-canvas'

import IncrementComponent from '../../Components/incrementComponent'
import OptionsSelectorComponent from '../../Components/OptionsSelectorComponent'
import DatePickerComponent from '../../Components/DatePickerComponent'
import AlertComponent from '../../Components/alertComponent/AlertComponent'
import { createMeal, getLibraries } from '../../api/api'

require('./MealTallyComponent.scss');
export default function MealTallyComponent(props) {
    
    const INITIAL_MEAL_TALLY_DETAILS = {
        _id: '',
        library: '',
        date: new Date(),
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
    let sigCanvas = useRef(null)
    const initialState = {
        showDate: false,
        libraries: [],
        mealTypes: ['Breakfast', 'AM Sanck', 'Lunch', 'PM Snack', 'Dinner'],
        mealTallyDetails: props.report || INITIAL_MEAL_TALLY_DETAILS
    }
    var noSleep = new NoSleep()
    noSleep.enable()
    const [state, setState] = useState(initialState)
    useEffect(() => {
        if (props.useEsig) {
            const details = props.mealTallyDetails
            sigCanvas && sigCanvas.fromDataURL(details.esigbase64)
        }
    }, [])

    useEffect( () => {
        // should be passed in through props not here for next refactor
        if (state.libraries.length === 0) {
            getLibraries().then(libraries => {
                setState({
                    ...state,
                    libraries: libraries
                })
            }).catch(error => {
                setState({
                    ...state,
                    libraries: []
                })
            })
        }
    }, [])

    const toggleShowDate = (event) => {
        setState({
            ...state,
            showDate: !state.showDate
        })
    }

    const handleMealTallyDetailsIncrementField = (event, fieldName, value) => {
        event.preventDefault()
        let incValue = 0
        if (value !== -1 && value !== 1) {
            incValue = +value    
        }
        else {
            incValue = state.mealTallyDetails[fieldName] + value
        }
        incValue = incValue > 0 ? incValue: 0
        setState({
            ...state,
            mealTallyDetails: {
                ...state.mealTallyDetails,
                [fieldName]: incValue
            }
        })
    }
    const handleMealTallyDetailsOptionsField = (event, fieldName) => {
        event.preventDefault()
        let selection = event.target.value
        if (selection === 'Choose one...') {
            selection = ''
        }
        setState({
            ...state,
            mealTallyDetails: {
                ...state.mealTallyDetails,
                [fieldName]: selection
            }
        })
    }
    const handleDateField = (date) => {
        setState({
            ...state,
            showDate: !state.showDate,
            mealTallyDetails: {
                ...state.mealTallyDetails,
                date: date
            }
        })
    }
    const alertHandler = (event) => {
        event.preventDefault()
        setState({
            ...state,
            showAlert: false,
            showError: false
        })
    }
    const handleSaveMealTally = (event) => {
        event.preventDefault()
        // if no _id then is a new meal if _id then editing one from report component
        if (state.mealTallyDetails._id !== '') {
            props.editReport(event, state.mealTallyDetails)
        }
        else {
            handleCreateMeal()
        }
    }

    const handleComments = (event) => {
        event.preventDefault()
        setState({
            ...state,
            mealTallyDetails: {
                ...state.mealTallyDetails,
                comments: event.target.value
            }
        })
    }

    const handleSignature = (event) => {
        event.preventDefault()
        setState({
            ...state,
            mealTallyDetails: {
                ...state.mealTallyDetails,
                signature: event.target.value
            }
        })
    }

    const handleModalEdit = (event) => {
        event.preventDefault()
        props.closeModal(event)
    }

    const handleCreateMeal = () => {
        // if event is empty object then don't call preventDefault when needing to call programatically without event
        //Object.keys(event).length > 0 ? event.preventDefault(): ''
        let errors = validateMeal()
        if (Object.keys(errors).length > 0) {
            setState({
                ...state,
                showError: true,
                errors: errors
            })
        }
        else {
            setState({
                ...state,
                showLoading: true
            })
            const data = state.mealTallyDetails
            data['createdBy'] = (props.user && props.user._id) || 'guest'
            createMeal(data).then(response => {
                setState({
                    ...state,
                    mealTallyDetails: INITIAL_MEAL_TALLY_DETAILS,
                    showAlert: true,
                    showLoading: false,
                    showModal: false,
                    alertMessage: 'Successfully saved!'
                })
            }).catch(error => {
                console.log('create meal error: ', error)
                setState({
                    ...state,
                    showLoading: false,
                    showAlert: true,
                    alertMessage: 'Error saving please try again later!'
                })
            })
        } 
    }

    const validateMeal = () => {
        let errors = {}
        if (state.mealTallyDetails.library === '') {
            errors.library = 'Please select a library.'
        }
        if (state.mealTallyDetails.type === '') {
            errors.type = 'Please select meal type'    
        }
        if (state.mealTallyDetails.signature === '') {
            errors.signature = 'Please print name'    
        }
        if (state.mealTallyDetails.esigbase64 === '') {
            errors.esignature = 'Please sign'    
        }
        return errors
    }

    const handleCanvasSignature = (event) => {
        event.preventDefault()
        setState({
            ...state,
            mealTallyDetails: {
                ...state.mealTallyDetails,
                esigbase64: sigCanvas.toDataURL()
            }
        })
    }
    const clearCanvas = (event) => {
        event.preventDefault()
        sigCanvas.clear()
    }

    const getSignature = (url) => {
        if (state.mealTallyDetails._id !== '') {
            return (
                <img src={url} className="signature-image" />
            )
        }
        else {
            const canvasProps = {width: 600, height: 200, className: 'sigCanvas'}
            return (
                <div>
                    <SignatureCanvas
                        penColor='black'
                        onEnd={handleCanvasSignature}
                        ref={ (ref) => sigCanvas = ref }
                        canvasProps={canvasProps}
                    />
                    <br />
                    <button className="sigClear" onClick={clearCanvas}>Clear Signature</button>
                </div>
            )
        }
    }
    const totalMealAvailable = state.mealTallyDetails.received + state.mealTallyDetails.leftovers
    const totalMealServed = state.mealTallyDetails.childrenAndTeens + state.mealTallyDetails.teenStaffAndVolunteers + state.mealTallyDetails.adult
    const totalLeftover = totalMealAvailable - totalMealServed - state.mealTallyDetails.unusable
    const totalMinors = state.mealTallyDetails.childrenAndTeens + state.mealTallyDetails.teenStaffAndVolunteers
    const signature = getSignature(state.mealTallyDetails.esigbase64)
    const libraryOptions = state.libraries.map(library => {
        return library.name
    })
    const initailDate = new Date(state.mealTallyDetails.date)
    return (
        <div className="mealTallyContainer">
            {state.showLoading ? <AlertComponent isLoading={true} message={'Saving report please wait...'} />: ''}
            {state.showAlert ? <AlertComponent isLoading={false} handleAlert={alertHandler} message={state.alertMessage} />: ''}
            {state.showError ? <AlertComponent isError={true} errors={state.errors} isLoading={false} handleAlert={alertHandler} message={'Errors with report please review'} />: ''}
            <Paper>
                <div className="infoContainer">
                    <div className="introContainer">
                        <div>
                            <h3 className="infoContainerTitle">Meal Tally</h3>
                        </div>
                        <div className="dateContainer">
                            <DatePickerComponent
                                name={'Date'}
                                dateSelected={initailDate}
                                handleDateSelected={handleDateField}
                            />
                        </div>
                    </div>
                    <div className="libraryType">
                        <div className="infoContainer">
                            <OptionsSelectorComponent
                                fieldName={'library'}
                                options={libraryOptions}
                                itemSelected={state.mealTallyDetails.library}
                                optionsHandler={handleMealTallyDetailsOptionsField}
                                errorMessage={state.errors ? state.errors.library: ''}
                            />
                            <OptionsSelectorComponent
                                fieldName={'type'}
                                options={state.mealTypes}
                                itemSelected={state.mealTallyDetails.type}
                                optionsHandler={handleMealTallyDetailsOptionsField}
                                errorMessage={state.errors ? state.errors.type: ''}
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
                            itemCount={state.mealTallyDetails.received} 
                            incrementerHandler={handleMealTallyDetailsIncrementField} 
                        />
                        <IncrementComponent 
                            incrementerName={"Leftover from Yesterday"}
                            fieldName={'leftovers'}
                            itemCount={state.mealTallyDetails.leftovers} 
                            incrementerHandler={handleMealTallyDetailsIncrementField} 
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
                            itemCount={state.mealTallyDetails.childrenAndTeens} 
                            incrementerHandler={handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="staffServed">
                        <IncrementComponent 
                            incrementerName={'Teen Staff and Volunteers'}
                            fieldName={'teenStaffAndVolunteers'}
                            itemCount={state.mealTallyDetails.teenStaffAndVolunteers} 
                            incrementerHandler={handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="adultsServed">
                        <IncrementComponent 
                            incrementerName={"Adults"} 
                            fieldName={'adult'}
                            itemCount={state.mealTallyDetails.adult} 
                            incrementerHandler={handleMealTallyDetailsIncrementField} 
                        />
                    </div>
                    <div className="unusableMeals">
                        <IncrementComponent 
                            incrementerName={"Unusable Meals"}
                            fieldName={'unusable'}
                            itemCount={state.mealTallyDetails.unusable} 
                            incrementerHandler={handleMealTallyDetailsIncrementField} 
                        />
                    </div>
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
                            {state.mealTallyDetails.adult > 0 ? state.mealTallyDetails.adult: 0}
                        </div>
                    </div>
                    <div className="totalServed">
                        <span className="tallyTotal">Total Meals Served:</span>
                        <div className="totalNumber">
                            {totalMealServed}
                        </div>
                    </div>

                    
                    <div className="totalLeftover">
                        <span className="tallyTotal">Unused Meals:</span>
                        <div className="totalNumber">
                            {totalLeftover > 0 ? totalLeftover: 0}
                        </div>
                    </div>
                </div>

                <div className="commentsBox">
                    <label>Comments: </label><textarea type="text" value={state.mealTallyDetails.comments} onChange={handleComments} />
                </div>
                <div className="signatureBox">
                    <label>Signed by: </label><input type="text" wrap="hard" value={state.mealTallyDetails.signature} onChange={handleSignature} />
                    <div className="errorContainer">
                        <span className="errorMessage">{state.errors ? state.errors.signature: ''}</span>
                    </div>
                    <label>Signature:</label>
                    <div className="e-signature-container">
                        { signature }
                        <div className="errorContainer">
                            <span className="errorMessage">{state.errors ? state.errors.esignature: ''}</span>
                        </div>
                    </div>
                </div>

                {state.mealTallyDetails._id ? <button className="saveMealTally" onClick={handleSaveMealTally}>Save</button>: <button className="saveMealTally" onClick={handleSaveMealTally}>Done</button>}
                {state.mealTallyDetails._id ? <button className="closeEdit" onClick={handleModalEdit}>Cancel</button>: null}
            </Paper>
        </div>
    )
    
}
