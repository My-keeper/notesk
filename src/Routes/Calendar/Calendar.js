import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import Schedule from './ScheduleForm'
import CalendarForm from "./CalenderForm";


class CalendarList extends Component {
  
  state = {
    SelectedDate: true,
    currentEvents: [],
  };

  render() {
    return (
      <div>
        <Nav ColorChanged={this.props.colorchanged} RecieveColor={this.props.Color}/>
        <CalendarForm RecieveColor={this.props.Color}/>
        <Schedule ScheduleColor={this.props.Color}/>
      </div>
    );
  }
}

export default CalendarList;
