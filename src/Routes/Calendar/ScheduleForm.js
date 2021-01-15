import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../UI/Modal';
import UserInput from '../../UI/UserInput'
import FadeIn  from 'react-fade-in';
import { CalendarOutlined , DownOutlined} from "@ant-design/icons";
import { SentimentVeryDissatisfied, Title, ImportContacts ,SentimentVerySatisfied} from '@material-ui/icons';
import SelectData from '../../UI/Select';

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
    width: 390px;
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

    
    //this is for the years from this year 
    const years = ["year","2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"]
    const YearContainer = (ReturnedValue) =>{
        return ReturnedValue = [years.map((year, index) => {
            return <option key={`year${index}`} value={"year"}>{year}</option>
        })]
    }

    //this is for the months in a year 
    const NumberOfMonths = ['Months','1','2','3','4','5','6','7','8','9','10','11','12']
    const MonthContainer = (ReturnedValue) =>{
        return ReturnedValue = [NumberOfMonths.map((month, index) => <option key={`month${index}`} value={month}>{month}</option>)]
    }

    //this is for the days in a Month 
    const NumberOfDays = ['Days','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    const DayContainer = (ReturnedValue) =>{
        return ReturnedValue = [NumberOfDays.map((day, index) => <option key={`day${index}`} value={day}>{day}</option>)]
    }

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

    const titleDescription = <InfoContainer>
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
    
    const  YearValue =<SelectData 
        inputType={"text"}
        name="title"
        // PlaceholderValue={PlaceHolderValue}
        widthValue={"105px"}
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
        marginRightValue={"15px"}
    >
        {YearContainer()}
    </SelectData>

    const  MonthValue =<SelectData 
        inputType={"text"}
        name="title"
        // PlaceholderValue={PlaceHolderValue}
        widthValue={"105px"}
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
        marginRightValue={"15px"}
    >
        {MonthContainer()}
    </SelectData>
    
    const  DayValue =<SelectData 
        inputType={"text"}
        name="title"
        // PlaceholderValue={PlaceHolderValue}
        widthValue={"105px"}
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
        marginRightValue={"15px"}
    >
        {DayContainer()}
    </SelectData>
    
    const CalendarContainer = (value) => { return value= [ YearValue, MonthValue , DayValue ]}

    const calendar = <InfoContainer>
        <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
        <DateContainer>
            <EachateContainer>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
                {CalendarContainer()}
            </EachateContainer>
            <EachateContainer>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "24px"}}>To</span></FadeIn>
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
                    {titleDescription}
                    {calendar}
            </NoteContainer>
        </FadeIn>
    )
}

export default Schedule;