import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import styled from 'styled-components';
import Schedule from './ScheduleForm/ScheduleForm'
const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    min-height: 100%;
    font-size: 16px;
    color: cornflowerblue 
    
`
export default class DemoApp extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: [], 
    DataIsClicked: false
  }
   
  render() {
    return ( 
        this.state.DataIsClicked === false ?
        <CalenderContainer  >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay, list'
            }}
            initialView='dayGridMonth'
            titleFormat= {{ month: 'short',year: 'numeric',day: 'numeric'}} //this is for the tile what should be there for the user
            height="850px"
            contentHeight="800px"
            handleWindowResize="true"
            locale= 'En' //this is for the languages option 
            timeZone= 'canada/nl' //to get the time zone of your location that is why we will be using the location in the sigup or make the browser detecte it
            editable={true} //to edit the info
            selectable={true} //to enable selection
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            eventDisplay= 'block' //this is used to high light the event that are created 
            eventTextColor="black" //this is for the styling of the text for each event
            eventBackgroundColor="cornflowerblue" //This is for the background of each event
            eventBorderColor="pink" //The border color
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={()=> this.setState({DataIsClicked : true})}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          />
        </CalenderContainer> :<Schedule /> 

    )
  } 

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    // let title = prompt('Please enter a new title for your event')
    // let calendarApi = selectInfo.view.calendar

    // calendarApi.unselect() // clear date selection
    return <Schedule 
    /> 
    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   })
    // }
  }

  handleEventClick = (clickInfo) => {
    if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
