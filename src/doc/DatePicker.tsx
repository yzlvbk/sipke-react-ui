import React, { Component } from 'react'
import DatePicker from '../lib/packages/datepicker/DatePicker'

interface Props {

}
interface State {

}

export default class DatePickerPage extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        DatePickerPage
        <DatePicker placeholder="datepicker" />
      </div>
    )
  }
}
