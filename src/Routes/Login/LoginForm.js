import React from "react";
import styled from "styled-components";
import { MailOutlined, KeyOutlined, LoginOutlined} from "@ant-design/icons";
import UserInput from "../../UI/UserInput";
import NoteContainer from '../../UI/Modal';
import Button from "../../UI/Button";
import FadeIn  from "react-fade-in";


const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
    `

const LoginForm = (props) => {
    const IconColor = { 
        color : props.RecieveColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" }
    const ButtonIconColor = { 
        color : props.RecieveColor.IconC, 
        fontSize:"20px", 
        marginRight:"9px", 
        marginTop:"4px" }
    const LoginContainer = 
    <FadeIn><NoteContainer
    position= {"relative"}
    width= {"450px"}
    margin= {"300px auto 20px auto"}
    padding= {"15px"}
    boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
    borderRadiusValue= {"20px"}
    resizeValue={"both"}
    backGroundColorValue={props.RecieveColor.NotekBGC}
    >
        <InfoContainer>
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
            borderRadiusValue= {"7px"}
            backGroundColorValue={props.RecieveColor.UserInputBGC}
            FontColorValue={props.RecieveColor.UserInputFC}
            PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
            borderColorValue={props.RecieveColor.BorderColor}
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /></FadeIn>
        </InfoContainer>
        <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            inputType={"text"}
            name="title"
            PlaceholderValue={"Password"}
            widthValue={"380px"}
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
            /></FadeIn>
        </InfoContainer>
        <Button
            width={"120px"}
            marginBottomValue={"10px"}
            marginLeftValue={"35%"}
            fontSizeValue={"20px"}
            borderRadiusValue={"15px"}
            borderColorValue={props.RecieveColor.BorderColor}
            borderWidthValue="thin"
            text = {"Login"} 
            icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
    </NoteContainer></FadeIn>
    
return (
    <FadeIn>{LoginContainer}</FadeIn>
)
};

export default LoginForm;