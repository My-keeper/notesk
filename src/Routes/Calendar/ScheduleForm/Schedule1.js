import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal";
import FadeIn from "react-fade-in";
import {TitleContainer,DescriptionContainer,URLContainer} from "./Containers/InputContainer";
import {CalenderContianer,TimerContainer} from "./Containers/DropDownContainer";
import RDContainer from "./Containers/DaysContainer";
import SubmitButton from "./Containers/SubmitButton1";
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";
const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0'
    background-color: rgba(0,0,0, 0.5)
`;

const Schedule = (props) => {
    
    //Close ICion Area
    const CloseIcon = 
    (<CloseCircleOutlined
        onClick={()=> props.CallingCalendar(false)} 
        style={{marginRight: "4px", marginLeft: "95%", marginBottom: "15px",
            fontSize: "26px", color: props.ScheduleColor.IconC}} // send the color list from the parent App file 
    />)

    //Title Area
    const [getTitle, ChangeTitle] = useState("");
    const [TitlePH, ChangeTitlePH] = useState("Title ...");
    const Title = <TitleContainer
            SubmitTitle={(value) => ChangeTitle(value)} //this is to return input value of the title and then send it to submit model
            SubmitTitlePlaceHolder={TitlePH} //this is to send the placeholder for the title area
            ScheduleColor={props.ScheduleColor}  // send the color list from the parent App file 
        />  
    
    //Description Area
    const [getDescription, ChangeDescription] = useState("");
    const [DescriptionPH, ChangeDescriptionPH] = useState("Description ...");
    const Description = (
        <DescriptionContainer
        SubmitDescription={(value) => ChangeDescription(value)}
        SubmitDescriptionPlaceHolder={DescriptionPH}
        ScheduleColor={props.ScheduleColor}
        />
    );

    //URL Area
    const [getURL, ChangeURL] = useState();
    const [URLPH, ChangeURLPH] = useState("Optional Attached Link For Description ...");
    const URL = (
        <URLContainer
        URLOption={(value) => ChangeURL(value)}
        SubmitURLPH={URLPH}
        ScheduleColor={props.ScheduleColor}
        />
    );
    
    // Data From and To
    const [getFormDate, ChangeFormDate] = useState(); //this is the data that will be send to submit model to be added to the event list 
    console.log(getFormDate)
    const [getToDate, ChangeToDate] = useState();  //this is the data that will be send to submit model to be added to the event list 
    const StartDate= props.SendSelectedSD //This is the selected data in calendar
    const EndDate= props.SendSelectedED//This is the selected data in calendar  
    const Data = (
        <CalenderContianer
        SendSD={StartDate} //This is to send back the selected started data
        SendED={EndDate} //This is to send back the selected ended data
        GetFromDate={(value) => ChangeFormDate(value)} //Returning the selected data that the user chose 
        GetToDate={(value) => ChangeToDate(value)} //Returning the selected data that the user chose 
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        />
    );

    //This is for the time
    const [StartHours, ChangeStartHour] = useState(); //have returned starting hour if time is needed
    const [StartMinuts, ChangeStartMinuts] = useState(); //have returned starting minut if time is needed
    const [EndHours, ChangeEndHour] = useState();  //have returned ending hour if time is needed
    const [EndMinuts, ChangeEndMinuts] = useState(); //have returned ending minut if time is needed 
    const [TimeClicked, ChangeTimeClicked] = useState() //this to make sure that time is included or not 
    const Time = (
        <TimerContainer
        FromHourSelected={(value) => ChangeStartHour(value)} // return starting hour if time is needed
        FromMinutsSelected={(value) => ChangeStartMinuts(value)} // return starting minut if time is needed
        ToHourlected={(value) => ChangeEndHour(value)} // return ending hour if time is needed
        ToMinutsSelected={(value) => ChangeEndMinuts(value)} // return ending minut if time is needed 
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        isTime={(value) => ChangeTimeClicked(value)}
        />
    );

    //this is for number of rebeated days 
    const [GetRepeatedDays, ChangeRepeatedDays] = useState()
    const RepeatedDays =(<RDContainer
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        SubmitNumberOfRP={(value) => ChangeRepeatedDays(value)} //returning the value of repeated days 
        />
    );
    //Submit Buton 
    const Submit = (
        <SubmitButton 
            isCallingCalendar={value=> props.CallingCalendar(value)} //return the close value to return to calender from the submit model 
            isTitle={getTitle} //the Title value 
            CheckTitlePH={value => ChangeTitlePH(value)} //this is to change the title place holder if there is no title 
            isDescription={getDescription} //the Description value
            CheckDescriptionPH={value => ChangeDescriptionPH(value)} //this is to change the description placeholder if there is no placeholder
            isURL={getURL} //the URL value
            isStartingDate={TimeClicked ? (getFormDate+'T12:00:00') : (getFormDate+"T"+StartHours+":"+StartMinuts+"00")} //the value of the Starting data
            isEndingData={getToDate } //the value of Ending data
            isRepeatedDays={GetRepeatedDays} //Values of Repeated Days
            isEvent={props.submitEventValues}
        />
    );
    const ScheduleForm = (
        <FadeIn>
            <NoteContainer
                position={"relative"}
                width={"520px"}
                margin={"30px auto 20px auto"}
                padding={"15px"}
                boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue={"7px"}
                resizeValue={"both"}
                backGroundColorValue={props.ScheduleColor.NotekBGC} //// send the color list from the parent App file 
                FontColorValue={props.ScheduleColor.NoteFC} //// send the color list from the parent App file 
                >
            {CloseIcon}
            {Title} 
            {Description}
            {URL}
            {Data}
            {Time}
            {RepeatedDays}
            {Submit}
            </NoteContainer> 
        </FadeIn>
    );

  return ScheduleForm;
};

export default Schedule;
