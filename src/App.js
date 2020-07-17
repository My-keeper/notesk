import React, { Component } from 'react';
import './App.css'
import Notes from './Routes/Notes/Notes'
import Weather from './API/Weather'
import Calendar from './Routes/Calendar/Calendar'
import Header from "./UI/Header"
import NavBar from "./UI/NavBar"

class App extends Component {
  
  
  render() {
    return (
      <div >
        {/* <Header/> */}
        {/* <NavBar/> */}
        <Notes/>
      </div>
    );
  }
}

export default App;
