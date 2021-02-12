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
  const CreateEvent = { 
      id: createEventId(), 
      title:  props.isTitle ? props.isTitle : "" ,
      description:  props.isDescription ? props.isDescription : "" ,
      Url:  props.isURL ?  props.isURL : "" ,
      start:  props.isStartingDate ,
      end: props.isEndingData, 
      daysOfWeek: props.isRepeatedDays,
      display: "list-item",
      textColor: "red",
    };

  const SubmitEvent = () => { 
    return(
      props.isEvent((oldarr) => [...oldarr, CreateEvent]),
      props.isCallingCalendar(false)
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
