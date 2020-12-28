import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  height: ${(props) => (props.heightInput ? props.heightInput : null)};
  width: ${(props) => (props.widthInput ? props.widthInput : "auto")};
  text-align: center;
  color: ${(props) => (props.disabled ? props.disabledColor : props.color)};
  font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
  background-color: ${(props) =>
props.disabled ? props.disabledBackgroundColor : props.backgroundColor};
  margin: 10px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "none")};
  border-radius: ${(props) => (props.borderRadiusInput ? props.borderRadiusInput : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "none")};
  border: ${(props) => (props.border === undefined ? "none" : props.border)};
  outline: none;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
`;

const AppButton = (props) => (
  <StyledButton
    height={props.height}
    widthInput={props.width}
    color={props.color}
    fontSizeInput={props.fontSizeValue}
    backgroundColor={props.backgroundColor}
    border={props.border}
    onClick={props.onClick}
    disabled={props.disabled}
    disabledColor={props.disabledColor}
    disabledBackgroundColor={props.disabledBackgroundColor}
    marginBottom={props.marginBottomValue}
    marginLeft={props.marginLeftValue}
    borderRadiusInput={props.borderRadiusValue}
  >
    {props.icon}
    {props.text}
  </StyledButton>
);

export default AppButton;
