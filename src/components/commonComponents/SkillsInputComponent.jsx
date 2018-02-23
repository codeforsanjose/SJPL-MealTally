
import * as React from 'react'
import TextField from 'material-ui/TextField';
import { interests } from '../../models/interests'

require('../signup/SignupComponent.css')

class VolunteerSkillsInputComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props = props

        this.state = {

        }
    }

    render () {
        return (
            <div className="skillsInputStyle">
                <TextField type="text" name="skills" value={this.props.skillsInput} floatingLabelText="Skills e.g.: excel, quickbooks,..." onChange={this.props.handleSkillsInput} />
        </div>

        )
    }
}

export default VolunteerSkillsInputComponent
