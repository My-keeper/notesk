import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined , ClockCircleFilled} from "@ant-design/icons"; 
import DateSelected from './DataCollection/DateSelected';
import TimeSelected from './DataCollection/TimeSelected';

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


const CalenderContianer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [fromData, ChangeFromDate] = useState()
    const [ToData, ChangeToDate] = useState()
    const calendar = <InfoContainer>
            <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
                    <DateSelected submitDateValue={(value) => ChangeFromDate(value)} RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "24px"}}>To</span></FadeIn>
                    <DateSelected submitDateValue={(value) => ChangeToDate(value)} RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
            </DateContainer>
        </InfoContainer>

    props.SubmitFromDateSelected(fromData)
    props.SubmitToDateSelected(ToData)
    return(calendar)
}

const TimerContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [StartHoursValue, ChangeStartHourValue ]= useState()
    const [StartMinutsValue, ChangeStartMinutsValue ]= useState()
    const [StartDayValue, ChangeStartDayValue ]= useState()
    const [EndHoursValue, ChangeEndHourValue ]= useState()
    const [EndMinutsValue, ChangeEndMinutsValue ]= useState()
    const [EndDayValue, ChangeEndDayValue ]= useState()
    
    const time =<InfoContainer>
            <FadeIn><ClockCircleFilled style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>Start</span></FadeIn>
                    <TimeSelected 
                        submitHourValue={(value) => ChangeStartHourValue(value)}
                        submitMinutsValue={(value) => ChangeStartMinutsValue(value)}
                        submitDayValue={(value) => ChangeStartDayValue(value)}
                        RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>End</span></FadeIn>
                    <TimeSelected 
                        submitHourValue={(value) => ChangeEndHourValue(value)}
                        submitMinutsValue={(value) => ChangeEndMinutsValue(value)}
                        submitDayValue={(value) => ChangeEndDayValue(value)}
                        RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
            </DateContainer>
        </InfoContainer>

    props.SubmitFromHourSelected(StartHoursValue)
    props.SubmitToHourlected(EndHoursValue)
    props.SubmitFromMinutsSelected(StartMinutsValue)
    props.SubmitToMinutsSelected(EndMinutsValue)
    props.SubmitFromDayValueSelected(StartDayValue)
    props.SubmitToDayValueSelected(EndDayValue)

    return (time)
}

export  {CalenderContianer, TimerContainer};