import React, { useState } from "react";
import styled from "styled-components";
import { UserOutlined, MailOutlined, KeyOutlined, LoginOutlined, UserAddOutlined, HomeOutlined} from "@ant-design/icons";
import UserInput from "../../UI/UserInput";
import NoteContainer from '../../UI/Modal';
import Button from "../../UI/Button";
import FadeIn  from "react-fade-in";
import { Link } from "react-router-dom";
import API from "../../API/API";
import { useHistory } from "react-router-dom";

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

    const [FirstNameValue, ChangeFirstName] = useState("")
    const FirstName = <FadeIn><UserInput 
            InputValue={FirstNameValue}
            onchangeValue={(v)=>ChangeFirstName(v.target.value)}
            inputType={"text"}
            name="title"
            PlaceholderValue={"FirstName"}
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
    
    const [LastNameValue, ChangeLastName] = useState("")
    const LastName = <FadeIn><UserInput 
            InputValue={LastNameValue}
            onchangeValue={(v)=>ChangeLastName(v.target.value)}
            inputType={"text"}
            name="title"
            PlaceholderValue={"LastName"}
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
    
    const PersonalInfo = <InfoContainer>
            <FadeIn><UserOutlined style={IconColor}/></FadeIn>
            {FirstName}
            {LastName} 
        </InfoContainer>

    const [UserNameValue, ChangeUserName] = useState("")
    const Username = <InfoContainer>
            <FadeIn><UserAddOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput
            InputValue={UserNameValue}
            onchangeValue={(v)=>ChangeUserName(v.target.value)} 
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

    const [EmailValue, ChangeEmail] = useState("")
    const Email = <InfoContainer>
            <FadeIn><MailOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            InputValue={EmailValue}
            onchangeValue={(v)=>ChangeEmail(v.target.value)} 
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
    
    const [PassWordValue, ChangePassWord] = useState("")
    const PassWord = <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            InputValue={PassWordValue}
            onchangeValue={(v)=>ChangePassWord(v.target.value)} 
            inputType={"Password"}
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

    const [ConfirmPasswordValue, ChangeConfirmPassword] = useState("")
    const ConfirmPassWord = <InfoContainer>
            <FadeIn><KeyOutlined style={IconColor}/></FadeIn>
            <FadeIn><UserInput 
            InputValue={ConfirmPasswordValue}
            onchangeValue={(v)=>ChangeConfirmPassword(v.target.value)} 
            inputType={"Password"}
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

    const [CountryValue, ChangeCountry] = useState("")
    const Country =<FadeIn><UserInput 
        InputValue={CountryValue}
        onchangeValue={(v)=>ChangeCountry(v.target.value)} 
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

    const [ProvinceValue, ChangeProvince] = useState("")
    const Province = <FadeIn><UserInput 
        InputValue={ProvinceValue}
        onchangeValue={(v)=>ChangeProvince(v.target.value)} 
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

    const [CityValue, ChangeCity] = useState("")
    const City = <FadeIn><UserInput 
        InputValue={CityValue}
        onchangeValue={(v)=>ChangeCity(v.target.value)} 
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

    const [ZipCodeValue, ChangeZipCode] = useState("")
    const ZipCode = <FadeIn><UserInput 
        InputValue={ZipCodeValue}
        onchangeValue={(v)=>ChangeZipCode(v.target.value)} 
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

let history = useHistory()
const SignUp = () => {
    API.singUp(
        FirstNameValue,
        LastNameValue,
        EmailValue,
        PassWordValue,
        history.push("/")
    )
}

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
        onClick={SignUp}
        />
    </FadeIn>

const ReturnToLogin =<FadeIn>
        <span style={{color: props.RecieveColor.UserInputFC , fontSize: "1.2em" }}>
            Already have an acount? 
            <Link to={"/login"} style={{color : props.RecieveColor.IconC }}> Login</Link>
        </span>
    </FadeIn>

return (
  <FadeIn>
    <NoteContainer
      position={"relative"}
      width={"470px"}
      margin={"220px auto 20px auto"}
      padding={"15px"}
      boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
      borderRadiusValue={"20px"}
      resizeValue={"both"}
      backGroundColorValue={props.RecieveColor.NotekBGC}
    >
      {PersonalInfo}
      {Username}
      {Email}
      {PassWord}
      {ConfirmPassWord}
      {Location}
      {SignupButton}
      <hr style={{marginBottom : "10px"}}></hr>
      {ReturnToLogin}
    </NoteContainer>
  </FadeIn>
);
};

export default SignupForm; 