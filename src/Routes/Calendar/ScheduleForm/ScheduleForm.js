import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../../UI/Modal'; 
import FadeIn  from 'react-fade-in'; 
import {TitleContainer, TitleDescriptionContainer, URLContainer} from './Containers/InputContainer';
import {CalenderContianer, TimerContainer} from './Containers/DropDownContainer';
import {FontColorContainer} from './Containers/ColorContainer';
import {SubmissionContainer} from './Containers/submitButtonContainer'; 
import {RDContainer} from './Containers/DaysContainer';

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const Schedule = (props) => {
    
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
                {<TitleContainer ScheduleColor={props.ScheduleColor}/>}
                {<TitleDescriptionContainer ScheduleColor={props.ScheduleColor}/>}
                {<URLContainer ScheduleColor={props.ScheduleColor}/>}
                {<CalenderContianer ScheduleColor={props.ScheduleColor}/>}
                {<TimerContainer ScheduleColor={props.ScheduleColor}/>}
                {<FontColorContainer ScheduleColor={props.ScheduleColor}/>}
                {<RDContainer ScheduleColor={props.ScheduleColor}/>} 
                {<SubmissionContainer ScheduleColor={props.ScheduleColor}/>}
        </NoteContainer>
    </FadeIn>
    )
}

export default Schedule;
