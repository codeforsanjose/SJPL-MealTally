import * as React from 'react'
import  Checkbox from 'material-ui/Checkbox'
import { interests } from '../../models/interests'

require('../signup/SignupComponent.css')

class VolunteerInterestsCheckboxesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props

        this.state = {
        }
    }
    disableCheckboxes = () => {
        return this.props.checkboxInterests.filter( (interest) => {return interest.checked}).length < 3
    }

    render () {
        return (
            <div className="interestsCheckboxContainer">
                <div className="checkBoxStyle">
                    {
                        this.props.checkboxInterests.map( (checkInterest, index) => {
                            if (this.disableCheckboxes() || this.props.allowAll) {
                                return (
                                        <Checkbox key={index} label={checkInterest.interest} checked={checkInterest.checked} onCheck={(e) => this.props.handleCheckbox(e, index, checkInterest.interest)} />
                                )
                            }
                            else {
                                return (
                                        <Checkbox key={index} disabled={!checkInterest.checked} label={checkInterest.interest} checked={checkInterest.checked} onCheck={(e) => this.props.handleCheckbox(e, index, checkInterest.interest)} />
                                )

                            }
                        })
                    }
                </div>
            </div>

        )
    }
}

export default VolunteerInterestsCheckboxesComponent
