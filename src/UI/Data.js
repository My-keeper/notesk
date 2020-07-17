// import React, {useState} from 'react';
// import DatePicker from "react-datepicker";
 
// import "react-datepicker/dist/react-datepicker.css";

// const Date = () => {
//     // const [TitleClicked, ChangeTitleClicked] = useState(Date())
//     const [startDate, ChangeStartDate]= useState(Date())
//     const handleChange = (date) => {
//         ChangeStartDate(date)
//     }
//     return (
//         <DatePicker
//             selected={startDate}
//             onChange={handleChange}
//         />
//     )

// }

// export default Date


/* <input type="date" id="start" name="trip-start"
value="2018-07-22"
min="2018-01-01" max="2018-12-31"></input> */

import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
 
class Date extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Date