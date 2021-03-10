import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { LoginOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import { createEventId } from "../../event-utils";
import API from "../../../../API/API";

const SubmitButton = (props) => {
  const ButtonIconColor = {
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  };   
  var CreateEvent = {
    id: "",
    title: props.isTitle,
    description: props.isDescription,
    Url: props.isURL,
    start: props.isStartingDate,
    end: props.isEndingData,
    startTime: props.isStartingTime,
    endTime: props.isEndingTime,
    daysOfWeek: props.isRepeatedDays,
    display: "list-item"  
  };
  console.log(CreateEvent)
  const SubmitEvent = () => { 
    return(
      API.CreateEvents(props.isTitle, props.description, props.isURL, props.start, props.end, (Event) => {
        props.isEvent((oldarr) => [...oldarr, CreateEvent])
        props.isCallingCalendar(false)
        CreateEvent=Event
        console.log(CreateEvent)
      })
    )
  };

  const SubmitButton = (
    <FadeIn>
      <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginLeftValue={"35%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        IsCalledValue={"hover"}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        onClick={SubmitEvent}
        text={"Submit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );


  return SubmitButton;
};

export default SubmitButton;
