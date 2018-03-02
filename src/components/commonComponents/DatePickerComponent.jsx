
import * as React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
//require('./incrementComponent.css');
import 'react-datepicker/dist/react-datepicker'

import InfiniteCalendar from 'react-infinite-calendar'
//import 'react-infinite-calendar/styles.css'
//require('react-infinite-calendar/styles')
            
class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { name, dateSelected } = this.props
        const fieldName = name.toLowerCase()
        let today = new Date()
        var minDate = new Date(today.getFullYear() - 4, today.getMonth(), today.getDate() - 7)
        return (
            <InfiniteCalendar
                width={400}
                height={600}
                selected={this.props.dateSelected}
                disabledDays={[0,6]}
                onSelect={this.props.handleDateSelected}
                minDate={minDate}
            />
        )
    }
}

export default DatePickerComponent
