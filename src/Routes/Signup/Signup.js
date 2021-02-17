import React from "react";
import styled from "styled-components";
import Nav from "../../UI/NavBar";
import SignupForm from "./SignupForm";
import BlurDiv from "../../UI/BlurDiv";

const Signup = (props) => {
  return (
    <div>
      <BlurDiv blurDegree={"1.4px"}/>
      <Nav ColorChanged={props.colorchanged} RecieveColor={props.Color} CallingPage={"Signin"}/>
      <SignupForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Signup;
