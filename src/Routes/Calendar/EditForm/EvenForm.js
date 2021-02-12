import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal";
import FadeIn from "react-fade-in";
// import { SubmissionContainer } from "../ScheduleForm/Containers/SubmitButton1" ;
const InfoContainer = styled.div`
  width: 440px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 4px;
  margin-bottom: 10px;
`;

const Schedule = (props) => {
  return (
    <FadeIn>
      <NoteContainer
        position={"relative"}
        width={"480px"}
        margin={"30px auto 20px auto"}
        padding={"15px"}
        boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue={"7px"}
        resizeValue={"both"}
        // backGroundColorValue={props.ScheduleColor.NotekBGC}
        // FontColorValue={props.ScheduleColor.NoteFC}
      >
        {/* {<SubmissionContainer ScheduleColor={props.ScheduleColor} />} */}
      </NoteContainer>
    </FadeIn>
  );
};

export default Schedule;
