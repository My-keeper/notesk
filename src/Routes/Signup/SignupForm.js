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
    /***********************************************************/    
    //Input Value
    const [FirstNameValue, ChangeFirstName] = useState("")
    const [LastNameValue, ChangeLastName] = useState("")
    const [UserNameValue, ChangeUserName] = useState("")
    const [EmailValue, ChangeEmail] = useState("")
    const [PassWordValue, ChangePassWord] = useState("")
    const [ConfirmPasswordValue, ChangeConfirmPassword] = useState("")
    const [CountryValue, ChangeCountry] = useState("")
    const [ProvinceValue, ChangeProvince] = useState("")
    const [CityValue, ChangeCity] = useState("")
    const [ZipCodeValue, ChangeZipCode] = useState("")

    /***********************************************************/    
    //For Validating
    const[usernameValid, ChangeusernameValid] = useState(false)
    const[emailValid, ChangeemailValid] = useState(false)
    const[passwordLen, ChangepasswordLen] = useState(false)
    const[passwordLetter, ChangepasswordLetter] = useState(false)
    const[passwordNumber, ChangepasswordNumber] = useState(false)
    const[passwordSpecial, ChangepasswordSpecial] = useState(false)
    const[confirmPasswordMatched, ChangeconfirmPasswordMatched] = useState(false)
    const[signUpValid,ChangesignUpValid] = useState(false)


    /***********************************************************/  
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
            ()=> history.push("/"),
            (err) => {
                if (err) {
                    
                }
            }
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