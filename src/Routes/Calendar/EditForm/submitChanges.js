import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { SendOutlined } from "@ant-design/icons";
import Button from "../../../UI/Button";

const submitChanges = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  } 
  // this will delete the old event and send the new one
  const SubmitTheNewEvent = () => {
    const id = props.TheIdOfClickedEvent; //the Event id
    const Delete = props.PassEventsInfoList; //copy the Events list
    props.ReturnChangedEvents(Delete.filter((Event) => Event.id !== id));
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
