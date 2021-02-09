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
  const [isSubmit, ChangeIsSubmit] = useState(false); //This is values is used to send value that the submit button has been clicked
  const CreateEvent = {
    id: createEventId(),
    title: isSubmit ? props.isTitle : "",
    description: isSubmit ? props.isDescription : "",
    Url: isSubmit ? props.isURL : "",
    start: isSubmit ? props.isFromData : "",
    end: isSubmit ? props.isToData : "",
    // startTime: "10:45:00",
    // endTime: "12:45:00",
    display: "list-item",
    textColor: "red",
  };

  const subNote = () => {
    if (props.isTitle === "" && props.isDescription === "") {
      <FadeIn>
        {
          (props.CheckTitlePH("Please Enter A Title ....(-_-)"),
          props.CheckDescriptionPH("Please Enter A Description ....(-_-)"))
        }
      </FadeIn>;
    } else if (props.isTitle === "") {
      <FadeIn>{props.CheckTitlePH("Please Enter A Title ....(-_-)")}</FadeIn>;
    } else if (props.isDescription === "") {
      <FadeIn>
        {props.CheckDescriptionPH("Please Enter A Description ....(-_-)")}
      </FadeIn>;
    } else {
      // props.CheckTitlePH("")
      // props.CheckDescriptionPH("")
      props.GetEvent((oldarr) => [...oldarr, CreateEvent]);
      ChangeIsSubmit(true);
    }
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
        onClick={subNote}
        text={"Submit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );

  props.IsSubmistClicked(isSubmit); //This is values is used to send value that the submit button has been clicked

  return SubmitButton;
};

export default SubmitButton;
