import React from "react";
import Nav from "../../UI/NavBar";
import SignupForm from "./SignupForm"; 
import Imag from "../../UI/Imag"; 
 
const Signup = (props) => {
  return (
    <div>
      <Nav ColorChanged={props.colorchanged} RecieveColor={props.Color} CallingPage={"Signin"}/>
      <Imag/>  
      <SignupForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Signup;
