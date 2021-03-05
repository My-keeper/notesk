import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import Footer from '../../UI/Footer'
import CalendarCollection from "./CalendarCollection";
class CalendarList extends Component {
  
  state = {
    SelectedDate: true,
    currentEvents: [],
    isLogOut: false,
  };

  render() {
    console.log(this.state.isLogOut)
    return (
      <div> 
          <Nav
            username={"Mero"}
            ColorChanged={this.props.colorchanged}
            RecieveColor={this.props.Color}
            ShowLogOutButtonValue={this.state.isLogOut}
            ShowLogOutButton={(value)=>this.setState({isLogOut : value})}
          /> 
          <CalendarCollection RecieveColor={this.props.Color} /> 
        <Footer />
      </div>
    );
  }
}

export default CalendarList;
