
import * as React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
//import 'react-datepicker/dist/react-datepicker'

import InfiniteCalendar from 'react-infinite-calendar'
//import styles from 'react-infinite-calendar/styles.css'
//const css = require('style-loader!css-loader!react-infinite-calendar/styles.css')
const css = require('style-loader!css-loader!react-datepicker/dist/react-datepicker.css')
//import 'react-datepicker/dist/react-datepicker.css'
            
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
                    selected={this.props.dateSelected}
                    onSelect={(event) => this.props.handleDateSelected(event, name)}
                    minDate={minDate}
                    maxDate={today}
                />
            </div>
        )
    }
}

export default DatePickerComponent
