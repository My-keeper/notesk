import React, { Component } from 'react';
import Date from '../../UI/Data'

class Calendar extends Component {
    // today = new Date();
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    render() {
        return (
          <div > 
           <Date/>
        <input id="date" name="date" type="datetime-local"></input>
          </div>
        );
      }
}

export default Calendar; 