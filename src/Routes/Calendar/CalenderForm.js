import React, { useState } from "react";
import styled from 'styled-components';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
    min-height: 100%;
`

const CalendarForm= (props) => {

    return(
        <CalenderContainer>
            <FullCalendar
                plugins={[timeGridPlugin,dayGridPlugin, interactionPlugin]}
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