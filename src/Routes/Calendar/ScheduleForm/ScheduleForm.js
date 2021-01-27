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
    //Clicked Date in the calender
    const [getClickedDate, ChangeClickedDate] = useState(props.SelectedDateClicked)
    //Id for each Event
    const [IdCounter, ChnageIdCounter] = useState([])
    //Title Area
    const [getTitleValue, ChangeTitleValu] = useState()
    const [TitlePlaceHoldervalue,ChangeTitlePlaceHolder] = useState("Title")
    //TitleDescription Area
    const [getTitleDescriptionValue, ChangeTitleDescriptionValu] = useState()
    const [TitleDescriptionPlaceHoldervalue,ChangeTitleDescriptionPlaceHolder] = useState("Title Description")
    //URL Area
    const [getURLValue, ChangegetURLValue] = useState()
    const [URLPlaceHolder,ChangeURLPlaceHolder] = useState("Optional Attached Link For Description")
    //Date Value Area From
    const [getFormDateValue, ChangeFormDateValue] = useState()
    //Date Value Area To
    const [getToDateValue, ChangeToDateValue] = useState()
    //Time Values Area Started
    const [GetStartHoursValue, ChangeGetStartHourValue ]= useState()
    const [GetStartMinutsValue, ChangeGetStartMinutsValue ]= useState()
    const [GetStartDayValue, ChangeGetStartDayValue ]= useState()
    //Time Values Area Ended
    const [GetEndHoursValue, ChangeGetEndHourValue ]= useState()
    const [GetEndMinutsValue, ChangeGetEndMinutsValue ]= useState()
    const [GetEndDayValue, ChangeGetEndDayValue ]= useState()
    //Values of Repeated Days
    const [getRDValue, ChangeRDValu] = useState()
    //The collection of Data to create the Event
    const [CreateEvent, ChnageEventInfo]=useState(
        {
            id: `$ChnageIdCounter(prevCount => prevCount + 1)`,  
            title: 'Testoing for more ', 
            start: '2021-01-30T12:30:00Z',
            textColor:"pink", 
            end: '2021-02-02T13:30:00Z',
            description: 'lets play some game s', 
            display: 'list-item', 
            backgroundColor:"black",
            daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
            startTime: '10:45:00',
            endTime: '12:45:00',
            display: 'list-item',
            textColor: 'black'
        }
    )

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
                {<TitleContainer 
                    SubmitTitle={(value) => ChangeTitleValu(value)}
                    SubmitTitlePlaceHolder={TitlePlaceHoldervalue}
                    ScheduleColor={props.ScheduleColor}/>}
                {<TitleDescriptionContainer 
                    TitleDescription={(value) => ChangeTitleDescriptionValu(value)}
                    SubmitTitleDescriptionPlaceHolder={TitleDescriptionPlaceHoldervalue}
                    ScheduleColor={props.ScheduleColor}/>}
                {<URLContainer 
                    URLOption={(value) => ChangegetURLValue(value)}
                    SubmitURLPlaceHolder={URLPlaceHolder}
                    ScheduleColor={props.ScheduleColor}/>}
                {<CalenderContianer 
                    SubmitFromDateSelected={(value) => ChangeFormDateValue(value)} 
                    SubmitToDateSelected={(value) => ChangeToDateValue(value)} 
                    RetrunClickedDate={getClickedDate}
                    ScheduleColor={props.ScheduleColor}/>}
                {<TimerContainer
                    SubmitFromHourSelected={(value) => ChangeGetStartHourValue(value)}
                    SubmitToHourlected={(value) => ChangeGetEndHourValue(value)}
                    SubmitFromMinutsSelected={(value) => ChangeGetStartMinutsValue(value)}
                    SubmitToMinutsSelected={(value) => ChangeGetEndMinutsValue(value)}
                    SubmitFromDayValueSelected={(value) => ChangeGetStartDayValue(value)}
                    SubmitToDayValueSelected={(value) => ChangeGetEndDayValue(value)} 
                    ScheduleColor={props.ScheduleColor}/>}
                {<RDContainer 
                    SubmitNumberOfRP={(value) => ChangeRDValu(value)} 
                    ScheduleColor={props.ScheduleColor}/>} 
                {<SubmissionContainer ScheduleColor={props.ScheduleColor}/>}
        </NoteContainer>
    </FadeIn>
    )
}

export default Schedule;
