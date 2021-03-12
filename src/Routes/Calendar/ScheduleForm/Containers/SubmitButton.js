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
    id: createEventId(),
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
  
  const SubmitEvent = async () => { 
    const isLoggedIn = await API.isLoggedIn();
      if(isLoggedIn){
        return  API.CreateEvents(CreateEvent.title, CreateEvent.description, CreateEvent.Url, CreateEvent.start, CreateEvent.end, (Event) => {
            CreateEvent=Event //changing the create event before sending it to the front end 
            props.isEvent((oldarr) => [...oldarr, CreateEvent])
            props.isCallingCalendar(false)
          })
      }
      props.isEvent((oldarr) => [...oldarr, CreateEvent])
      props.isCallingCalendar(false)
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
