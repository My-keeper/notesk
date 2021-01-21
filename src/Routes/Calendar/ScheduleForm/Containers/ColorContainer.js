import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import {BgColorsOutlined} from "@ant-design/icons"; 
import RepeatIcon from '@material-ui/icons/Repeat';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ColorSelected from './DataCollection/ColorSelected';
import RepeatDaySelected from './DataCollection/RepeatedDaysSelected';


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

const FontColorContainer = (props) => {

    const FontColor = <InfoContainer>
            <EachateContainer>
                <FadeIn><BgColorsOutlined style={{fontSize:"32px",color : props.ScheduleColor.IconC,marginRight:"9px",marginTop:"4px"}}/></FadeIn>
                <FadeIn><ColorSelected RecievedColor={props.ScheduleColor}/></FadeIn>
            </EachateContainer>
            <EachateContainer>
                <FadeIn><ColorLensIcon style={{fontSize:"32px",color : props.ScheduleColor.IconC,marginRight:"9px",marginTop:"4px"}}/></FadeIn>
                <FadeIn><ColorSelected RecievedColor={props.ScheduleColor}/></FadeIn>
            </EachateContainer>
    </InfoContainer>

    return(FontColor)
}

// const RepeatedDaysContainer = (props) => {
//     const [numberOfRepeatedDays, ChangenumberOfRepeatedDays] = useState(0) 
//     const IconColor = { 
//         color : props.ScheduleColor.IconC, 
//         fontSize:"25px", 
//         marginRight:"9px", 
//         marginTop:"4px" 
//     }
//     const RepeatedDays = <InfoContainer>
//         <FadeIn><RepeatIcon style={IconColor}/></FadeIn>
//         <FadeIn><RepeatDaySelected ValueOfRepeatedDays={(value) => ChangenumberOfRepeatedDays(value)} RecievedColor={props.ScheduleColor}/></FadeIn>
//     </InfoContainer>

//     return (RepeatedDays)
// }

export  {FontColorContainer};