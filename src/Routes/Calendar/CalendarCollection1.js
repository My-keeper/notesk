import React, { useState } from "react"; 
import CalendarForm from "./CalendarForm1";
import ScheduleForm from "./ScheduleForm/Schedule1";
import styled from "styled-components";
import BlurDiv from "../../UI/BlurDiv";

const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: cornflowerblue; 
`;
const CalendarCollection = (props) => {
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

  const [showSchedule, ChangeShowSchedule ] =useState(false)

  const calendarForm = (
    <CalendarForm 
        CallingSchedule={value => ChangeShowSchedule(value) }
    />
    );
    const scheduleForm = (
        <ScheduleForm 
        ScheduleColor={props.RecieveColor}
        CallingCalendar={value => ChangeShowSchedule(value)}
        CallingScheduleValue={showSchedule}
    />
  );
  return (
      <CalenderContainer  > 
        <div style={{zIndex : "10" , position:"absolute",
            left: "35%", transition: " all 0.3s easee-out",
            transform: showSchedule ? "translateY(0)" : "translateY(-100vh)",
            opacity: scheduleForm ? "1" : "0", backdropFilter: "blur(1.4)"
        }}>
            {scheduleForm} 
        </div> 
            
       <div 
            onClick={()=>showSchedule?ChangeShowSchedule(false):null} 
            style={{zIndex : "1" , filter: showSchedule ? "blur(4px)": null }}
        >
            {calendarForm}
        </div>
    </CalenderContainer>
  );
};
export default CalendarCollection;
