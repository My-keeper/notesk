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
  // const CreateEvent = {
  //   id: createEventId(),
  //   title: isSubmit ? props.isTitle : "",
  //   description: isSubmit ? props.isDescription : "",
  //   Url: isSubmit ? props.isURL : "",
  //   start: isSubmit ? props.isFromData : "",
  //   // startTime: "10:45:00",
  //   // endTime: "12:45:00",
  //   display: "list-item",
  //   textColor: "red",
  // };

  const subNote = () => { 
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
        onClick={()=>props.isCallingCalendar(false)}
        text={"Submit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );

  // props.IsSubmistClicked(isSubmit); //This is values is used to send value that the submit button has been clicked

  return SubmitButton;
};

export default SubmitButton;
