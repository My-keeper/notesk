import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { SendOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import { createEventId } from "../../event-utils";

const submitChanges = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  }  

  // this will delete the old event and send the new one
  const SubmitTheNewEvent = () => { 
    const ClickedEvent = props.PassEventsInfoList; //copy the Events list
    const id = props.TheIdOfClickedEvent; //the Event id
    let newEvent;
    let indexOfEvent;
    ClickedEvent.forEach((event, index) => {
      if (event.id == id) {
        newEvent = {...event};
        indexOfEvent = index;
      }
    });
    console.log(props.isStartingDate)
    console.log(props.isEndingData)
    // console.log(props.isStartingTime)
    const newNotes = [...ClickedEvent]; 
    newEvent = {
      ...newEvent,
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
    console.error(newEvent)
    newNotes[indexOfEvent] = newEvent
    props.ReturnNewEvents(newNotes); 

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
