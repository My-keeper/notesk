import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";
import EventForm from "./EditForm/EvenForm";

const CalendarForm1 = (props) => {
  const weekendsVisible = true;
  const [getEvent, ChangegetEvent] = useState(props.SendingEvents ? props.SendingEvents :[]); 
  const [StartDate ,ChangeStartData ]=useState("")  // Save Selected Start Data
  const [EndDate ,ChangeEndData ]=useState("") // Save Selected End Data
  props.GetStartDate(StartDate); // Send Selected Start Data
  props.GetEndDate(EndDate); // Send Selected End Data
  const [ShowEventClicked, ChangeShowEventClicekd ] = useState(true) //to show event clicked
  //Returning the values of the event that is clicked to be showed 
  const [ClickedEvent, ChangeClickedEvent] = useState({
    Id: "",
    title: "",
    description: "",
    url: "",
    Start: "",
    End: "",
    Display: ""
  }); 
  //Data Selected function
  const handleDateSelect = (selectInfo) => {
    ChangeStartData(selectInfo.startStr); // Selected Start Data 
    ChangeEndData(selectInfo.endStr); // Selected End Data
    props.CallingSchedule(true);
  };
  //Event clicked handler 
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event._def.extendedProps.Url);
      ChangeShowEventClicekd(false)
      ChangeClickedEvent({
        Id: clickInfo.event._def.publicId,
        title: clickInfo.event._def.title,
        description: clickInfo.event._def.extendedProps.description,
        url: clickInfo.event._def.extendedProps.Url,
        Start: clickInfo.event._instance.range.start,
        End: clickInfo.event._instance.range.end,
        Display: clickInfo.event._def.ui.display,
      });
  }
  const FullCalendarForm = <FullCalendar
    plugins= {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
    headerToolbar= {{
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,list",
    }}
    initialView="dayGridMonth"
    titleFormat={{ month: "short", year: "numeric", day: "numeric" }} //this is for the tile what should be there for the user
    height="850px" //get fixed height for the calendar
    contentHeight="800px" //get the content height for the calendar 
    handleWindowResize="true"
    locale="En" //this is for the languages option
    timeZone="canada/nl" //to get the time zone of your location that is why we will be using the location in the sigup or make the browser detecte it
    editable={true} //to edit the info
    selectable={true} //to enable selection
    selectMirror={true}
    dayMaxEvents={true}
    weekends={weekendsVisible}
    eventDisplay="block" //this is used to high light the event that are created
    eventTextColor="black" //this is for the styling of the text for each event
    eventBackgroundColor="cornflowerblue" //This is for the background of each event
    eventBorderColor="pink" //The border color
    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
    select={handleDateSelect}
    events={getEvent}
    eventClick={handleEventClick}
    // eventContent={renderEventContent} // custom render function
    // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
  /> 
    //Event Form that is clicked 
  const eventform = (
    <div style={{ zIndex: "3", position: "absolute", left: "35%", top: "10%" }}>
      <EventForm
        ScheduleColor={props.CalendarColor} //send color form App
        EventClickedInfo={ShowEventClicked ? null : ClickedEvent} //pass downt the info about the clicked data
        closedEventForm={(value) => ChangeShowEventClicekd(value)}
      />
    </div>
  );


  return (ShowEventClicked ? FullCalendarForm : eventform)
};

export default CalendarForm1;

// handleWeekendsToggle = () => {
//   setState({
//     weekendsVisible: !state.weekendsVisible
//   })
// }

// const handleEventClick = (clickInfo) => {
//   return console.log(clickInfo), 
//     console.log(clickInfo.event._instance.range.start),
//    console.log(clickInfo.event._instance.range.end)
//     // console.log(clickInfo.event._instance.range.start),
//     //   console.log(clickInfo.event._instance.range.end);
//   // console.log(clickInfo.event._def.publicId);
//     // console.log(clickInfo.event._def.title),
//     // console.log(clickInfo.event._def.url),
//     // console.log(clickInfo.event._def.extendedProps.description),
//     // console.log(clickInfo.event._def.ui.display)
  
//     // console.log(clickInfo.event),

//   // if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//   //   clickInfo.event.remove()
//   // }
// }

//   handleEvents = (events) => {
//     setState({
//       currentEvents: events
//     })
//   }

// }

// function renderEventContent(eventInfo) {
//   console.log(eventInfo);
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }

// function renderSidebarEvent(event) {
//   return (
//     <li key={event.id}>
//       <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }
