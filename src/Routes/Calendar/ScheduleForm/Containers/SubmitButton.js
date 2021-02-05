import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { LoginOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import { createEventId } from "../../event-utils";

const SubmitButton = (props) => {
  //pre created list of event is created as an example 
  const [EventList, ChangeEventList] = useState([
    {
      id: "a",
      title: "Testoing for more ",
      start: "2021-02-13T12:30:00Z",
      textColor: "pink",
      end: "2021-02-14T13:30:00Z",
      description: "lets play some game s",
      display: "list-item",
      backgroundColor: "black",
    },
    {
      title:"Doc appoinmnet ",
      start: "2021-02-13",
      textColor: "pink",
      end: "2021-02-14",
      daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events
      // daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
      startTime: "10:45:00",
      endTime: "12:45:00",
      display: "list-item",
      textColor: "black",
    },
  ]);
  const RecieveTitle = props.isTitle
  
  const [CreateEvent, ChanageEventInfo] = useState({ 
          id: "",
          title:  "",
          start: "",
          // startTime: "10:45:00",
          // endTime: "12:45:00", 
          display: "",
          textColor: ""
    }
  );
  const [isSubmit, ChangeIsSubmit] = useState(true); //This is values is used to send value that the submit button has been clicked 
  const subNote = () => {
    if(props.isTitle === ""){
      <FadeIn>
        {props.CheckTitlePH("Please Enter A Title ....(-_-)")}
      </FadeIn>  
    } else {
      console.log(CreateEvent)
      const NewItem ={
        id: createEventId(),
        title:  RecieveTitle,
        start: "2021-02-21",
        // startTime: "10:45:00",
        // endTime: "12:45:00", 
        display: "list-item",
        textColor: "red"
      }
      console.log(CreateEvent)
      ChanageEventInfo(prevc=> {return{...prevc,NewItem}}) 
      console.log(EventList)
      AddEvent(CreateEvent)  
      ChangeIsSubmit(false)
    }
  };
  const AddEvent = ( Events ) => {
    // const prevEvent = [...EventList]
    // prevEvent.unshift(Events)
    ChangeEventList([...EventList,Events])
    console.log(EventList)
    // ChangeEventList(EventList.concat(Events))

  }

  
  const ButtonIconColor = {
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
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
