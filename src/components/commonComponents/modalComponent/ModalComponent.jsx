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
            <MealTallyComponent mealTallyDetails={this.state.mealTallyDetails} useEsig={true}  />
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
            window.location.reload()
        }).catch( error => {
            console.log("error in modal compt", error)
            this.setState({
                ...this.state,
                showEdit: !this.state.showEdit
            })
        })
    }

    getSignature = (url) => {
        if (this.props.report._id !== '') {
            return (
                <img src={url} className="signature-image" />
            )
        }
        else {
            return (
                <div>
                    No Signature
                </div>
            )
        }

    }

    showMealDetails = () => {
        const exportButton = this.props.handleExport ? <button onClick={this.props.handleExport}>Export</button> : ''
        const editButton = (!this.state.showEdit) ? <button className="editButton" onClick={this.handleDisplayEdit}>Edit</button> : ''
        const saveButton = this.props.handleSave ? <button onClick={this.props.handleSave}>Save</button> : ''
        const report = this.state.showEdit ? <MealTallyComponent report={this.props.report} editReport={this.handleEditReport} closeModal={this.props.closeReport} /> : ''
        const tallys = this.state.showEdit ? '': this.showTallies()
        return (
            <div >
                { tallys }
                <div className="reportActions">
                    <button className="closeButton" onClick={this.props.closeReport}>X</button>
                    { exportButton }
                    { editButton }
                    { saveButton }
                </div>
                <div className="editReportContainer">
                    { report }
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
            position: "fixed"
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
        const signature = this.getSignature(this.props.report.esigbase64)
        const date = moment(this.props.report.date).format('MMM DD, YYYY, hh:mm:ss a')
        const library = this.props.report.library
        const type = this.props.report.type
        const received = this.props.report.received
        const leftovers = this.props.report.leftovers
        const totalMealsAvailable = this.state.totalMealsAvailable
        return (
            <div>
                <div>
                    <h3>{this.props.message}</h3>
                    <div>
                        <div className="typeBox">
                            <span>{ date }</span>
                            <span className="mealPlace">{ library }</span>
                            <span className="mealType">{ type }</span>
                        </div>
                    </div>
                    <div className="inventoyBox">
                        <div><h4>Day's Inventory</h4></div>
                        <span className="received">Meals from Vendor: { received }</span>
                        <span className="leftoverBefore">Leftover from day before: { leftovers }</span>
                        <span className="totalMealsAvailable">Total meals available: { totalMealsAvailable }</span>
                    </div>
              
                    <div className="servedBox">
                        <div><h4>Distributed Meals</h4></div>
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
                        <span>Signed by:</span> <span className="value">{this.props.report.signature}</span>
                    </div>
                    <div>
                        { signature }
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComponent
