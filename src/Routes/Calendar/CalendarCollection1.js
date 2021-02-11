import React, { useState } from "react"; 
import CalendarForm from "./CalendarForm1";
import ScheduleForm from "./ScheduleForm/Schedule1";
import styled from "styled-components";
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
      id: "1",
      title: "Doc appoinmnet ",
      start: "2021-02-13",
      end: "2021-02-14",
      startTime: "10:45:00",
      endTime: "12:45:00",
      textColor: "pink",
      daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events
      // daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
      display: "list-item",
      textColor: "black",
    },
  ]);

  const [showSchedule, ChangeShowSchedule ] =useState(false) // to show the shedule model 
  const [SelectedStartedData, ChangeStartedData] = useState() //started selected data 
  const [SelectedEndedData, ChangeEndedData] = useState(); // ended slected data  
  const calendarForm = (
    <CalendarForm
      SendingEvents={currentEvents}
      CallingSchedule={(value) => ChangeShowSchedule(value)}
      GetStartDate={(value) => ChangeStartedData(value)}
      GetEndDate={(value) => ChangeEndedData(value)}
    />
  );
    const scheduleForm = (
      <ScheduleForm
        ScheduleColor={props.RecieveColor}
        CallingCalendar={(value) => ChangeShowSchedule(value)}
        SendSelectedSD={SelectedStartedData} //Selected Start Data
        SendSelectedED={SelectedEndedData} //Selected End Data
      />
    );
  return (
    <CalenderContainer>
      <div
        style={{
          zIndex: "10",
          position: "absolute",
          left: "35%",
          transition: " all 0.3s easee-out",
          transform: showSchedule ? "translateY(0)" : "translateY(-100vh)",
          opacity: showSchedule ? "1" : "0",
          backdropFilter: "blur(1.4)"
        }}
      >
        {scheduleForm}
      </div>
      <div
        onClick={() => (showSchedule ? ChangeShowSchedule(false) : null)}
        style={{
          zIndex: "1",
          filter: showSchedule ? "blur(1px)" : null,
          opacity: showSchedule ? "0.2" : "1",
        }}
      >
        {calendarForm}
      </div>
    </CalenderContainer>
  );
};
export default CalendarCollection;
