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
  const [currentEvents, ChangecurrentEvents] = useState();
  console.log("is it the value ....")
  console.log(  currentEvents)

  const [getIsSubmit, ChangeIsSubmit] = useState(false);
  const [getIsClose, ChangeIsClose] = useState(true);
  const [DataClicked, ChangeDataClicked] = useState(false);
  const [getEndSelectedData, ChangeEndSelectedData] = useState();
  const [getStartSelectedData, ChangeStartSelectedData] = useState();
  // const [isGoReady, GetisGo] = useState("")
  // console.log(isGoReady)
  return (
    <CalenderContainer>
      {DataClicked == false ? (
        <TheCalendar
          // GoReady={isGoReady}
          SendDataClicked={DataClicked}
          SendChangedDataClicked={(value) => ChangeDataClicked(value)}
          EventList={currentEvents}
        />
      ) : (
        <ScheduleForm
          submitEventValues={(value) => ChangecurrentEvents(value)}
          SubmitIsClicked={(value) => (
            ChangeIsSubmit(value), ChangeDataClicked(value)
          )}
          CloseIsCliced={(value) => (
            ChangeIsClose(value), ChangeDataClicked(value)
          )}
          // SendisGo={value=>GetisGo(value)}
          // SelectedStartDateClicked={getStartSelectedData}
          // SelectedEndDateClicked={getEndSelectedData}
          ScheduleColor={props.RecieveColor}
          // SendTitle={(value)=>ChangeTitle(value)}
        />
      )}
    </CalenderContainer>
  );
};
export default CalendarForm;
