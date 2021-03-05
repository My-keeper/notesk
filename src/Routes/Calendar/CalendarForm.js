import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";
import EventForm from "./EditForm/EvenForm";

const CalendarForm = (props) => {

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

  //this is to handle month to change it to number 
  const [CreatedMonthsValues, ChangeMonths] = useState({
    Jan: { id: "01", name: "jan" },
    Feb: { id: "02", name: "Feb" },
    Mar: { id: "03", name: "Mar" },
    Apr: { id: "04", name: "Apr" },
    May: { id: "05", name: "May" },
    Jun: { id: "06", name: "Jun" },
    Jul: { id: "07", name: "Jul" },
    Aug: { id: "08", name: "Aug" },
    Sep: { id: "09", name: "Sep" },
    Oct: { id: "10", name: "Oct" },
    Nov: { id: "11", name: "Nov" },
    Dec: { id: "12", name: "Dec" },
  });

  //Event clicked handler
  const [isStartedDate, ChangeIsStartedDate] = useState("") // The value of the started clicked Data of event
  const [isStartedDay, ChangeIsStartedDays] = useState("") // The value of the started Day clicked Data of event
  const [isStartedMonth, ChangeIsStartedMonth] = useState("") // The value of the started Month clicked Data of event
  const [isStartedYear, ChangeIsStartedYear] = useState("") // The value of the started Year clicked Data of event

  const [isEndedDate, ChnageIsEndedDate] = useState("") //The value of the ended clicked Data of event
  const [isEndedDay, ChnageIsEndedDay] = useState("") //The value of the ended Day clicked Data of event
  const [isEndedMonth, ChnageIsEndedMonth] = useState("") //The value of the ended Month clicked Data of event
  const [isEndedYear, ChnageIsEndedYear] = useState("") //The value of the ended year clicked Data of event
 
  //this is the handler for the clicked Event
  const handleEventClick = (clickInfo) => {
    ChangeShowEventClicekd(false); 

    //Starting Date
    const StartedDayValue = clickInfo.event._instance.range.start.toString().slice(8, 10) //Day
    ChangeIsStartedDays(StartedDayValue);
    const StartedMonthValue = clickInfo.event._instance.range.start.toString().slice(4, 7) //Month
    ChangeIsStartedMonth(Object.values(CreatedMonthsValues).map( value => { if (value.name == StartedMonthValue) {return value.id;} }).filter(item => item)[0]) //Changing Month to number
    const StartedYearValue = clickInfo.event._instance.range.start.toString().slice(11, 15) //Year 
    ChangeIsStartedYear(StartedYearValue)
    
    //ending Date
    const EndedDayValue = clickInfo.event._instance.range.end.toString().slice(8, 10) //Day
    ChnageIsEndedDay(EndedDayValue);
    const EndedMonthValue = clickInfo.event._instance.range.end.toString().slice(4, 7) //Month
    ChnageIsEndedMonth(Object.values(CreatedMonthsValues).map( value => { if (value.name == EndedMonthValue) { return value.id; } }).filter(item => item)[0]) //Changing Month to number
    const EndedYearValue = clickInfo.event._instance.range.end.toString().slice(11, 15) //Year 
    ChnageIsEndedYear(EndedYearValue);
    
    //save the starting data for edit form event
    ChangeIsStartedDate(
      clickInfo.event._instance.range.start.toString().slice(4, 15)
    ); 
    //save the starting data for edit form event
    ChnageIsEndedDate(
      
      clickInfo.event._instance.range.end.toString().slice(4, 15)
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

  //this is the calendar Form
  const FullCalendarForm = (
    <div
      style={{
        zIndex: "1",
        filter: ShowEventClicked ? null : "blur(4px)",
        pointerEvents: ShowEventClicked ? null : "none",
        // color: "#6495ed",
        color: props.CalendarColor.CalendarTC,
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
        // contentHeight="800px" //get the content height for the calendar
        contentHeight="100%" //get the content height for the calendar
        handleWindowResize="true"
        locale="En" //this is for the languages option
        timeZone="canada/nl" //to get the time zone of your location that is why we will be using the location in the sigup or make the browser detecte it
        editable={true} //to edit the info
        selectable={true} //to enable selection
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        eventTextColor="black" //this is for the styling of the text for each event
        eventBackgroundColor="cornflowerblue" //This is for the background of each event
        eventBorderColor="pink" //The border color
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        events={getEvent}
        eventClick={handleEventClick} 
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
        StartedDay={isStartedDay} //this is the value of the date in number
        StartedMonth={isStartedMonth} //this is the value of the date in number
        StartedYear={isStartedYear} //this is the value of the date in number
        EndedDay={isEndedDay} //this is the value of the date in number
        EndedMonth={isEndedMonth} //this is the value of the date in number
        EndedYear={isEndedYear} //this is the value of the date in number
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

export default CalendarForm;