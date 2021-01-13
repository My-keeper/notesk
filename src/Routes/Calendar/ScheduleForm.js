import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../UI/Modal';
import UserInput from '../../UI/UserInput'
import FadeIn  from 'react-fade-in';
import { CalendarOutlined , DownOutlined} from "@ant-design/icons";
import { SentimentVeryDissatisfied, Title, ImportContacts ,SentimentVerySatisfied} from '@material-ui/icons';

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
    margin-bottom: 10px;
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10px;
`

const Schedule = (props) => {
    //for the titile 
    // const [title, ChangeTitle] = useState("")

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
        marginTop:"8px",
        marginLeft:"-34px",
        position:"sticky"
    }

    const title = <InfoContainer>
            <FadeIn><Title style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            inputType={"text"}
            name="title"
            PlaceholderValue={" Title"}
            widthValue={"380px"}
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

    const tidescriptiontle = <InfoContainer>
        <FadeIn><ImportContacts style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={" Description"}
        widthValue={"380px"}
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

    const  CalenderValue = (inputvalue) => <FadeIn><UserInput 
    inputType={"text"}
    name="title"
    PlaceholderValue={inputvalue}
    widthValue={"97px"}
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
    ><DownOutlined  style={DropDownArrow}/></UserInput></FadeIn>
    
    const CalendarContainer = (value) => { 
        return value= [
            [CalenderValue(" Year") ,<DownOutlined  style={DropDownArrow}/>], 
            [CalenderValue(" Month") ,<DownOutlined  style={DropDownArrow}/>], 
            [CalenderValue(" Day") ,<DownOutlined  style={DropDownArrow}/>]
        ]}
    
    const calendar = <InfoContainer>
        <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
        <DateContainer>
            <EachateContainer>
                <span style={{ padding: "4px" , fontSize: "1.2em"}}>From</span>
                {CalendarContainer()}
            </EachateContainer>
            <EachateContainer>
                <span style={{ padding: "4px" , fontSize: "1.2em"}}>To</span>
                {CalendarContainer()}
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
                    {tidescriptiontle}
                    {calendar}
            </NoteContainer>
        </FadeIn>
    )
}

export default Schedule;