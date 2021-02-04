import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Schedule from "./ScheduleForm/ScheduleForm";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import TheCalendar from "./TheCalendar";
import ScheduleForm from "./ScheduleForm/Schedule";
import styled from "styled-components";

const CalenderContainer = styled.div`
  margin: 10px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  min-height: 100%;
  font-size: 16px;
  color: cornflowerblue;
`;
const CalendarForm = (props) => {
  const [currentEvents, ChangecurrentEvents] = useState();  // This is the values for events 
  const [DataClicked, ChangeDataClicked] = useState(false); //This is used for value to change between CalendarForm and the other model
  const [getIsSubmit, ChangeIsSubmit] = useState(false); //This part is for the submit button
  const [getIsClose, ChangeIsClose] = useState(true); //This part is for the close button
  const [getStartData, ChangeStartData] = useState();  //This part is for started Selected Data
  const [getEndData, ChangeEndData] = useState(); //This part is for started Selected Data 
  
  return (
    <CalenderContainer>
      {DataClicked == false ? (
        <TheCalendar 
          SendChangedDataClicked={(value) => ChangeDataClicked(value)} //This is used for value to change between CalendarForm and the other model
          EventList={currentEvents}  // This is the values for events 
          StartedData={(value)=>ChangeStartData(value)} //This part is for started Selected Data
          EndedData={(value)=>ChangeEndData(value)} //This part is for started Selected Data
          SendDataClicked={DataClicked}
        />
      ) : (
        <ScheduleForm
          submitEventValues={(value) => ChangecurrentEvents(value)}  // This is the values for events 
          SubmitIsClicked={(value) => (ChangeIsSubmit(value), ChangeDataClicked(value))} //This part is for the submit button
          CloseIsCliced={(value) => (ChangeIsClose(value), ChangeDataClicked(value))} //This part is for the close button
          StartDateClicked={getStartData} //This part is to send started Selected Data
          EndDateClicked={getEndData} //This part is to send started Selected Data
          ScheduleColor={props.RecieveColor}
          // SendTitle={(value)=>ChangeTitle(value)}
        />
      )}
    </CalenderContainer>
  );
};
export default CalendarForm;
