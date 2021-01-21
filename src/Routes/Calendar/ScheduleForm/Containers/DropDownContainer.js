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

    return(calendar)
}

const TimerContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }

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

    return (time)
}

export  {CalenderContianer, TimerContainer};