import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal";
import FadeIn from "react-fade-in";
import {TitleContainer, DescriptionContainer, URLContainer} from './Containers/InputContainer';
import {CalenderContianer, TimerContainer} from './Containers/DropDownContainer';
import SubmitButton from "./Containers/SubmitButton";
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";
const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const Schedule = (props) => {
  //Close is not hovered on color style
  const VisibilityStle1 = {
    marginRight: "4px",
    marginLeft: "95%",
    marginBottom: "15px",
    fontSize: "21px",
    color: props.ScheduleColor.IconC,
  };
  //Close is hovered on color style
  const VisibilityStle2 = {
    marginRight: "4px",
    marginLeft: "95%",
    marginBottom: "15px",
    fontSize: "26px",
    color: props.ScheduleColor.IconC,
  };
 
  const [isClode, ChangeIsClosed] = useState(true);
  const CloseIcon = isClode ? 
    (<CloseOutlined onMouseEnter={() => ChangeIsClosed(false)} style={VisibilityStle1} />)  
    : 
    (<CloseCircleOutlined  onClick={() => props.CloseIsCliced(false)}  onMouseLeave={() => ChangeIsClosed(true)} style={VisibilityStle2} />)
  
  //Title Area
  const [getTitle, ChangeTitle] = useState("")
  const [TitlePH,ChangeTitlePH] = useState("Title ...")
  const Title = <TitleContainer 
    SubmitTitle={(value)=>ChangeTitle(value)}
    SubmitTitlePlaceHolder={TitlePH}
    ScheduleColor={props.ScheduleColor}
    />

  //Description Area
  const [getDescription, ChangeDescription] = useState("")
  const [DescriptionPH,ChangeDescriptionPH] = useState("Description ...")
  const Description =<DescriptionContainer 
    SubmitDescription={(value)=>ChangeDescription(value)}
    SubmitDescriptionPlaceHolder={DescriptionPH}
    ScheduleColor={props.ScheduleColor}
    />
  
  //URL Area
  const [getURL, ChangeURL] = useState()
  const [URLPH,ChangeURLPH] = useState("Optional Attached Link For Description ...")
  const URL = <URLContainer 
    URLOption={(value)=>ChangeURL(value)}
    SubmitURLPH={URLPH}
    ScheduleColor={props.ScheduleColor}
    />

  // Data From and To 
  const [getFormDate, ChangeFormDate] = useState()
  const [getToDate, ChangeToDate] = useState()
  const [StartDate, ChangeClickedStartDate] = useState(props.StartDateClicked) //This is the selected data in calendar
  const [EndDate, ChangeClickedEndDate] = useState(props.EndDateClicked) //This is the selected data in calendar
  const Data = <CalenderContianer 
    GetFromDate={(value) => ChangeFormDate(value)} 
    GetToDate={(value) => ChangeToDate(value)} 
    RetrunClickedDate={StartDate}
    RetrunClickedEndDate={EndDate}
    ScheduleColor={props.ScheduleColor} 
  />

  //This is for the time

  // const Time = <TimerContainer
  // SubmitFromHourSelected={(value) => ChangeGetStartHourValue(value)}
  // SubmitToHourlected={(value) => ChangeGetEndHourValue(value)}
  // SubmitFromMinutsSelected={(value) => ChangeGetStartMinutsValue(value)}
  // SubmitToMinutsSelected={(value) => ChangeGetEndMinutsValue(value)}
  // SubmitFromDayValueSelected={(value) => ChangeGetStartDayValue(value)}
  // SubmitToDayValueSelected={(value) => ChangeGetEndDayValue(value)} 
  // // // ScheduleColor={props.ScheduleColor}
  // />

  //Submit Buton
  const [getSubmitClicked, ChangeSubmitClicked] = useState();
  props.SubmitIsClicked(getSubmitClicked);
  const [getEventValue, ChangeEventValue] = useState() 
  // props.submitEventValues(getEventValue);
  const Submit =<SubmitButton
    IsSubmistClicked={(value) => ChangeSubmitClicked(value)} //This is for the submit button to be clicked 
    GetEvent={(value) => ChangeEventValue(value)} //This is to get the event values after the submission button has been clicked
    isTitle={getTitle} //This is to pass down the title value
    CheckTitlePH={(value)=>ChangeTitlePH(value)} //This is to check the title place holder and then change it based on the user input 
    isDescription={getDescription} //This is to pass down the Description value
    CheckDescriptionPH={(value)=>ChangeDescriptionPH(value)} //This is to check the Description place holder and then change it based on the user input 
    isURL={getURL} //This is to pass down the URL value
    CheckURLPH={(value)=>ChangeURLPH(value)} //This is to check the URL place holder and then change it based on the user input 
    isFromData={getFormDate} //This is to pass down the from data that is clicked 
    isToData={getToDate} //This is to pass down the to data that is clicked 

    testingChangeevent={props.TestChangeEvet}
    />
    
  const ScheduleForm = (<FadeIn> <NoteContainer
        position={"relative"}
        width={"520px"}
        margin={"30px auto 20px auto"}
        padding={"15px"}
        boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue={"7px"}
        resizeValue={"both"}
        backGroundColorValue={props.ScheduleColor.NotekBGC}
        FontColorValue={props.ScheduleColor.NoteFC}
      >
        {CloseIcon}
        {Title}
        {Description}
        {URL}
        {/* {Data} */}
        {Submit}
      </NoteContainer>
    </FadeIn>
  );

  return ScheduleForm;
};

export default Schedule;