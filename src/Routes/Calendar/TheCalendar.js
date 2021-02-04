import React , { useState }from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

const TheCalendar = (props) => {
    const weekendsVisible = true
    const [isDataClicked, ChangeDataClicked] = useState(props.SendDataClicked)
    const [getEndSelectedData, ChangeEndSelectedData] = useState()
    const [getStartSelectedData, ChangeStartSelectedData] = useState() 
    const handleDateSelect = (selectInfo) => {  
      ChangeStartSelectedData(selectInfo.startStr.split("-"))
      ChangeEndSelectedData(selectInfo.endStr.split("-"))
      props.SendChangedDataClicked(true)
      }




      const [EventTest , ChangeEventTest] = useState([
        {id: 'a', title: 'Testoing for more ', start: '2021-02-13T12:30:00Z',textColor:"pink", end: '2021-02-14T13:30:00Z',description: 'lets play some game s', display: 'list-item', backgroundColor:"black"},
        {
          start: '2021-02-13',textColor:"pink", end: '2021-02-14',
          daysOfWeek: [ '1' ], //https://fullcalendar.io/docs/recurring-events
          // daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
          startTime: '10:45:00',
          endTime: '12:45:00', 
          display: 'list-item',
          textColor: 'black'
        }
    ])

    // props.SendDataClicked(DataClicked)
    // props.SendChangedDataClicked(ChangeDataClicked)
    // props.SendEndSelectedData(getEndSelectedData)
    // props.SendChangeEndSelectedData(ChangeEndSelectedData)
    // props.SendgetStartSelectedData(getStartSelectedData)
    // props.SendChangeStartSelectedData(ChangeStartSelectedData)
      // const eventvalue = props.EventInfo
      // console.log("The calednar event value .....")
      // console.log(eventvalue)
      const GoAddNevEvent = props.GoReady
    if (GoAddNevEvent === "GO") {

      ChangeEventTest(EventTest.concat (props.EventInfo))

      console.log("will the go value work")
      console.log(EventTest)
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
    events={EventTest}
    // eventContent={renderEventContent} // custom render function
    // eventClick={handleEventClick}
    // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
  /> 
  return ( FullCalendarForm )
}

export default TheCalendar;




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

