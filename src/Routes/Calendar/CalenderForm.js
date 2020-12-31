import React, { useState } from "react";
import styled from 'styled-components';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import allLocales from '@fullcalendar/core/locales-all';

const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    min-height: 100%;
    font-size: 16px;
    color:${(props) => (props.CalendarColorSelected ? props.CalendarColorSelected : "cornflowerblue")}
`

const CalendarForm= (props) => {
    const IconColor =  props.RecieveColor.CalendarColorTable
    //this is the method that will be called once the data is clicked 
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    //this option for the languafes 
    const initialLocaleCode = 'En'
    
    const CalenderTable = <FullCalendar
        plugins={[timeGridPlugin,dayGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
            left: "prev,next today",
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
            { id: 'a', title: 'event 1', start: '2020-12-31T12:30:00Z', end: '2020-12-31T13:30:00Z',description: 'Lecture'},
            { id: 'b', title: 'event 2', date: '2021-01-01', display: 'background', backgroundColor: 'black'}
        ]}
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
            {console.log(props.RecieveColor.CalendarColorTable)}
            {CalenderTable}
        </CalenderContainer>
    )
};

export default CalendarForm