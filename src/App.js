import React, { Component } from 'react';
import './App.css'
import Notes from './Routes/Notes/Notes'
import Weather from './API/Weather'
import Calendar from './Routes/Calendar/Calendar'
import Header from "./UI/Header"
import NavBar from "./UI/NavBar"
import styled from "styled-components";

const BodyStyle = styled.body`
   background: #282828; 
`

class App extends Component {
  
  
  render() {
    return (
<BodyStyle >
        {/* <Header/> */}
        {/* <NavBar/> */}
        <Notes/>
      </BodyStyle>
        );
      }
}

export default App;
