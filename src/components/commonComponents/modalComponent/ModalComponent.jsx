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
        console.log('report selected: ', this.props.meal)
        const totalMealsAvailable = this.props.meal.received + this.props.meal.leftovers
        const totalMealsServed = this.props.meal.childrenAndTeens + this.props.meal.teenStaffAndVolunteers + this.props.meal.adult
        const totalLeftover = totalMealsAvailable - totalMealsServed
        return (
            <div >
                <div>
                    <div>
                        Meal Inventory
                    </div>
                    <span>Meals received from Vendor: {this.props.meal.received}</span>
                    <br />
                    <span>Meals leftover from previous day: {this.props.meal.leftovers}</span>
                    <div>
                        <span>Total meals available: {totalMealsAvailable}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        Unuasable Meals
                    </div>
                    <span>Unuasable: {this.props.meal.unusable}</span>
                    <br />
                    <span>Meals leftover: {totalLeftover}</span>
                    <div>
                        <span>Total meals unserved available: {totalLeftover - this.props.meal.unusable}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        Distributed Meals
                    </div>
                    <span>Child and Teens: {this.props.meal.childrenAndTeens}</span>
                    <br />
                    <span>Teens Staff and Volunteers: {this.props.meal.teenStaffAndVolunteers}</span>
                    <br />
                    <span>Adults: {this.props.meal.adult}</span>
                    <br />
                    <div>
                        <span>Total meals served: {totalMealsServed}</span>
                    </div>
                </div>
                <div className="reportActions">

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
