import React from "react";
import styled from "styled-components";
import UserInput from "../../UI/UserInput";
import FadeIn  from "react-fade-in";
import BlurDiv from "../../UI/BlurDiv";

const LoginForm = (props) => {

    const LoginContainer = <BlurDiv>
    <UserInput 
    widthValue={"50%"}
    heightValue={"500px"}
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
    marginLeftValue={"25%"}
    marginTopValue={"10%"}
    />
    </BlurDiv>

return (
    <FadeIn>
        {LoginContainer}
    </FadeIn>
)
};

export default LoginForm;