import React from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'
import FadeIn from 'react-fade-in';
import UserIcon from "./UserIcon";


const StyledNavBar = styled.div` 
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
  width: 450px;
  justify-content: flex-end;
`;
const LeftNavBarItems = styled.div`
  display: flex;
  width: 450px;
  justify-content: flex-start;
`;
const NavBar = (props) => {
  
  return(
    <FadeIn>
        <StyledNavBar>
            <LeftNavBarItems>
                Hi! 
                </LeftNavBarItems>
            <RightNavBarItems>
              <SwitchIcon OnChangedColor={props.ColorChanged}/>
              <UserIcon username={"Amr R. Mohamed"} OnChangedColor={props.RecieveColor}/>
              <DisplayedUsername TextColorInput={props.RecieveColor.UserIconTextColor}>{"Amr R. Mohamed"}</DisplayedUsername>
              </RightNavBarItems>
        </StyledNavBar>
        </FadeIn>

  ) 
}




export default NavBar;