import React, { Component } from 'react';
import styled from "styled-components";
import './App.css'
import Notes from './Routes/Notes/Notes' 
import Weather from './API/Weather'
import Calendar from './Routes/Calendar/Calendar' 

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
      //BodyColorChange
      BodyColor: "#999999",
      //UserIconColor
      UserIconColor: "#999999",
      UserIconTextColor:"#F8F8F8",
      //borderColor 
      BorderColor : "#999999",
      //IcionColor
      IconC : "#f5ba13",
      // ModelArea
      NotekBGC : "#fff",
      NoteFC : "#000000",
      //userInput
      UserInputBGC : "#fff",
      UserInputFC : "#000000",
      UserInputPHC : "",
      //TextArea
      TextAreaBGC : "#fff",
      TextAreaFC : "#000000",
      TextAreaPHC : "",
    }
  }
  ChangeColorsValue = (NewColor) => {
    this.setState({
      Color: NewColor
    })
  }

  render() {
    return ( 
      <ContainerDiv BodyColorValue={this.state.Color.BodyColor}> 
        <Notes Color={this.state.Color} colorchanged={this.ChangeColorsValue}/> 
      </ContainerDiv>
        );
      }
}

export default App;
