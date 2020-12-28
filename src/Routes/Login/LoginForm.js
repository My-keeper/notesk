import React from "react";
import styled from "styled-components";
import { MailOutlined, KeyOutlined} from "@ant-design/icons";
import UserInput from "../../UI/UserInput";
import NoteContainer from '../../UI/Modal';
import FadeIn  from "react-fade-in";

const InfoContainer = styled.div`
    width: 455px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
    margin-bottom: 10px;
    `

const LoginForm = (props) => {
    const IconColor = { color : props.RecieveColor.IconC, fontSize:"25px", marginRight:"9px", marginTop:"4px" }
    const LoginContainer = 
    <NoteContainer
        position= {"relative"}
        width= {"40%"}
        margin= {"30px auto 20px auto"}
        padding= {"15px"}
        boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue= {"7px"}
        resizeValue={"both"}
        backGroundColorValue={props.RecieveColor.NotekBGC}
    >
    <InfoContainer>
        <MailOutlined style={IconColor}/>
        <UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={"E-mail"}
        widthValue={"460px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.RecieveColor.UserInputBGC}
        FontColorValue={props.RecieveColor.UserInputFC}
        PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
        borderColorValue={props.RecieveColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        />
    </InfoContainer>
    <InfoContainer>
        <KeyOutlined style={IconColor}/>
        <UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={"Password"}
        widthValue={"460px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.RecieveColor.UserInputBGC}
        FontColorValue={props.RecieveColor.UserInputFC}
        PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
        borderColorValue={props.RecieveColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        />
    </InfoContainer>
    </NoteContainer>
    
return (
    <FadeIn>
        {LoginContainer}
    </FadeIn>
)
};

export default LoginForm;