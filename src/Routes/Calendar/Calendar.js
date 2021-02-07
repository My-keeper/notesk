import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import CalendarForm from "./CalendarCollection";
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
      </div>
    );
  }
}

export default CalendarList;
