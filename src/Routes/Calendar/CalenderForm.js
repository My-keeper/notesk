import React, { useState } from "react";
import styled from 'styled-components';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
    min-height: 100%;
`

const CalendarForm= (props) => {
    //this is the method that will be called once the data is clicked 
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    return(
        <CalenderContainer>
            <FullCalendar
                plugins={[timeGridPlugin,dayGridPlugin, interactionPlugin, listPlugin]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                initialView="dayGridMonth"
                editable={true} //to edit the info
                selectable={true} //to enable selection
                selectMirror={true}
                dayMaxEvents={true}
                height="850px"
                contentHeight="800px"
                //we can pass here the event that will be created and we need title and date
                events={[
                    { title: 'event 1', date: '2021-02-01' },
                    { title: 'event 2', date: '2021-01-01' }
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
    </CalenderContainer>
    )
};

export default CalendarForm