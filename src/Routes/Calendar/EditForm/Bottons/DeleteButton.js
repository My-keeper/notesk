import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { DeleteFilled } from "@ant-design/icons";
import Button from "../../../../UI/Button";  

const DeleteButton = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  };   
  
const DeleteButton = () => { 
    const id = props.IDofClickedEvent //the Event id
    console.log(props.IDofClickedEvent)
    const Delete = props.EventsInfoList  //copy the Events list
    props.ReturnNewEvents(Delete.filter(Event => Event.id !== id))
    props.CloseModel(true)
  };

  const SubmitDeleteButton = (
    <FadeIn>
      <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginLeftValue={"10%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        IsCalledValue={"hover"}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        onClick={DeleteButton}
        text={"Delete"}
        icon={<DeleteFilled style={ButtonIconColor} />}
      />
    </FadeIn>
  );


  return SubmitDeleteButton;
};

export default DeleteButton;
