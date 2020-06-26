import React, { useState } from "react";
import styled from "styled-components";

const TextareaContainer = styled.textarea`
    display: flex;
    resize: ${(props) => (props.resizeInput ? props.resizeInput : "none")};
    width: ${(props) => (props.widthInput ? props.widthInput : "450px")};
    height: ${(props) => (props.heightInput ? props.heightInput : null)};
    border: ${(props) => (props.borderInput ? props.borderInput : "none" )};
    padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
    outline: ${(props) => (props.outlineInput ? props.outlineInput : null)};
    font-size: ${(props) => (props.fontSizeInput ? props.fontSizeInput : "none")};
    font-family: ${(props) => (props.fontFamilyInput ? props.fontFamilyInput : "none")};
    /* &:hover {
    border: 1px solid rgb(245,186,19, 0.493);
    box-shadow: 0 0 2px 2px rgb(245,186,19, 0.493);
    } */
    &:focus {
        border: 1px solid rgb(245,186,19, 0.493);;
        box-shadow: 0 0 2px 2px rgb(245,186,19, 0.493);
    }
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
        resizeInput={props.resizeValue}
        name={props.name}
        rows={props.rows} 
      />
  );
}
