import React, {useState} from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'
import FadeIn from 'react-fade-in';
import UserIcon from "./UserIcon";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import AppButton from "./Button";
import NotesIcon from '@material-ui/icons/Notes';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

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
    marginRight: "3px",
    marginTop: "15px",
    fontSize: "25px" 
  }
  const [CalendarSize, changeCalendarSize] = useState(true) 
  const HandlerFalse = () => (changeCalendarSize(false), console.log(CalendarSize))
  const HandlerTrue = () => (changeCalendarSize(true), console.log(CalendarSize))
  const CalendarStyle = {
    marginRight: "3px",
    marginTop: "15px",
    fontSize: CalendarSize?"25px" : "30px"
  }
  const [NoteSize, changeNoteSize] = useState(true) 
  const NoteStyle = {
    marginRight: "3px",
    marginTop: "15px",
    fontSize: NoteSize ? "25px" : "30px"
  }
  return(
    <StyledNavBar>
      <LeftNavBarItems>
          Hi! 
      </LeftNavBarItems>

      <RightNavBarItems>
        <div onMouseEnter={HandlerFalse} onMouseOver={HandlerTrue}><CalendarTodayIcon style={CalendarStyle}/></div>
        <NotesIcon style={NoteStyle}/>
        <SwitchIcon OnChangedColor={props.ColorChanged}/>
        <UserIcon username={"Amr R. Mohamed"} OnChangedColor={props.RecieveColor}/>
        <DisplayedUsername 
          TextColorInput={props.RecieveColor.UserIconTextColor}>
          <bold>{"Amr R. Mohamed"}</bold>
        </DisplayedUsername>
      </RightNavBarItems>
    </StyledNavBar>
  ) 
}




export default NavBar;