import React from "react";
import styled from "styled-components";
import { MailOutlined, KeyOutlined, LoginOutlined, UserAddOutlined, HomeOutlined} from "@ant-design/icons";
import UserInput from "../../UI/UserInput";
import NoteContainer from '../../UI/Modal';
import Button from "../../UI/Button";
import FadeIn  from "react-fade-in";


const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const SignupForm = (props) => {
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
    
    const Username = <InfoContainer>
            <FadeIn><UserAddOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            inputType={"text"}
            name="title"
            PlaceholderValue={"UserNamr"}
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
    
    const Email = <InfoContainer>
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
    
    const PassWord = <InfoContainer>
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

    const ConfirmPassWord = <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            inputType={"text"}
            name="title"
            PlaceholderValue={"Confirm PassWord"}
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

const Country =<FadeIn><UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={"Country"}
        widthValue={"184px"}
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

const Province = <FadeIn><UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={"Province"}
        widthValue={"184px"}
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

const City = <FadeIn><UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={"City"}
        widthValue={"184px"}
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
        marginTopValue={"10px"}
        marginLeftValue={"34px"}
    /></FadeIn>

const ZipCode = <FadeIn><UserInput 
        inputType={"text"}
        name="title"
        PlaceholderValue={"ZipCode"}
        widthValue={"184px"}
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
        marginTopValue={"10px"}
        marginRightValue={"10px"}
    /></FadeIn>

const Location = <InfoContainer>
        <FadeIn><HomeOutlined style={IconColor}/></FadeIn>
        {Country}
        {Province}
        {City}
        {ZipCode}
    </InfoContainer>

const SignupButton = <FadeIn>
        <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginTopValue={"5px"}
        marginLeftValue={"40%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        backGroundColorValue={props.RecieveColor.LogSignColor}
        FontColorValue={props.RecieveColor.IconC}
        borderColorValue={props.RecieveColor.BorderColor}
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="3px"
        text = {"SignUp"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
    </FadeIn>

return (
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
        {Username}
        {Email}
        {PassWord}
        {ConfirmPassWord}
        {Location}
        {SignupButton}
    </NoteContainer></FadeIn>
)
};

export default SignupForm; 