import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal";
import FadeIn from "react-fade-in";
import {TitleContainer,DescriptionContainer,URLContainer} from "./Containers/InputContainer";
import {CalenderContianer,TimerContainer} from "./Containers/DropDownContainer";
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

    //Closed Button
    const [isClode, ChangeIsClosed] = useState(true);
    const CloseIcon = isClode 
        ? 
        (<CloseOutlined
            onMouseEnter={() => ChangeIsClosed(false)}
            style={{marginRight: "4px", marginLeft: "95%", marginBottom: "15px",
                fontSize: "21px", color: props.ScheduleColor.IconC}}
        />)
        : 
        (<CloseCircleOutlined
            onClick={() => props.CallingCalendar(false)}
            onMouseLeave={() => ChangeIsClosed(true)}
            style={{marginRight: "4px", marginLeft: "95%", marginBottom: "15px",
                fontSize: "26px", color: props.ScheduleColor.IconC}}
        />);

    //Title Area
    const [getTitle, ChangeTitle] = useState("");
    const [TitlePH, ChangeTitlePH] = useState("Title ...");
    const Title = <TitleContainer
            SubmitTitle={(value) => ChangeTitle(value)}
            SubmitTitlePlaceHolder={TitlePH}
            ScheduleColor={props.ScheduleColor}
        />  
  
    //Submit Buton 
    const Submit = (
        <SubmitButton 
            isCallingCalendar={value=> props.CallingCalendar(value)}
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
                backGroundColorValue={props.ScheduleColor.NotekBGC}
                FontColorValue={props.ScheduleColor.NoteFC}
                >
            {CloseIcon}
            {Title} 
            {Submit}
            </NoteContainer> 
        </FadeIn>
    );

  return ScheduleForm;
};

export default Schedule;
