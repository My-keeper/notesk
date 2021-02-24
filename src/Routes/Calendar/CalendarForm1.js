import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";
import EventForm from "./EditForm/EvenForm";

const CalendarForm1 = (props) => {
  const weekendsVisible = true;
  const getEvent = props.SendingEvents;
  const [StartDate, ChangeStartData] = useState(""); // Save Selected Start Data
  const [EndDate, ChangeEndData] = useState(""); // Save Selected End Data
  props.GetStartDate(StartDate); // Send Selected Start Data
  props.GetEndDate(EndDate); // Send Selected End Data
  const [ShowEventClicked, ChangeShowEventClicekd] = useState(true); //to show event clicked
  //Returning the values of the event that is clicked to be showed
  const [ClickedEvent, ChangeClickedEvent] = useState({
    Id: "",
    title: "",
    description: "",
    url: "",
    Start: "",
    End: "",
    Display: "",
  });
  //Data Selected function
  const handleDateSelect = (selectInfo) => {
    /*
    ih here use splice to check if the ending data is bigger than the starting data just by 
    one day then return undifiended otherwise return the data
    */
    ChangeStartData(selectInfo.startStr); // Selected Start Data
    ChangeEndData(selectInfo.endStr); // Selected End Data
    props.CallingSchedule(true);
  };
  //Event clicked handler
  const [isStartedDate, ChnageIsStartedDate] = useState("") // The value of the started clicked Data of event
  const [isEndedDate, ChnageIsEndedDate] = useState("") //The value of the ended clicked Data of event

  const handleEventClick = (clickInfo) => {
    
    ChangeShowEventClicekd(false);
    //save the starting data for edit form event
    ChnageIsStartedDate(
      clickInfo.event._instance.range.end.toString().slice(4, 15)
    ); 
    //save the starting data for edit form event
    ChnageIsEndedDate(
      clickInfo.event._instance.range.start.toString().slice(4, 15)
    );
    ChangeClickedEvent({
      Id: clickInfo.event._def.publicId,
      title: clickInfo.event._def.title,
      description: clickInfo.event._def.extendedProps.description,
      url: clickInfo.event._def.extendedProps.Url,
      Start: clickInfo.event._instance.range.start.toString().slice(4, 15),
      End: clickInfo.event._instance.range.end.toString().slice(4, 15),
      Display: clickInfo.event._def.ui.display,
    });
  };

  const FullCalendarForm = (
    <div
      style={{
        zIndex: "1",
        filter: ShowEventClicked ? null : "blur(4px)",
        pointerEvents: ShowEventClicked ? null : "none",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
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
        eventRemove={(value) => console.log(value)} // custom render function
        // eventContent={value=> console.log(value)} // custom render function
        // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
      />
    </div>
  );

  //Event Form that is clicked
  const eventform = (
    <div style={{ zIndex: "3", position: "absolute", left: "35%", top: "10%" }}>
      <EventForm
        ScheduleColor={props.CalendarColor} //send color form App
        closedEventForm={(value) => ChangeShowEventClicekd(value)}
        EventClickedInfo={ShowEventClicked ? null : ClickedEvent} //pass downt the info about the clicked data
        PassedAllEvent={props.SendingEvents} //copy of the event so we can compare the id and delete it
        isStartedDateEditEvent={isStartedDate} //The value of the started Clicked Event 
        isEndedDateEditEvent={isEndedDate} //The value of the Ended Clicked Event 
        ChangeAllEvents={(value) => props.ChangeEvents(value)} //Delete the selected event
      />
    </div>
  );

  return (
    <div>
      {ShowEventClicked ? null : eventform}
      {FullCalendarForm}
    </div>
  );
};

export default CalendarForm1;