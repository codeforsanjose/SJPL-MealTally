import * as React from 'react'
import moment from 'moment'
import MealTallyComponent from '../../MealTallyComponent/MealTallyComponent'

import { editReport } from '../../../api/api'
require('./ModalComponent.scss');


class ModalComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        const totalMealsAvailable = this.props.report.received + this.props.report.leftovers
        const totalMealsServed = this.props.report.childrenAndTeens + this.props.report.teenStaffAndVolunteers + this.props.report.adult
        const totalLeftover = totalMealsAvailable - totalMealsServed - this.props.report.unusable
        this.state = {
            showEdit: false,
            totalMealsAvailable,
            totalMealsServed,
            totalLeftover
        }
    }

    handleDisplayReport = (event) => {
        return (
            <MealTallyComponent mealTallyDetails={this.state.mealTallyDetails} />
        )
    }

    handleDisplayEdit = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            showEdit: !this.state.showEdit
        })
    }

    handleEditReport = (event, editedReport) => {
        event.preventDefault()

        editReport(editedReport).then( response => {
            console.log("response in modal compt", response)
            this.setState({
                ...this.state,
                showEdit: !this.state.showEdit
            })
        }).catch( error => {
            console.log("error in modal compt", error)
            this.setState({
                ...this.state,
                showEdit: !this.state.showEdit
            })
        })
    }

    showMealDetails = () => {
        console.log("show details in props report", this.props.report)
        return (
            <div >
                
                {this.state.showEdit ? '': this.showTallies()}
                <div className="reportActions">
                    <button className="closeButton" onClick={this.props.closeReport}>Cancel</button>
                    {this.props.handleExport ? <button onClick={this.props.handleExport}>Export</button>: ''}
                    {this.props.handleEdit ? <button onClick={this.props.handleEdit}>Edit</button>: <button onClick={this.handleDisplayEdit}>Edit</button>}
                    {this.props.handleSave ? <button onClick={this.props.handleSave}>Save</button>: ''}
                </div>
                <div className="editReportContainer">
                    {this.state.showEdit ? <MealTallyComponent report={this.props.report} editReport={this.handleEditReport} /> : ''}
                </div>
            </div>
        )
        
    }

    render () {
        // style tags override parts of class since more important
        const modalStyle = {
            position: "fixed"
        }
        const editStyle = {
            position: "absolute"
        }
        if (!this.state.showEdit) {
            return (
                <div style={modalStyle} className="modalContainer" >
                    {this.showMealDetails()}
                </div>
            )
        }
        else {
            return (
                <div style={editStyle} className="modalContainer" >
                    {this.showMealDetails()}
                </div>
            )
        }
    }

    showTallies = () => {
        return (
            <div>
                <div>
                    <h3>{this.props.message}</h3>
                    <div>
                        
                        <div className="typeBox">
                            <span className="mealPlace">{this.props.report.library}</span>
                            <span className="mealType">{this.props.report.type}</span>
                        </div>
                    </div>
                    <div className="inventoyBox">
                        <div><h3>Day's Inventory</h3></div>
                        <span className="received"><p>Meals from Vendor: {this.props.report.received}</p></span>
                        <span className="leftoverBefore">Leftover from day before: {this.props.report.leftovers}</span>
                        <span className="totalMealsAvailable">Total meals available: {this.state.totalMealsAvailable}</span>
                    </div>
              
                    <div className="servedBox">
                        Distributed Meals
                    
                        <span>Child and Teens: {this.props.report.childrenAndTeens}</span>
                        <span>Teens Staff and Volunteers: {this.props.report.teenStaffAndVolunteers}</span>
                        <span>Adults: {this.props.report.adult}</span>
                 
                        
                    </div>
                   
                </div>

                <div className="totalsBox">
                    
                    <span>Unuasable: {this.props.report.unusable}</span>
                    <span>Meals leftover: {this.state.totalLeftover}</span>
                    <span>Total meals served: {this.state.totalMealsServed}</span>
                </div>

                <div className="commentsBox">
                    <div>
                        <span>Comments: {this.props.report.comments}</span>
                    </div>
                    <div>
                        <span>Signed by:</span> <span class="value">{this.props.report.signature}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComponent
