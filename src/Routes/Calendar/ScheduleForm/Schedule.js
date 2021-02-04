import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../../UI/Modal'; 
import FadeIn  from 'react-fade-in'; 
import {SubmissionContainer} from './Containers/submitButtonContainer'; 
import SubmitButton from './Containers/SubmitButton'
import { createEventId } from '../event-utils';
import { CloseOutlined, CloseCircleOutlined} from "@ant-design/icons";

const Schedule = (props) => {
    //Close is not hovered on color style 
    const VisibilityStle1 = {
        marginRight: "4px", 
        marginLeft:"95%",
        marginBottom:"15px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }
    //Close is hovered on color style 
    const VisibilityStle2 = {
        marginRight: "4px", 
        marginLeft:"95%",
        marginBottom:"15px" , 
        fontSize: "26px", 
        color : props.ScheduleColor.IconC
    }
    const [CreateEvent, ChanageEventInfo] = useState(
        {
            id: createEventId(),
            title: "mero",
            description: "well it work"
        }
        )
    const [isClode, ChangeIsClosed] = useState(true)
    const [getSubmitClicked, ChangeSubmitClicked] = useState()
    console.log("va " + getSubmitClicked)
    props.SubmitIsClicked(getSubmitClicked)
    // const [isGo, ChangeisGoValue] = useState()
    // props.SendisGo(isGo)
    if (getSubmitClicked === false) {
        props.SendisGo("GO")
        props.getEventValue(CreateEvent)
        console.log("work.....")
         
    }
    const ScheduleForm = <FadeIn> <NoteContainer
        position= {"relative"}
        width= {"520px"}
        margin= {"30px auto 20px auto"}
        padding= {"15px"}
        boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue= {"7px"}
        resizeValue={"both"}
        backGroundColorValue={props.ScheduleColor.NotekBGC}
        FontColorValue={props.ScheduleColor.NoteFC}
        >
            {isClode ? 
                <CloseOutlined onMouseEnter={() =>ChangeIsClosed(false)} style={VisibilityStle1}/> 
            : 
                <CloseCircleOutlined onClick={()=> props.CloseIsCliced(false)} onMouseLeave={() =>ChangeIsClosed(true)} style={VisibilityStle2}/>
            }
            {<SubmitButton 
                SubmitisClicked={(value)=>ChangeSubmitClicked(value)} 
                // SendTheData={value=>ChangeIsData(value)}
                // SendEvemt={(value) =>(ChangeEventInfo(value), console.log("ww" +value)) }
                />} 
    </NoteContainer>  </FadeIn>




    return( ScheduleForm )

}

export default Schedule;

