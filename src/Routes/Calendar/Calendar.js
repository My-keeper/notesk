import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import Footer from '../../UI/Footer'
import CalendarCollection from "./CalendarCollection";
import API from "../../API/API";

class CalendarList extends Component {
   //to get the notes from the DB if any
   async componentDidMount() {
    const isLoggedIn = await API.isLoggedIn((e)=>this.setState({ UserName : e.data.userName}));
    if (!isLoggedIn) { 
      return this.setState({isLoggedIn : false, UserName: "Welcome Guest"})
    } 
  }

  state = {
    SelectedDate: true,
    currentEvents: [],
    isLogOut: false,
    UserName: "", 
    Lang: "en"
  };

  render() {
    return (
      <div>
        <div style={{zIndex: "7", position: "sticky" }}>
          <Nav
            username={this.state.UserName}
            ColorChanged={this.props.colorchanged}
            RecieveColor={this.props.Color}
            isShowLogOutButton={(value) => this.setState({ isLogOut: value })}
            ShowLogOutButtonValue={this.state.isLogOut}
            showLogOutButton={true}
            inCalendar={false}
            inNotes={true}
            LangOption={(value) => this.setState({Lang: value})}
          />
        </div>
        <CalendarCollection 
          isLogOut={this.state.isLogOut} 
          RecieveColor={this.props.Color} 
          ReturnLang={this.state.Lang}
        />
        <Footer />
      </div>
    );
  }
}

export default CalendarList;
