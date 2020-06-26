import React, { useState } from "react";
import styled from "styled-components";


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
`

export default function Model (props) {
    // const [modalOpacity, changemodelOpacity] = useState(0)
    

    return(
        <ModelContainer
            positionInput={props.position}
            BackgroundInput={props.Background}
            widthInput={props.width}
            heightInput={props.height}
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
        >
            {props.children}
        </ModelContainer>
    )
}