import React, { useState }  from 'react';
import { Brightness1, Brightness2, Brightness3, Brightness2Sharp } from '@material-ui/icons';

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
        <div onClick={changeState}>{isClicked === 1 ?  <Brightness3/>: (isClicked === 2 ? <Brightness2/> : <Brightness1/> ) }</div>
    )
};

export default SwitchIcion;