import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import Schedule from './ScheduleForm/ScheduleForm'
import CalendarForm from "./CalenderForm";
import Dat from './ScheduleForm/DropDown/DateSelected'

class CalendarList extends Component {
  
  state = {
    SelectedDate: true,
    currentEvents: [],
  };

  render() {
    return (
      <div>
        <Nav ColorChanged={this.props.colorchanged} RecieveColor={this.props.Color}/>
        {/* <CalendarForm RecieveColor={this.props.Color}/> */}
        <Schedule ScheduleColor={this.props.Color}/>
      </div>
    );
  }
}

export default CalendarList;
