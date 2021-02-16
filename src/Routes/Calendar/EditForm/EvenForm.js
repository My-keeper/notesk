import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal";
import FadeIn from "react-fade-in"; 
import { CloseCircleOutlined } from "@ant-design/icons";
import EditButton from "./EditButton";

// import { SubmissionContainer } from "../ScheduleForm/Containers/SubmitButton1" ;
const EachateContainer = styled.div`
    width: 460px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
` 
const TitleStyle = styled.span`
  padding: 4px ;
  fontSize: 1.2em;
  marginRight: 4px;
  color: ${props => props.Coloring};
`
const ContentStyle = styled.span`
  padding: 4px ;
  fontSize: 1.2em;
  marginLeft: 20px;
  `
const EventForm = (props) => {
  
  // The Event information 
  const Header=<EachateContainer>
    <span style={{ 
      padding: "1px" ,paddingTop: "1px" , 
      fontSize: "1.2em", marginLeft: "150px",
      color: `${props.ScheduleColor.IconC}`}}>
        Event Info
    </span> 
    <CloseCircleOutlined
      onClick={()=> props.closedEventForm(true)} 
      style={{marginRight: "4px", marginLeft: "180px", marginBottom: "15px",
          fontSize: "26px", color: props.ScheduleColor.IconC}} // send the color list from the parent App file 
    />
  </EachateContainer>  
  //TItle Area props.ScheduleColor.IconC
  const isTitle =<EachateContainer JustifyContentCalue={""}>
    <TitleStyle Coloring={props.ScheduleColor.IconC}>Title : </TitleStyle> 
    <ContentStyle >{props.EventClickedInfo.title}</ContentStyle> 
  </EachateContainer>
  //Description Area props.ScheduleColor.IconC
  const isDescription =<EachateContainer JustifyContentCalue={ ""}>
    <TitleStyle Coloring={props.ScheduleColor.IconC}>Description : </TitleStyle> 
    <ContentStyle >{props.EventClickedInfo.description}</ContentStyle> 
  </EachateContainer>
  //Url Area props.ScheduleColor.IconC
  const isUrl =<EachateContainer JustifyContentCalue={ ""}>
    <TitleStyle Coloring={props.ScheduleColor.IconC}>Url : </TitleStyle> 
    <ContentStyle >{ !props.EventClickedInfo.url == "" ? props.EventClickedInfo.url : "......"  }</ContentStyle> 
  </EachateContainer>
  //Start Area props.ScheduleColor.IconC
  const isStart =<EachateContainer JustifyContentCalue={ ""}>
    <TitleStyle Coloring={props.ScheduleColor.IconC}>Start : </TitleStyle> 
    {/* <ContentStyle >{props.EventClickedInfo.Start}</ContentStyle>  */}
  </EachateContainer>
  //End Area props.ScheduleColor.IconC
  const isEnd =<EachateContainer JustifyContentCalue={ ""}>
    <TitleStyle Coloring={props.ScheduleColor.IconC}>End : </TitleStyle> 
    {/* <ContentStyle >{props.EventClickedInfo.End}</ContentStyle>  */}
  </EachateContainer>
  
  // The content Area
  const Content = <DateContainer>
    {isTitle}
    {isDescription}
    {isUrl}
    {isStart}
    {isEnd}
  </DateContainer>
  
  //The edit button
  const isEditButton=<EditButton
  
  />
  const EventInfo= <NoteContainer
        position={"relative"}
        width={"480px"}
        margin={"30px auto 20px auto"}
        padding={"15px"}
        boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue={"7px"}
        resizeValue={"both"}
        backGroundColorValue={props.ScheduleColor.NotekBGC}
        FontColorValue={props.ScheduleColor.NoteFC}
      > 
        {Header}
        {Content}
        {isEditButton}
      </NoteContainer>

  return (
    <FadeIn>
      {EventInfo}
    </FadeIn>
  );
};

export default EventForm;
