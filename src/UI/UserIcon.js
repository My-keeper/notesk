import React from "react";
import styled from "styled-components";

const colorList = [
  "#597ef7",
  "#49aa19",
  "#13a8a8",
  "#cb2b83",
  "#642ab5",
  "#177ddc",
  "#8bbb11",
  "#d8bd14",
  "#d89614",
  "#d32029",
  "#d84a1b",
  "#d87a16",
];

const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

const UserIconDiv = styled.div`
    width: 32px;
    height: 32px;
    margin: 10px;
    border-radius: 50%;
    background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledLetter = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => ( props.backGroundTextColorInput ? props.backGroundTextColorInput : "")};
  margin: 0;
  margin-bottom: 25%;
  margin-top: 7px;
`;

const UserIcon = (props) => {
  return (
    <UserIconDiv
        backGroundColorInput={props.OnChangedColor.UserIconColor}
    >
      <StyledLetter
        backGroundTextColorInput={props.OnChangedColor.UserIconTextColor}
      >{props.username.charAt()}</StyledLetter>
    </UserIconDiv>
  );
};

export default UserIcon;
