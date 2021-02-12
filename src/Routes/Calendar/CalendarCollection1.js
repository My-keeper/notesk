import React, { useState } from "react"; 
import CalendarForm from "./CalendarForm1";
import ScheduleForm from "./ScheduleForm/Schedule1";
import styled from "styled-components";
import EventForm from "./EditForm/EvenForm"
import BlurDiv from "../../UI/BlurDiv";

const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 16px;
    color: cornflowerblue;  
`;
const CalendarCollection = (props) => {
  //Collection of Events
  const [currentEvents, ChangeEventList] = useState([
    {
      id: "1",
      title: "Testoing for more ",
      start: "2021-02-13T12:30:00Z",
      end: "2021-02-14T13:30:00Z",
      textColor: "pink",
      description: "lets play some game s",
      display: "list-item",
      backgroundColor: "black",
    },
    {
      id: "3",
      title: "Doc appoinmnet ",
      start: "2021-02-13",
      end: "2021-02-14",
      startTime: "10:45:00",
      endTime: "12:45:00",
      textColor: "pink",
      daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events 
      display: "list-item",
      textColor: "black",
    },
  ]);
  const [showSchedule, ChangeShowSchedule ] =useState(false) // to show the shedule model 
  const [ShowEventClicked, ChangeShowEventClicekd ] = useState(true) //to show event clicked
  const [SelectedStartedData, ChangeStartedData] = useState() //started selected data 
  const [SelectedEndedData, ChangeEndedData] = useState(); // ended slected data  
  const calendarForm = (
    <CalendarForm
      SendingEvents={currentEvents} //Pass down the list of events
      CallingSchedule={(value) => ChangeShowSchedule(value)} //to call schedule
      CallingClickedEvent={(value) => ChangeShowEventClicekd(value)} //to call model with event clicked info 
      GetStartDate={(value) => ChangeStartedData(value)} //getting started clicked data
      GetEndDate={(value) => ChangeEndedData(value)} //getting ended clicked data
    />
  );
    const scheduleForm = (
      <ScheduleForm
        submitEventValues={(value) => ChangeEventList(value)}
        ScheduleColor={props.RecieveColor} //send color form App
        CallingCalendar={(value) => ChangeShowSchedule(value)} //to call calendar back 
        SendSelectedSD={SelectedStartedData} //Selected Start Data
        SendSelectedED={SelectedEndedData} //Selected End Data
      />
    );
    const eventform = <EventForm/>
  return (
    <CalenderContainer>
      {showSchedule ? scheduleForm : null}
      {showSchedule ? null : calendarForm}
      {ShowEventClicked? null : eventform}
    </CalenderContainer>
  );
};
export default CalendarCollection;
