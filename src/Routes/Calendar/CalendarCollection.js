import React, { useState } from "react"; 
import CalendarForm from "./CalendarForm";
import ScheduleForm from "./ScheduleForm/Schedule";
import styled from "styled-components";
import EventForm from "./EditForm/EvenForm"
import LogOutcontainer from "../../UI/Modal";

const CalenderContainer = styled.div`
  z-index: "1";
  margin: 10px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  color: cornflowerblue;
`;
const RightNavBarItems = styled.div`
  margin-right: 12px;
  display: flex;
  width: 500px;
  justify-content: flex-end;
`;
const CalendarCollection = (props) => {
  //for Logginout 
    const IsLogout = <RightNavBarItems style={{zIndex:"7" }}>
    <LogOutcontainer
      position= {"relative"}
      width= {"140px"}
      margin= {"10px"}
      padding= {"15px"}
      boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
      borderRadiusValue= {"20px"}
      ZindexValue={"100"}
      resizeValue={"both"}
      TopValue={"55px"}
      RightValue={"10px"}
      backGroundColorValue={props.RecieveColor.NotekBGC}
    >
      Mero
    </LogOutcontainer>
  </RightNavBarItems>
  //Collection of Events
  const [currentEvents, ChangeEventList] = useState([
    {
      id: "1",
      title: "Testoing for more ",
      start: "2021-03-13T12:30:00",
      end: "2021-03-14T13:30:00",
      textColor: "pink",
      description: "lets play some game s",
      display: "list-item",
      backgroundColor: "black",
      Url: "http://localhost:3000/calendar",
      description: "lets see if it will work"
    },
    {
      id: "3",
      title: "Doc appoinmnet ",
      start: "2021-03-13",
      end: "2021-03-13",
      startTime: "10:45:00",
      endTime: "12:45:00",
      textColor: "pink",
      daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events 
      display: "list-item",
      textColor: "black",
    },
  ]); 
  const [showSchedule, ChangeShowSchedule ] =useState(false) // to show the shedule model 
  const [SelectedStartedData, ChangeStartedData] = useState() //started selected data 
  const [SelectedEndedData, ChangeEndedData] = useState(); // ended slected data  
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
      {IsLogout}
      {showSchedule ? scheduleForm : null}
      {showSchedule ? calendarForm : calendarForm}
    </CalenderContainer>
  );
};
export default CalendarCollection;
