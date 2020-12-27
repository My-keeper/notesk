import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import FallCallendar from './FallCalendar'
import Schedule from './Schedule'

class CalendarList extends Component {
  state = {
    SelectedDate: true,
    currentEvents: [],
  };

  render() {
    return (
      <div>
        <Nav ColorChanged={this.props.colorchanged} RecieveColor={this.props.Color}/>
        <FallCallendar CalendarColor={this.props.Color}/>
        {/* <Schedule ScheduleColor={this.props.Color}/> */}
      </div>
    );
  }
}

export default CalendarList;
