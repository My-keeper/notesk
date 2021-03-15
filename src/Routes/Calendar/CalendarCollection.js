import React, { useState, useEffect } from "react"; 
import CalendarForm from "./CalendarForm";
import ScheduleForm from "./ScheduleForm/Schedule";
import styled from "styled-components"; 
import Button from "../../UI/Button";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import API from "../../API/API";

const CalenderContainer = styled.div`
  z-index: "1";
  margin: 10px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  color: cornflowerblue;
`; 
const CalendarCollection = (props) => {

  /*************************************************** Evets List *****************************************************************************/
  //Collection of Events
  const [currentEvents, ChangeEventList] = useState([])
  //   {
  //     id: "1",
  //     title: "Testoing for more ",
  //     start: "2021-03-13T12:30:00",
  //     end: "2021-03-14T13:30:00",
  //     textColor: "pink",
  //     description: "lets play some game s",
  //     display: "list-item",
  //     backgroundColor: "black",
  //     Url: "http://localhost:3000/calendar",
  //     description: "lets see if it will work"
  //   },
  //   {
  //     id: "3",
  //     title: "Doc appoinmnet ",
  //     start: "2021-03-16",
  //     end: "2021-03-17",
  //     startTime: "10:45:00",
  //     endTime: "12:45:00",
  //     textColor: "pink",
  //     daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events 
  //     display: "auto",
  //     textColor: "black",
  //   },
  // ]); 
  //using componet did mount using useffect
  useEffect( () => {
    async function CheckingIsLoggedIn() {
      const isLoggedIn = await API.isLoggedIn(() => {});
      console.log(isLoggedIn)
      if (isLoggedIn) {
        const PrevEvents = currentEvents 
        const DBEvents = await API.GetEvents();
        const MergedNotes = DBEvents.data.concat(PrevEvents);
        ChangeEventList(MergedNotes );
      }
    }

    CheckingIsLoggedIn()
  } , []) 

  //Close is not hovered on color style
  const VisibilityStle1 = {
    marginRight: "8px",
    fontSize: "22px",
    color: props.RecieveColor.NavIconColor
 };
  
  const [showSchedule, ChangeShowSchedule ] =useState(false) // to show the shedule model 
  const [SelectedStartedData, ChangeStartedData] = useState() //started selected data 
  const [SelectedEndedData, ChangeEndedData] = useState(); // ended slected data  

  /*************************************************** calendar Form *****************************************************************************/
  //the calendar form 
  const calendarForm = 
    (<div style={{zIndex:"1", filter: !showSchedule ? null : "blur(4px)",
          pointerEvents:!showSchedule ? null : "none"}}>
        <CalendarForm
          CalendarColor={props.RecieveColor} //send color form App
          SendingEvents={currentEvents} //Pass down the list of eventsRecieveColor
          CallingSchedule={(value) => ChangeShowSchedule(value)} //to call schedule
          GetStartDate={(value) => ChangeStartedData(value)} //getting started clicked data
          GetEndDate={(value) => ChangeEndedData(value)} //getting ended clicked data 
          ChangeEvents={(value) => ChangeEventList(value)}
        />
    </div>
    );
  /*************************************************** scheduling Form *****************************************************************************/
  //scheduling event is called 
  const scheduleForm = (
    <div style={{ zIndex: "3", position: "absolute", left: "35%", top: "10%" }}>
      <ScheduleForm
        submitEventValues={(value) => ChangeEventList(value)}
        ScheduleColor={props.RecieveColor} //send color form App
        CallingCalendar={(value) => ChangeShowSchedule(value)} //to call calendar back 
        SendSelectedSD={SelectedStartedData} //Selected Start Data
        SendSelectedED={SelectedEndedData} //Selected End Data
        />
    </div>
  ); 
  
  return (
    <CalenderContainer>
      {showSchedule ? scheduleForm : null}
      {calendarForm}
    </CalenderContainer>
  );
};
export default CalendarCollection;
