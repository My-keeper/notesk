import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import Footer from '../../UI/Footer'
import CalendarCollection from "./CalendarCollection";
class CalendarList extends Component {
  
  state = {
    SelectedDate: true,
    currentEvents: [],
  };

  render() {
    return (
      <div>
        <Nav ColorChanged={this.props.colorchanged} RecieveColor={this.props.Color}/>
        <CalendarCollection RecieveColor={this.props.Color}/>
        <Footer/>
      </div>
    );
  }
}

export default CalendarList;
