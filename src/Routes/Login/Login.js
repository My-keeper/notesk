import React from "react";
import styled from "styled-components";
import Nav from "../../UI/NavBar";
import LoginForm from "./LoginForm";
import BlurDiv from "../../UI/BlurDiv";

const Login = (props) => {
  return (
    <div>
      <BlurDiv blurDegree={"1.4px"}/>
      <Nav ColorChanged={props.colorchanged} RecieveColor={props.Color} CallingPage={"Signup"}/>
      <LoginForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Login;
