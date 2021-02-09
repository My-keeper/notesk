import React, { useState } from "react"; 
import TheCalendar from "./CalendarForm";
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
  // const [currentEvents, ChangecurrentEvents] = useState();  // This is the values for events 
  const [DataClicked, ChangeDataClicked] = useState(false); //This is used for value to change between CalendarForm and the other model
  const [getIsSubmit, ChangeIsSubmit] = useState(false); //This part is for the submit button
  const [getIsClose, ChangeIsClose] = useState(true); //This part is for the close button
  const [getStartData, ChangeStartData] = useState();  //This part is for started Selected Data
  const [getEndData, ChangeEndData] = useState(); //This part is for started Selected Data 
  const [currentEvents, ChangeEventList] = useState([ 
    {
      id: "a",
      title: "Testoing for more ",
      start: "2021-02-13T12:30:00Z",
      textColor: "pink",
      end: "2021-02-14T13:30:00Z",
      description: "lets play some game s",
      display: "list-item",
      backgroundColor: "black",
    },
    {
      title:"Doc appoinmnet ",
      start: "2021-02-13",
      textColor: "pink",
      end: "2021-02-14",
      daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events
      // daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
      startTime: "10:45:00",
      endTime: "12:45:00",
      display: "list-item",
      textColor: "black",
    },
  ]);
  const [test, chtest] = useState(false)
  const calendarForm = (
    <TheCalendar
      SendChangedDataClicked={(value) => ChangeDataClicked(value)} //This is used for value to change between CalendarForm and the other model
      EventList={currentEvents} // This is the values for events
      StartedData={(value) => ChangeStartData(value)} //This part is for started Selected Data
      EndedData={(value) => ChangeEndData(value)} //This part is for started Selected Data
      SendDataClicked={DataClicked}
    />
  );
  const scheduleForm = (
    <ScheduleForm
      submitEventValues={(value) => ChangeEventList(value)} // This is the values for events
      SubmitIsClicked={(value) => ( ChangeIsSubmit(value), ChangeDataClicked(value) )} //This part is for the submit button
      CloseIsCliced={(value) => ( ChangeIsClose(value), ChangeDataClicked(value) )} //This part is for the close button
      StartDateClicked={getStartData} //This part is to send started Selected Data
      EndDateClicked={getEndData} //This part is to send started Selected Data
      ScheduleColor={props.RecieveColor}
    />
  );
  return (
    <CalenderContainer>
      <div style={{
          zIndex:"2" , 
        //  position:"absolute",
         transform: DataClicked == false? "translateY(-100vh)" : "translateY(0)",
        //  opacity:!DataClicked? "1" : "0"
         }}>{scheduleForm}</div>
      <div style={{zIndex:"1" , }}>{calendarForm}</div>
      {/* {DataClicked == false ? calendarForm : scheduleForm}     */}
    {/* {calendarForm}  */}
    {/* {scheduleForm} */}
    </CalenderContainer>
  );
};
export default CalendarForm;
