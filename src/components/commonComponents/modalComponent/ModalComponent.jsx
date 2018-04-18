import * as React from 'react'
import moment from 'moment'

require('./ModalComponent.scss');


class ModalComponent extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
        this.state = {
        }
    }

    showMealDetails = () => {
        const totalMealsAvailable = this.props.report.received + this.props.report.leftovers
        const totalMealsServed = this.props.report.childrenAndTeens + this.props.report.teenStaffAndVolunteers + this.props.report.adult
        const totalLeftover = totalMealsAvailable - totalMealsServed
        return (
            <div >
                <div>
                    <h3>{this.props.message}</h3>
                    <div>
                        Meal Inventory
                    </div>
                    <span>Meals received from Vendor: {this.props.report.received}</span>
                    <br />
                    <span>Meals leftover from previous day: {this.props.report.leftovers}</span>
                    <div>
                        <span>Total meals available: {totalMealsAvailable}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        Unuasable Meals
                    </div>
                    <span>Unuasable: {this.props.report.unusable}</span>
                    <br />
                    <span>Meals leftover: {totalLeftover}</span>
                    <div>
                        <span>Total meals unserved available: {totalLeftover - this.props.report.unusable}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        Distributed Meals
                    </div>
                    <span>Child and Teens: {this.props.report.childrenAndTeens}</span>
                    <br />
                    <span>Teens Staff and Volunteers: {this.props.report.teenStaffAndVolunteers}</span>
                    <br />
                    <span>Adults: {this.props.report.adult}</span>
                    <br />
                    <div>
                        <span>Total meals served: {totalMealsServed}</span>
                    </div>
                </div>
                <div className="reportActions">
                    {this.props.handleExport ? <button onClick={this.props.handleExport}>Export</button>: ''}
                    {this.props.handleEdit ? <button onClick={this.props.handleEdit}>Edit</button>: ''}
                    {this.props.handleSave ? <button onClick={this.props.handleSave}>Save</button>: ''}
                </div>

            </div>
        )
        
    }

    render () {
        return (
            <div className="ModalContainer" >
                {this.showMealDetails()}
            </div>
        )
    }
}

export default ModalComponent
