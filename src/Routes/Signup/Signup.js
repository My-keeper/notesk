import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../UI/NavBar";
import SignupForm from "./SignupForm"; 
import Imag from "../../UI/Imag"; 
import API from "../../API/API";
 
const Signup = (props) => {
  let history = useHistory()
  useEffect( async () => {
    const isLoggedIn = await API.isLoggedIn();
    if (isLoggedIn) {
      history.push("/");
    }
  },{}) 
  return (
    <div style={{ height: "800px", overflowY : "auto" }}>
      <Nav ColorChanged={props.colorchanged} 
        RecieveColor={props.Color} 
        showLoginButton={true}
        showSignUpButton={false}
        showLogOutButton={false}
        CallingPage={"Signin"}
        username={null}
      />
      <Imag/>  
      <SignupForm ColorChanged={props.colorchanged} RecieveColor={props.Color}/>
    </div>
  );
};

export default Signup;
