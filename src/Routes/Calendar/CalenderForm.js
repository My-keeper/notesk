import React, { useState } from "react";
import styled from 'styled-components';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import allLocales from '@fullcalendar/core/locales-all';
import TodayIcon from '@material-ui/icons/Today';
import Schedule from './ScheduleForm/ScheduleForm'
//${(props) => (props.CalendarColorSelected ? props.CalendarColorSelected : "cornflowerblue")}
const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    min-height: 100%;
    font-size: 16px;
    color: cornflowerblue 
    
`

const CalendarForm= (props) => {
    //this part to collect list of the Events that is created and passed down once submitted
    const [GetPassedDownEvents, ChangePassedDownEvents] = useState([])
    //This two values are used to toggle the values to change the state to show the schedule
    const [DataClicked, ChangeDataClicked]= useState(false)
    const [CloseIsCllicked, ChangeCloseIsClicked]= useState(true)
    

    const [ClickedDate, ChangeClickedDate] = useState()
    const IconColor =  props.RecieveColor.CalendarColorTable
    const handleDateClick = (arg) => { 
        return (ChangeClickedDate(arg.dateStr.split("-")),ChangeDataClicked(true))
      }
    const [getEvent, ChangeEventInfo] = useState([{}])
      const EventTest = [
        {id: 'a', title: 'Testoing for more ', start: '2021-01-30T12:30:00Z',textColor:"pink", end: '2021-02-02T13:30:00Z',description: 'lets play some game s', display: 'list-item', backgroundColor:"black"},
        {
      daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
      startTime: '10:45:00',
        endTime: '12:45:00'
        , display: 'list-item',
        textColor: 'black'
    }]
    //this option for the languafes 
    const initialLocaleCode = 'En'
    
    const CalenderTable = <FullCalendar
        plugins={[timeGridPlugin,dayGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
            left: 'prev,next today',
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        //this is for the tile what should be there for the user
        titleFormat= {{ month: 'short',year: 'numeric',day: 'numeric'}}
        titleRangeSeparator= " to "
        //to adjust the calender size to fit different sizes 
        handleWindowResize="true"
        //this is for the languages option 
        locale= {initialLocaleCode}
        // setOption={allLocales}
        initialView="dayGridMonth"
        editable={true} //to edit the info
        selectable={true} //to enable selection
        selectMirror={true}
        dayMaxEvents={true}
        height="850px"
        contentHeight="800px"
        //to get the time zone of your location that is why we will be using the location in the sigup or make the browser detecte it 
        timeZone= 'canada/nl'
        //we can pass here the event that will be created and we need title and date
        //we can as well add onclick once the event is created then the info will show somehting
        events={[
            {
              title: 'BCH237',
              start: '2021-01-12T10:30:00',
              end: '2021-01-12T11:30:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture'
            }
            // more events ...
          ]
        }
        
        //if clicked then it shall show the inofrmation inside the data that is setected 
        dateClick={handleDateClick}
        //this is an event that is created as for demonstration
        // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        //to create you own event
        // select={handleDateSelect}
        // eventContent={this.=} // custom render function

        // eventClick={this.handleEventClick}
        // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
    />

    return(
      <CalenderContainer CalendarColorSelected = {props.RecieveColor.CalendarColorTable} >
        {DataClicked == false ? 
          CalenderTable 
          :
          <Schedule 
            ClosedValue={CloseIsCllicked} 
            CloseIsCliced={(value) => (ChangeCloseIsClicked(value), ChangeDataClicked(value))}
            SelectedDateClicked={ClickedDate} 
            ScheduleColor={props.RecieveColor}/> 
        }
      </CalenderContainer>
    )
};

export default CalendarForm