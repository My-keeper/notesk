import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../UI/Modal';
import UserInput from '../../UI/UserInput'
import FadeIn  from 'react-fade-in';
import { CalendarOutlined , ClockCircleFilled} from "@ant-design/icons";
import { Title, ImportContacts } from '@material-ui/icons';
import DateSelected from './DateSelected';
import TimeSelected from './OptionsForm';

//input for URL, description and if it is gonna happen again user

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`
const EachateContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Schedule = (props) => {

    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }

    const DropDownArrow = {
        color : props.ScheduleColor.IconC, 
        fontSize:"20px", 
        marginRight:"20px", 
        marginTop:"7px",
        marginLeft:"-35px",
        position:"sticky"
    }

    const title = <InfoContainer>
                <FadeIn><Title style={IconColor}/></FadeIn>
                <FadeIn><UserInput 
                inputType={"text"}
                name="title"
                PlaceholderValue={" Title"}
                widthValue={"402px"}
                paddingVale={"4px"}
                outlineValue={"none"}
                fontSizeValue={"1.2em"}
                fontFamilyValue={"inherit"}
                IsCalledValue={"FOCUS"} 
                borderRadiusValue= {"7px"}
                backGroundColorValue={props.ScheduleColor.UserInputBGC}
                FontColorValue={props.ScheduleColor.UserInputFC}
                PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
                borderColorValue={props.ScheduleColor.BorderColor}
                // InputValue = {RecievedTitle}
                // onchangeValue={e => ChangeRecievedTitle(e.target.value)}    
                BorderValue={"solid"}
                borderWidthValue="thin"
                marginRightValue={"10px"}
                /></FadeIn>
        </InfoContainer>

    const titleDescription = <InfoContainer>
            <FadeIn><ImportContacts style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            inputType={"text"}
            name="title"
            PlaceholderValue={" Description"}
            widthValue={"402px"}
            paddingVale={"4px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            borderRadiusValue= {"7px"}
            backGroundColorValue={props.ScheduleColor.UserInputBGC}
            FontColorValue={props.ScheduleColor.UserInputFC}
            PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
            borderColorValue={props.ScheduleColor.BorderColor}
            // InputValue = {RecievedTitle}
            // onchangeValue={e => ChangeRecievedTitle(e.target.value)}    
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /></FadeIn>
        </InfoContainer>
    
    const calendar = <InfoContainer>
            <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
                    <DateSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "24px"}}>To</span></FadeIn>
                    <DateSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
            </DateContainer>
        </InfoContainer>

    const time =<InfoContainer>
            <FadeIn><ClockCircleFilled style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>Start</span></FadeIn>
                    <TimeSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>End</span></FadeIn>
                    <TimeSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
            </DateContainer>
        </InfoContainer>
   
   return(
        <FadeIn>
            <NoteContainer
                position= {"relative"}
                width= {"480px"}
                margin= {"30px auto 20px auto"}
                padding= {"15px"}
                boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue= {"7px"}
                resizeValue={"both"}
                backGroundColorValue={props.ScheduleColor.NotekBGC}
                FontColorValue={props.ScheduleColor.NoteFC}
                >
                    {title}
                    {titleDescription} 
                    {calendar} 
                    {time}
            </NoteContainer>
        </FadeIn>
    )
}

export default Schedule;
