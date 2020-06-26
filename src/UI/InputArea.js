import React, { useState } from "react";
import styled from "styled-components";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
`
const InputContainer = styled.input`
  width: ${(props) => (props.widthInput ? props.widthInput : "100%")};
  height: ${(props) => (props.heightInput ? props.heightInput : null)};
  border: ${(props) => (props.borderInput ? props.borderInput : "none" )};
  padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
  outline: ${(props) => (props.outlineInput ? props.outlineInput : null)};
  font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
  font-family: ${(props) => (props.fontFamilyInput ? props.fontFamilyInput : "none")};
`
const passwordIconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  display: "flex",
};

export default function UserInput(props) {
  const [Password, ChangePassword] = useState(false);
  const toggleShowPassword = () => {ChangePassword(!Password)};
  const getInputPasswordIcon = () => {
    if(props.inputType === "password"){
      if(Password){
        return(
          <EyeOutlined
            style={passwordIconStyling}
            onClick={toggleShowPassword}
          />
        );
      }else{
        return(
          <EyeInvisibleOutlined
            style={passwordIconStyling}
            onClick={toggleShowPassword}
          />
        );
      }
    }
  }
  return (
    <Container>
      <InputContainer
        value={props.InputValue}
        type={Password ? "text" : props.inputType}
        placeholder={props.PlaceholderValue}
        onChange={props.onchangeValue}
        onClick={props.onClickValue}
        widthInput={props.widthValue}
        heightInput={props.heightValue}
        borderInput={props.BorderValue}
        paddingInput={props.paddingVale}
        outlineInput={props.outlineValue}
        fontSizeInput={props.fontSizeValue}
        fontFamilyInput={props.fontFamilyValue}
        name={props.name}
      />
      <div>{getInputPasswordIcon()}</div>
    </Container>
  );
}
