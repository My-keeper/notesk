import React from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'
import FadeIn from 'react-fade-in';
import UserIcon from "./UserIcon";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import AppButton from "./Button";
// import { Link } from "react-router-dom";


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
  width: 450px;
  justify-content: flex-end;
`;
const LeftNavBarItems = styled.div`
  display: flex;
  width: 450px;
  justify-content: flex-start;
`;
const NavBar = (props) => {
  // let usernameAndAvatar = props.username ? (
  //   <div style={{ display: "flex"}}>
  //     <UserIcon username={"Amr R. Mohamed"} OnChangedColor={props.RecieveColor}/>
  //     <DisplayedUsername TextColorInput={props.RecieveColor.UserIconTextColor}>{"Amr R. Mohamed"}</DisplayedUsername>
  //   </div>
  // ) : null;

  // let buttonsList = [];
  // if (props.showLoginButton)
  //   buttonsList.push({
  //     icon: <LoginOutlined style={{ color: "white", marginRight: "8px" }} />,
  //     text: "Login",
  //     linkTo: "/login",
  //   });
  // if (props.showSignUpButton)
  //   buttonsList.push({
  //     icon: <LoginOutlined style={{ color: "white", marginRight: "8px" }} />,
  //     text: "Sing Up",
  //     linkTo: "/signup",
  //   });
  // if (props.showLogOutButton)
  //   buttonsList.push({
  //     icon: <LogoutOutlined style={{ color: "white", marginRight: "8px" }} />,
  //     text: "Logout",
  //     linkTo: "/login",
  //     // onClick: handleLogout,
  //   });

  return(
    // <FadeIn>
        <StyledNavBar>
            <LeftNavBarItems>
              {/* <Link style={{ display: "flex" }} to="/">
              </Link> */}
                Hi! 
            </LeftNavBarItems>
            <RightNavBarItems>
            {/* {buttonsList.map((button) => {
              return (
                <Link to={button.linkTo}>
                  <AppButton
                    text={button.text}
                    icon={button.icon}
                    height={"32px"}
                    width={"95px"}
                    color={"white"}
                    onClick={(e) => button.onClick && button.onClick(e)}
                    fontSize={"14px"}
                    backgroundColor={"rgba(0,0,0,0)"}
                    border={"1px solid white"}
                  />
                </Link>
            )})} */}
              <SwitchIcon OnChangedColor={props.ColorChanged}/>
                <UserIcon username={"Amr R. Mohamed"} OnChangedColor={props.RecieveColor}/>
                <DisplayedUsername TextColorInput={props.RecieveColor.UserIconTextColor}><bold>{"Amr R. Mohamed"}</bold></DisplayedUsername>
              </RightNavBarItems>
        </StyledNavBar>
        /* </FadeIn> */

  ) 
}




export default NavBar;