import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { LoginOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import { createEventId } from "../../event-utils";
import { Title } from "@material-ui/icons";

const SubmitButton = (props) => {
  const ButtonIconColor = {
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  };
  console.log(props.isTitle)
  console.log(props.isDescription)
  console.log(props.isURL)
  console.log(props.isStartingDate)
  console.log( props.isEndingData)
  console.log()
  console.log()
  console.log()
  const CreateEvent = { 
      id: createEventId(),
      title: "Doc appoinmnet ",
      textColor: "black",
      start: "2021-02-16",
      end: "2021-02-18",
      startTime: "11:45:00",
      endTime: "14:45:00",
      textColor: "pink",
      // daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events 
      display: "list-item",
      // title:  props.isTitle ? props.isTitle : "" ,
      // description:  props.isDescription ? props.isDescription : "" ,
      // Url:  props.isURL ?  props.isURL : "" ,
      // start:  props.isStartingDate ,
      // end: props.isEndingData,
      // startTime: "10:45:00",
      // endTime: "12:45:00", 
      // display: "list-item",
      // textColor: "red",
    };
    // daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events
    // daysOfWeek: props.isRepeatedDays,

  const SubmitEvent = () => { 
    return(
      props.isCallingCalendar(false),
      props.isEvent((oldarr) => [...oldarr, CreateEvent])
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

  // props.IsSubmistClicked(isSubmit); //This is values is used to send value that the submit button has been clicked

  return SubmitButton;
};

export default SubmitButton;
