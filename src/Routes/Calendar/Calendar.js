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
    return (
      <div>
        <Nav
          username={"Mero"}
          ColorChanged={this.props.colorchanged}
          RecieveColor={this.props.Color}
          isShowLogOutButton={(value) => this.setState({ isLogOut: value })}
          ShowLogOutButtonValue={this.state.isLogOut}
          showLogOutButton={true}
        />
        <CalendarCollection isLogOut={this.state.isLogOut} RecieveColor={this.props.Color} />
        <Footer />
      </div>
    );
  }
}

export default CalendarList;
