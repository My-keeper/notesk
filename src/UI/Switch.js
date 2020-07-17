import React, { useState }  from 'react';
import styled from 'styled-components';
import { Brightness4, Brightness2, Brightness3 } from '@material-ui/icons';
import FadeIn  from 'react-fade-in';

const IconStyle = styled(FadeIn)`
    color: ${(props) => (props.FontColorInput ? props.FontColorInput : "")};
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    font-size: ${(props) => (props.FontSizeInput ? props.FontSizeInput : "")};
`
const SwitchIcion = (props) => {
    const [isClicked, isClickedChanged] = useState(1);
    const changeState = () => {
        props.OnChangedColor(changedBackGround())
        if(isClicked === 1){isClickedChanged(2)} 
        else if (isClicked === 2){isClickedChanged(3)}
        else if (isClicked === 3){isClickedChanged(1)}
    }
    
    const changedBackGround = () => {
        const toReturn = {}
        if(isClicked === 1){
            //borderColor 
            toReturn.BorderColor = "#FFD700";
            //IcionColor
            toReturn.IconC = "#f5ba13";
            //UserIconColor
            toReturn.UserIconColor= "#282828";
            toReturn.UserIconTextColor= "#F0F0F0";
            //ModelArea
            toReturn.NotekBGC = "#999999";
            toReturn.NoteFC = "#F8F8F8";
            //userInput
            toReturn.UserInputBGC = "#999999";
            toReturn.UserInputFC = "#F8F8F8";
            toReturn.UserInputPHC = "#E0E0E0";
            //TextArea
            toReturn.TextAreaBGC = "#999999";
            toReturn.TextAreaFC = "#F8F8F8";
            toReturn.TextAreaPHC = "#E0E0E0";
        }
        else if(isClicked === 2) 
        {
            //borderColor 
            toReturn.BorderColor = "#f5ba13";
            //IcionColor
            toReturn.IconC = "#f5ba13";
            //UserIconColor
            toReturn.UserIconColor= "#fff";
            toReturn.UserIconTextColor= "#000000";
            //ModelArea
            toReturn.NotekBGC = "#282828";
            toReturn.NoteFC = "#F0F0F0";
            //userInput
            toReturn.UserInputBGC = "#282828";
            toReturn.UserInputFC = "#F0F0F0";
            toReturn.UserInputPHC = "#C8C8C8";
            //TextArea
            toReturn.TextAreaBGC = "#282828";
            toReturn.TextAreaFC = "#C8C8C8";
            toReturn.TextAreaPHC = "#C8C8C8";
        }
        else if (isClicked === 3)
        {
            //borderColor 
            toReturn.BorderColor = "#999999";
            //IcionColor
            toReturn.IconC = "#f5ba13";
            //UserIconColor
            toReturn.UserIconColor= "#999999";
            toReturn.UserIconTextColor= "#F8F8F8";
            //ModelArea
            toReturn.NotekBGC = "#fff";
            toReturn.NoteFC = "#000000";
            //userInput
            toReturn.UserInputBGC = "#fff";
            toReturn.UserInputFC = "#000000";
            toReturn.UserInputPHC = "";
            //TextArea
            toReturn.TextAreaBGC = "#fff";
            toReturn.TextAreaFC = "#000000";
            toReturn.TextAreaPHC = "";
        }
        return toReturn
    }
    return(
        <IconStyle 
            FontColorInput = {isClicked === 1 ?  "#999999": (isClicked === 2 ? "#282828" : "#fff" ) }
        >
            {isClicked === 1 ?  
            <Brightness3 style={{fontSize:"30px",marginTop:"11"}} onClick={changeState}/> : 
                (isClicked === 2 ? 
                    <Brightness2 style={{fontSize:"30px",marginTop:"11"}} onClick={changeState}/> : 
                    <Brightness4 style={{fontSize:"30px",marginTop:"11"}} onClick={changeState}/> ) }
        </IconStyle>
    )
};

export default SwitchIcion;