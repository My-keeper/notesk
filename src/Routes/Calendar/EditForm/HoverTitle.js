import React from "react";
import HoverContainer from "../../../UI/Modal";
import FadeIn  from 'react-fade-in';
import styled from "styled-components";

const EachateContainer = styled.div`
    width: 460px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`
const TitleStyle = styled.span`
  padding: 4px ;
  fontSize: 1.2em;
  margin-right: 8px;
  color: ${props => props.Coloring};
`

const HoverForm = (props) => { 
    const Title = <FadeIn>
            <EachateContainer JustifyContentCalue={""}>
            <TitleStyle style={{marginLeft: "4px"}}Coloring={props.ScheduleColor.IconC}>Title : </TitleStyle> 
                <div style={{
                    width: "400px",
                    fontSize: "1.2em", 
                    wordWrap: "break-word",
                    padding: "5px",
                    height: "30px",
                    borderRadius: "7px",
                    border:"solid",
                    marginLeftValue:"4px",
                    borderWidth:"thin",
                    color: `${props.ScheduleColor.TextAreaFC}`,
                    backgroundColor: `${props.ScheduleColor.TextAreaBGC}`,
                    borderColor:  `${props.ScheduleColor.BorderColor}`,
                }}>
                    <FadeIn>{ props.isTitle}</FadeIn>
                </div>
            </EachateContainer>
        </FadeIn>
        
    const Time = <FadeIn>
            <EachateContainer JustifyContentCalue={""}>
            <TitleStyle Coloring={props.ScheduleColor.IconC}>Start : </TitleStyle> 
                <div style={{
                    width: "400px",
                    fontSize: "1.2em", 
                    wordWrap: "break-word",
                    padding: "5px",
                    height: "30px",
                    borderRadius: "7px",
                    border:"solid",
                    borderWidth:"thin",
                    color: `${props.ScheduleColor.TextAreaFC}`,
                    backgroundColor: `${props.ScheduleColor.TextAreaBGC}`,
                    borderColor:  `${props.ScheduleColor.BorderColor}`,
                }}>
                    <FadeIn>{ props.isStart}</FadeIn>
                </div>
            </EachateContainer>
        </FadeIn>

    const HoverTitleInfo = <HoverContainer
        position={"relative"}
        width={"500px"} 
        padding={"7px"}
        boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue={"30px"}
        resizeValue={"both"}
        backGroundColorValue={props.ScheduleColor.NotekBGC}
        FontColorValue={props.ScheduleColor.NoteFC}
    >
        {Title}
        {Time}
    </HoverContainer>

    return <FadeIn>{HoverTitleInfo}</FadeIn>
}

export default HoverForm;