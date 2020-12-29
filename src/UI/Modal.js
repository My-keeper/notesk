import React from "react";
import styled from "styled-components";

const borderStyling = {
    border: "1px solid rgb(245,186,19, 0.382)",
    boxShadow: "0 0 2px 2px rgb(245,186,19, 0.382)",
  }

const ModelContainer = styled.div`
    position: ${(props) => (props.positionInput ? props.positionInput : null)};
    background: ${(props) => (props.BackgroundInput ? props.BackgroundInput : "#fff")};
    width: ${(props) => (props.widthInput ? props.widthInput : "auto")};
    height: ${(props) => (props.heighthInput ? props.heightInput : "auto")};
    margin: ${(props) => (props.marginInput ? props.marginInput : null)};
    padding: ${(props) => (props.paddingInput ? props.paddingInput : null)};
    box-shadow: ${(props) => (props.boxShadowInput ? props.boxShadowInput : null)};
    border-radius: ${(props) => (props.borderRadiusInput ? props.borderRadiusInput : null)};
    opacity: ${(props) => (props.OpacityInput ? props.OpacityInput : null)};
    float: ${(props) => (props.floatInput ? props.floatInput : null)};
    display: ${(props) => (props.displayInput ? props.displayInput :null)};
    flex-direction: ${(props) => (props.flexDirectionInput ? props.flexDirectionInput : null)};
    resize: ${(props) => (props.resizeInput ? props.resizeInput : "none")};
    flex-grow: ${(props) => (props.flexGrowInput ? props.flexGrowInput : "none")};
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "none")};
    z-index: 3;
    background-color: ${(props) => ( props.backGroundColorInput ? props.backGroundColorInput : "")};
    color: ${(props) => ( props.FontColorInput ? props.FontColorInput : "")};
    &::placeholder{
        color: ${(props) => ( props.PlaceHolderColorInput ? props.PlaceHolderColorInput : "")};
    };
    &:hover { 
        ${(props) => (props.IsCalled === "HOVER" ? borderStyling : "none")};
    };
    &:focus { 
        ${(props) => (props.IsCalled === "FOCUS" ? borderStyling : "none")};
    };
`

export default function Model (props) {


    return(
        <ModelContainer
            positionInput={props.position}
            BackgroundInput={props.Background}
            widthInput={props.width}
            heightInput={props.heightValue}
            marginInput={props.margin}
            paddingInput={props.padding}
            OpacityInput={props.Opacity}
            floatInput={props.float}
            displayInput={props.display}
            resizeInput={props.resizeValue}
            boxShadowInput={props.boxShadowValue}
            borderRadiusInput={props.borderRadiusValue}
            flexDirectionInput={props.flexDirectionValue}
            flexGrowInput={props.flexGrowValue}
            marginBottom={props.marginBottomValue}
            backGroundColorInput={props.backGroundColorValue}
            FontColorInput={props.FontColorValue}
            PlaceHolderColorInput={props.PlaceHolderColorValue}
        >
            {props.children}
        </ModelContainer>
    )
}