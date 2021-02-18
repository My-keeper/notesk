import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { LoginOutlined } from "@ant-design/icons";
import Button from "../../../UI/Button";  

const EditButton = (props) => {
  const ButtonIconColor = {
    color: props.ColorChange.IconC,
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  };   

//   const SubmitEvent = () => { 
//     return(
//     //   props.isEvent((oldarr) => [...oldarr, CreateEvent]),
//     //   props.isCallingCalendar(false)
//     )
//   };

  const SubmitButton = (
    <FadeIn>
      <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginLeftValue={"100px"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        IsCalledValue={"hover"}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        // onClick={SubmitEvent}
        text={"Edit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );


  return SubmitButton;
};

export default EditButton;
