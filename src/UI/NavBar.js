import React, {useState} from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'
import FadeIn from 'react-fade-in';
import UserIcon from "./UserIcon";
import {
  LoginOutlined,
  LogoutOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import NotesIcon from '@material-ui/icons/Notes';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import { Link } from "react-router-dom";
import LogoNotask from "../UI/logo"

const StyledNavBar = styled(FadeIn)` 
    align-items: center; 
    justify-content: space-between;
    height: 50px;
    background-color: #f5ba13;
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    display: flex;
`; 
const DisplayedUsername = styled.span`
  align-items: center;
  transform: translate(0, 30%);
  color: ${(props) => ( props.TextColorInput ? props.TextColorInput : "")};
  margin-top: 1px;
`;
const RightNavBarItems = styled.div`
  margin-right: 4px;
  display: flex;
  width: 500px;
  justify-content: flex-end;
`;
const LeftNavBarItems = styled.div`
  display: flex;
  width: 50px;
  height:50px;
  justify-content: flex-start;
`;

const NavBar = (props) => {
  const IconStyle = {
    marginLeft: "5px",
    fontSize: "28px" ,
    color: props.RecieveColor.NavIconColor
  }
  //Close is not hovered on color style
  const VisibilityStle1 = {
    marginTop: "10px",
    marginRight: "8px",
    fontSize: "28px",
    color: props.RecieveColor.NavIconColor
 };
  //Close is hovered on color style
  const VisibilityStle2 = {
      marginTop: "10px",
      marginRight: "4px",
      fontSize: "34px",
      color: props.RecieveColor.NavIconColor
  }; 
  const LogoutIconStyle = {
      marginTop: "15px",
      marginLeft: "8px",
      fontSize: "18px",
      color: props.RecieveColor.NavIconColor
  };  
  const userNameDisplay = localStorage.getItem("guest")
    ? "Welcome Guest User"
    : props.username; 
  let usernameAndAvatar = props.username ? (
    <div style={{ display: "flex", minWidth: "fit-content" }}>
      <UserIcon
        // username={"Amr R. Mohamed"}
        username={props.username}
        OnChangedColor={props.RecieveColor}
      />
      <DisplayedUsername TextColorInput={props.RecieveColor.UserIconTextColor}>
        <span style={{ fontWeight: "bold" }}>{"Amr R. Mohamed"}</span>
      </DisplayedUsername>
      {props.showLogOutButton ? (!props.ShowLogOutButtonValue ? (
        <DownCircleOutlined
          onClick={() => props.isShowLogOutButton(true)}
          style={LogoutIconStyle}
        />
      ) : (
        <UpCircleOutlined
          onClick={() => props.isShowLogOutButton(false)}
          style={LogoutIconStyle}
        />
      )
      ): null}
      {/* <DisplayedUsername>{userNameDisplay}</DisplayedUsername> */}
    </div>
  ) : null;
  let buttonsList = [];
  if (props.showLoginButton)
    buttonsList.push({
      text: "Login",
      linkTo: "/login",
    });
  if (props.showSignUpButton)
    buttonsList.push({
      text: "Sing Up",
      linkTo: "/signup",
    });
  // if (props.showLogOutButton)
  //   buttonsList.push({
  //     text: "Logout",
  //     linkTo: "/login",
  //     // onClick: handleLogout,
  //   });
  //This is for change to calendar link
  const [isCalendar, ChangeIsCalendar] = useState(true);
  const GoToCalendar = isCalendar ? 
      (<CalendarTodayIcon onMouseEnter={() => ChangeIsCalendar(false)} style={VisibilityStle1} />)  
      : 
      (<Link to={"/calendar"}> 
        <EventAvailableIcon  onMouseLeave={() => ChangeIsCalendar(true)} style={VisibilityStle2} />
        </Link>)
    
  //This is for change to Notes link
  const [isNote, ChangeIsNote] = useState(true);
  const GoToNote = isNote ? 
      (<NoteAddOutlinedIcon onMouseEnter={() => ChangeIsNote(false)} style={VisibilityStle1} />)  
      : 
      (<Link to={"/"} >
      <NotesIcon   onMouseLeave={() => ChangeIsNote(true)} style={VisibilityStle2} />
      </Link>)
  //This is for the Login
  const GoToLogin =<Link to={props.CallingPage == "Signin" ? "/login" : "/signup"} >
    {props.CallingPage === "Signin" ?
        <LoginOutlined  style={VisibilityStle1} />
    :
        <LogoutOutlined style={VisibilityStle1} />
      }
    </Link>

  const ColorSwitcher = <div style={{marginRight : "4px"}}>
        <SwitchIcon OnChangedColor={props.ColorChanged} style={{marginRight : "4px"}}/>
      </div>
  return (
    <StyledNavBar>
      <LeftNavBarItems>
          {/* <AlipayOutlined style={IconStyle} /> */}
          <LogoNotask/>
      </LeftNavBarItems>

      <RightNavBarItems>
        {ColorSwitcher}
        {GoToCalendar}
        {GoToNote}
        {buttonsList.map((button) => {
          return (
            <div  style={{ display: "flex ", flexDirection: "row",  marginLeft: "6px",  }}  >
              {GoToLogin}
              <div style={{ color: props.RecieveColor.UserInputFC,  fontSize: "1.2em",  marginTop: "12px",  }}  >
                {button.text}
              </div>
            </div>
          );
        })}
        {usernameAndAvatar}
      </RightNavBarItems>
    </StyledNavBar>
  ); 
}




export default NavBar;