import React , { useState }from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Schedule from './ScheduleForm/ScheduleForm'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import styled from 'styled-components';
const CalenderContainer = styled.div`
    margin: 10px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    min-height: 100%;
    font-size: 16px;
    color: cornflowerblue 
    
`
const CalendarForm = (props) => {

  const weekendsVisible = true
  const [currentEvents, ChangecurrentEvents]= useState([])

  //this is to get the data from Select
  const [DataClicked, ChangeDataClicked] = useState(false)
  const [getStartSelectedData, ChangeStartSelectedData] = useState()
  const [getEndSelectedData, ChangeEndSelectedData] = useState()
  // The following part is for form is work 
  const [ getIsSubmit , ChangeIsSubmit ] = useState(false)
  const [ getIsClose , ChangeIsClose ] = useState(true)
  const [ isTitle , ChangeTitle ] = useState()
  let [ calendarApi , ChangecalendarApi ] = useState()
  const handleDateSelect = (selectInfo) => {
    // let title = prompt('Please enter a new title for your event')
    ChangecalendarApi(selectInfo.view.calendar)
    // calendarApi.unselect() // clear date selection
    ChangeStartSelectedData(selectInfo.startStr.split("-"))
    ChangeEndSelectedData(selectInfo.endStr.split("-"))
    ChangeDataClicked(true)

      if (getIsSubmit == "true" ) {
        console.log("now submit is clicked")
        calendarApi.addEvent({
          id: createEventId(),
          title: "mero",
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
      else  {
        console.log("now the close button is clicked")
      }
    }

  const FullCalendarForm = <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
    headerToolbar={{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,list'
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
    weekends={weekendsVisible}
    eventDisplay= 'block' //this is used to high light the event that are created 
    eventTextColor="black" //this is for the styling of the text for each event
    eventBackgroundColor="cornflowerblue" //This is for the background of each event
    eventBorderColor="pink" //The border color
    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
    select={handleDateSelect}
    // eventContent={renderEventContent} // custom render function
    // eventClick={handleEventClick}
    // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
  /> 

  return ( <CalenderContainer  >
      {DataClicked == false ? FullCalendarForm : 
        <Schedule 
          SubmitIsClicked={(value) => (ChangeIsSubmit(value), ChangeDataClicked(value))}
          CloseIsCliced={(value) => (ChangeIsClose(value), ChangeDataClicked(value))}
          SelectedStartDateClicked={getStartSelectedData} 
          SelectedEndDateClicked={getEndSelectedData}
          ScheduleColor={props.RecieveColor}
          SendTitle={(value)=>ChangeTitle(value)}
        /> }

    </CalenderContainer>
  )
      }
export default CalendarForm

  // handleWeekendsToggle = () => {
  //   setState({
  //     weekendsVisible: !state.weekendsVisible
  //   })
  // }

  

  // handleEventClick = (clickInfo) => {
  //   if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove()
  //   }
  // }

//   handleEvents = (events) => {
//     setState({
//       currentEvents: events
//     })
//   }

// }

// function renderEventContent(eventInfo) {
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

