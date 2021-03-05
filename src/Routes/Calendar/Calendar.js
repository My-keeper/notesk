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
        <Nav 
          username={"Mero"}
          ColorChanged={this.props.colorchanged} 
          RecieveColor={this.props.Color} 
          showLogOutButton={true}
        />
        <CalendarCollection RecieveColor={this.props.Color}/>
        <Footer/>
      </div>
    );
  }
}

export default CalendarList;
