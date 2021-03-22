import React, { Component } from 'react';
import styled from "styled-components";
import "./App.css";
import Notes from "./Routes/Notes/Notes" ;
import Calendar from "./Routes/Calendar/Calendar";
import {BrowserRouter, Route,  } from "react-router-dom";
import Login from "./Routes/Login/Login";
import Signup from "./Routes/Signup/Signup";
import Weather from "./API/Weather";

const ContainerDiv = styled.div`
  font-family: "Montserrat", sans-serif;  
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // background-color: #282828;
  background-color: ${(props) => ( props.BodyColorValue ? props.BodyColorValue : "")};
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  // background-color: ${(props) => ( props.BodyColor ? props.BodyColor : "")};
`;

class App extends Component {
  state = {
    Color: {
      //calendar text color 
      CalendarTC : "#6495ed",
      //Nav Icon color
      NavIconColor : '#fff',
      //Calender Color 
      CalendarColorTable: "#C8C8C8",
      //Login/Signup color 
      LogSignColor : "#999999",
      //BodyColor
      BodyColor : "#f2f2f2",
      //borderColor 
      BorderColor : "#f5ba13",
      //IcionColor
      IconC : "#f5ba13",
      //UserIconColor
      UserIconColor: "#fff",
      UserIconTextColor: "#999999",
      //ModelArea
      NotekBGC : "#282828",
      NoteFC : "#F0F0F0",
      //userInput
      UserInputBGC : "#282828",
      UserInputFC : "#F0F0F0",
      UserInputPHC : "#C8C8C8",
      //TextArea
      TextAreaBGC : "#282828",
      TextAreaFC : "#C8C8C8",
      TextAreaPHC : "#C8C8C8",
    },
    location: "", 
    UserName: ""
  }
   
  ChangeColorsValue = (NewColor) => {
    this.setState({
      Color: NewColor
    })
  }

  render() {
    return ( 
      <BrowserRouter>
        <ContainerDiv BodyColorValue={this.state.Color.BodyColor}> 
        <Route path="/calendar" exact render={(props) => <Calendar Color={this.state.Color} colorchanged={this.ChangeColorsValue}/>}
        />
        <Route path="/login" exact render={(props) => <Login Color={this.state.Color} colorchanged={this.ChangeColorsValue}/>}
        />
        <Route path="/signup" exact render={(props) => <Signup Location={(value) =>this.setState({location: value})} Color={this.state.Color} colorchanged={this.ChangeColorsValue}/>}
        />
        <Route path="/" exact render={(props) => <Notes Color={this.state.Color} colorchanged={this.ChangeColorsValue}/>}
        />
        <Route path="/weather" exact render={(props) => <Weather/>}
        />
        </ContainerDiv>
      </BrowserRouter>  
    )
      }
}

export default App;
