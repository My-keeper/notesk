import React from "react";
import styled from "styled-components";
import Nav from "../../UI/NavBar";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div>
      <Nav ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
      <LoginForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Login;
