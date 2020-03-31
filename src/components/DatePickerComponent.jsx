
import * as React from 'react'
import DatePicker from 'react-datepicker'

const css = require('style-loader!css-loader!react-datepicker/dist/react-datepicker.css')
            
class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    calendarStyle() {
        return {
            textAlign: 'center',
            display: 'inline-block'
        }
    }
    
    render() {
        const { name, dateSelected } = this.props
        const fieldName = name.toLowerCase()
        let today = new Date()
        var minDate = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate() - 7)
        
        return (
            <div style={this.calendarStyle()}>
                
                <DatePicker
                    width={400}
                    height={300}
                    selected={ dateSelected }
                    onSelect={(event) => this.props.handleDateSelected(event, name)}
                    minDate={minDate}
                    maxDate={today}
                />
            </div>
        )
    }
}

export default DatePickerComponent
