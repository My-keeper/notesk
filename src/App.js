import React, { Component } from 'react';
import './App.css'
import Notes from './Routes/Notes/Notes'
import Weather from './API/Weather'

class App extends Component {
  
  
  render() {
    return (
      <div >
        <Notes/>
      </div>
    );
  }
}

export default App;
