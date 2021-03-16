import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { SendOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import API from "../../../../API/API";

const submitChanges = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  }  

  // this will delete the old event and send the new one
  const SubmitTheNewEvent = async () => { 
      const isLoggedIn = await API.isLoggedIn(()=>{});
      const ClickedEvent = props.PassEventsInfoList; //copy the Events list
      const id = props.TheIdOfClickedEvent; //the Event id
      let newEvent;
      let indexOfEvent;
      ClickedEvent.forEach((event, index) => {
        if (event.id == id || event._id == id) {
            newEvent = {...event};
            indexOfEvent = index;
          }
        });

      const newNotes = [...ClickedEvent]; 
      newEvent = {
        ...newEvent,
        id: props.TheIdOfClickedEvent,
        title: props.isTitle,
        description: props.isDescription,
        Url: props.isURL,
        start: props.isStartingDate,
        end: props.isEndingData,
        startTime: props.isStartingTime,
        endTime: props.isEndingTime,
        daysOfWeek: props.isRepeatedDays,
        display: props.isDisplayOption,
      };
      newNotes[indexOfEvent] = newEvent
      props.ReturnNewEvents(newNotes); 
      if(isLoggedIn){
          API.UpdateEvents(
            id,
            props.isTitle,
            props.isDescription,
            props.isURL,
            props.isStartingDate,
            props.isEndingData,
            props.isStartingTime,
            props.isEndingTime,
            props.isRepeatedDays,
            props.isDisplayOption
          )
        }

      props.isCloseModel(true);
  };

  const SubmitButton = <FadeIn>
      <Button
        width={"130px"}
        marginBottomValue={"10px"}
        marginLeftValue={"160px"}
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
