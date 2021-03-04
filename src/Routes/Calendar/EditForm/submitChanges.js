import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { SendOutlined } from "@ant-design/icons";
import Button from "../../../UI/Button";
import { createEventId } from "../event-utils";

const submitChanges = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  } 
const CreateEvent = {
    id: createEventId(),
    title: props.isTitle,
    description: props.isDescription,
    Url: props.isURL,
    start: props.isStartingDate,
    end: props.isEndingData,
    startTime: props.isStartingTime,
    endTime: props.isEndingTime,
    daysOfWeek: props.isRepeatedDays,
    display: "list-item",
};
const trsy = () => {
    // props.ReturnNewEvents(ClickedEvent.filter((Event) => Event.id !== id));
    const ClickedEvent = props.PassEventsInfoList; //copy the Events list
    const id = props.TheIdOfClickedEvent; //the Event id
    const ChangedEvents = [...ClickedEvent].filter(Event => Event.id === id);
    console.log(ChangedEvents)
}
  // this will delete the old event and send the new one
  const SubmitTheNewEvent = () => { 
    const ClickedEvent = props.PassEventsInfoList; //copy the Events list
    const id = props.TheIdOfClickedEvent; //the Event id
    let newEvent;
    let indexOfEvent;
        ClickedEvent.forEach((event, index) => {
          if (event.id == id) {
            newEvent = event;
            indexOfEvent = index;
          }
        });

    const newNotes = [...ClickedEvent];
    //  newEvent.id =createEventId();
    // newEvent.title =props.isTitle;
    // newEvent.description =props.isDescription;
    // newEvent.Ur = props.isURL;
    // newEvent.start= props.isStartingDate;
    // newEvent.end= props.isEndingData;
    // newEvent.startTime= props.isStartingTime;
    // newEvent.endTime= props.isEndingTime;
    // newEvent.daysOfWeek= props.isRepeatedDays;
    // newEvent.display= "list-item";
        // newEvent.description = props.isDescription;
        newEvent = {
          id: createEventId(),
          title: props.isTitle,
          description: props.isDescription,
          Url: props.isURL,
        //   start: props.isStartingDate,
        //   end: props.isEndingData,
        //   startTime: props.isStartingTime,
        //   endTime: props.isEndingTime,
        //   daysOfWeek: props.isRepeatedDays,
        //   display: "list-item",
        };
    console.log(newNotes[indexOfEvent]);
    newNotes[indexOfEvent] = newEvent
    console.error(newNotes[indexOfEvent],indexOfEvent, newEvent)
   props.ReturnNewEvents(newNotes);
    // console.log(newNotes[id]); 
    // console.log(ChangedEvents)
    // if (ChangedEvents) {
    //     ChangedEvents.id = createEventId();
    //     ChangedEvents.title =  props.isTitle;
    //     ChangedEvents.description =  props.isDescription;
    //     ChangedEvents.Url = props.isURL;
    //     ChangedEvents.start = props.isStartingDate;
    //     ChangedEvents.end = props.isEndingData ;
    //     ChangedEvents.startTime = props.isStartingTime;
    //     ChangedEvents.endTime = props.isEndingTime ;
    //     ChangedEvents.daysOfWeek =  props.isRepeatedDays;
    //     ChangedEvents.display = "list-item";
    // }
    // console.log(ChangedEvents)
    
    // props.ReturnNewEvents(ChangedEvents);

    props.isCloseModel(true);
  };
  const SubmitButton = <FadeIn>
      <Button
        width={"130px"}
        marginBottomValue={"10px"}
        marginLeftValue={"100px"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        IsCalledValue={"hover"}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        onClick={SubmitTheNewEvent}
        text={"Submit"}
        icon={<SendOutlined style={ButtonIconColor}/>}
      />
    </FadeIn>

  return SubmitButton;
};

export default submitChanges;
