import React, { Component } from "react";
import Nav from "../../UI/NavBar";
import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

class CalendarList extends Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };
  //this to handle whenever you want to create an event
  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  render() {
    return (
      <div>
        <Nav
          ColorChanged={this.props.colorchanged}
          RecieveColor={this.props.Color}
        />
        <div
          style={{
            padding: "10px",
            color: this.props.Color.TextFC,
            fontWeight: "bold",
          }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            height="850px"
            contentHeight="800px"
            //this is an event that is created as for demonstration
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            //to create you own event
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function

            // eventClick={this.handleEventClick}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
        </div>
      </div>
    );
  }
}

export default CalendarList;
