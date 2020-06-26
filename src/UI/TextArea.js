import React, { useState } from "react";
import styled from "styled-components";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const TextareaContainer = styled.textarea`
    display: flex;
    resize: vertical;
    width: ${(props) => (props.widthInput ? props.widthInput : "450px")};
    height: ${(props) => (props.heightInput ? props.heightInput : null)};
    border: ${(props) => (props.borderInput ? props.borderInput : "none" )};
    padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
    outline: ${(props) => (props.outlineInput ? props.outlineInput : null)};
    font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
    font-family: ${(props) => (props.fontFamilyInput ? props.fontFamilyInput : "none")};
`
export default function UserInput(props) {
  return (
      <TextareaContainer
        value={props.InputValue}
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
        rows={props.rows} 
      />
  );
}
