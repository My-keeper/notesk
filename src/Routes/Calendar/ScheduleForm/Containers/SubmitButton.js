import React, { useState,useEffect } from "react";
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
  //pre created list of event is created as an example 
  const [EventList, ChangeEventList] = useState([])
  //   {
  //     id: "a",
  //     title: "Testoing for more ",
  //     start: "2021-02-13T12:30:00Z",
  //     textColor: "pink",
  //     end: "2021-02-14T13:30:00Z",
  //     description: "lets play some game s",
  //     display: "list-item",
  //     backgroundColor: "black",
  //   },
  //   {
  //     title:"Doc appoinmnet ",
  //     start: "2021-02-13",
  //     textColor: "pink",
  //     end: "2021-02-14",
  //     daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events
  //     // daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
  //     startTime: "10:45:00",
  //     endTime: "12:45:00",
  //     display: "list-item",
  //     textColor: "black",
  //   },
  // ]);
  // console.log(EventList)
  const [testevent, changetestevent] = useState() 
  // const sss =props.collectedData
  // console.log(props.collectedData)
  const [idCounter, ChangeidCounter] = useState(0)
  const [isSubmit, ChangeIsSubmit] = useState(true); //This is values is used to send value that the submit button has been clicked 
  const CreateEvent= { 
    id:  createEventId(),
    title:  isSubmit ? props.isTitle : "",
    description: isSubmit ? props.isDescription : "",
    Url: isSubmit ? props.isURL : "",
    start: isSubmit ? props.isFromData :"",
    // startTime: "10:45:00",
    // endTime: "12:45:00", 
    display: "list-item",
    textColor: "red"
  } 
  
  const subNote = () => { 
    // if(props.collectedData.title === "" && props.Description.isDescription === "" ) {
      //   <FadeIn>{props.CheckTitlePH("Please Enter A Title ....(-_-)") 
      //   , props.CheckDescriptionPH("Please Enter A Description ....(-_-)")} </FadeIn> 
      // }
      // else if (props.isTitle === "") {
        //   <FadeIn>{props.CheckTitlePH("Please Enter A Title ....(-_-)") }</FadeIn>
        // }
        // else if (props.isDescription === "") {
          //   <FadeIn>{props.CheckDescriptionPH("Please Enter A Description ....(-_-)") }</FadeIn>
          // }
          // else {
            // props.CheckTitlePH("") 
            // props.CheckDescriptionPH("")
            // changetestevent(props.collectedData) 
            props.testingChangeevent(oldarr => [...oldarr,CreateEvent])
            // props.testingChangeevent(oldarr => [...oldarr,props.collectedData])
            // console.log(EventList)
            // ChangeEventList(oldarr => [...oldarr,props.collectedData])
            ChangeIsSubmit(false)
            // }
          } 
          // console.log(EventList)

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
        onClick={ subNote}
        text={"Submit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );

  props.GetEvent(EventList); //This is used to send the new list of event after mergeing the new and the old one 
  props.IsSubmistClicked(isSubmit); //This is values is used to send value that the submit button has been clicked 

  return SubmitButton;
};

export default SubmitButton;
