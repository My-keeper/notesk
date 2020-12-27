import React from "react";
import styled from "styled-components";
import Nav from "../../UI/NavBar";
import LoginForm from "./LoginForm";
import BlurDiv from "../../UI/BlurDiv";

const Login = (props) => {
  return (
    <div>
      {/* <BlurDiv blurDegree={"3px"}> */}
      <Nav ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
      <LoginForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
      {/* </BlurDiv> */}
    </div>
  );
};

export default Login;
