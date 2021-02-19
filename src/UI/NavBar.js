import React, {useState} from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'
import FadeIn from 'react-fade-in';
import UserIcon from "./UserIcon";
import { LoginOutlined, LogoutOutlined,AlipayOutlined } from "@ant-design/icons";
import AppButton from "./Button";
import NotesIcon from '@material-ui/icons/Notes';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import { Link } from "react-router-dom";

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
  display: flex;
  width: 500px;
  justify-content: flex-end;
`;
const LeftNavBarItems = styled.div`
  display: flex;
  width: 450px;
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
    marginTop: "13px",
    marginRight: "8px",
    fontSize: "28px",
    color: props.RecieveColor.NavIconColor
 };
  //Close is hovered on color style
  const VisibilityStle2 = {
      marginTop: "13px",
      marginRight: "4px",
      fontSize: "34px",
      color: props.RecieveColor.NavIconColor
  };
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
    {props.CallingPage == "Signin" ?
        <LoginOutlined  style={VisibilityStle1} />
    :
        <LogoutOutlined style={VisibilityStle1} />
      }
    </Link>

  return(
    <StyledNavBar>
      <LeftNavBarItems>
        <FadeIn><AlipayOutlined style={IconStyle}/></FadeIn>
      </LeftNavBarItems>

      <RightNavBarItems>
        {GoToCalendar}
        {GoToNote}
        <SwitchIcon OnChangedColor={props.ColorChanged}/>
        {GoToLogin}
        <UserIcon username={"Amr R. Mohamed"} OnChangedColor={props.RecieveColor}/>
        <DisplayedUsername 
          TextColorInput={props.RecieveColor.UserIconTextColor}>
          <span style={{ fontWeight: "bold"}}>{"Amr R. Mohamed"}</span>
        </DisplayedUsername>
      </RightNavBarItems>
    </StyledNavBar>
  ) 
}




export default NavBar;