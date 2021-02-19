import React from "react";
import Nav from "../../UI/NavBar";
import LoginForm from "./LoginForm";
import Imag from "../../UI/Imag"; 

const Login = (props) => {
  return (
    <div>
      <Nav ColorChanged={props.colorchanged} RecieveColor={props.Color} CallingPage={"Signup"}/>
      <Imag/>  
      <LoginForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Login;
