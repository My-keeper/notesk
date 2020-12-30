import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../UI/Modal';
import UserInput from '../../UI/UserInput'
import FadeIn  from 'react-fade-in';
import { MailOutlined } from "@ant-design/icons";

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const Schedule = (props) => {
    //for the titile 
    const [title, ChangeTitle] = useState("")

    const IconColor = { 
        // color : props.RecieveColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" }

    const Email = <InfoContainer>
        asd
            <FadeIn><MailOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            inputType={"text"}
            name="title"
            PlaceholderValue={"E-mail"}
            widthValue={"380px"}
            paddingVale={"4px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            // borderRadiusValue= {"7px"}
            // backGroundColorValue={props.RecieveColor.UserInputBGC}
            // FontColorValue={props.RecieveColor.UserInputFC}
            // PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
            // borderColorValue={props.RecieveColor.BorderColor}
            // InputValue = {RecievedTitle}
            // onchangeValue={e => ChangeRecievedTitle(e.target.value)}    
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /></FadeIn>
        </InfoContainer>
    
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
                    {Email}
            </NoteContainer>
        </FadeIn>
    )
}

export default Schedule;