import React, { useState }  from 'react';

const dark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-6.671-5.575A8 8 0 1 0 16.425 5.328a8.997 8.997 0 0 1-2.304 8.793 8.997 8.997 0 0 1-8.792 2.304z"/>
    </svg> 
const light = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-4.68a8.965 8.965 0 0 0 5.707-2.613A8.965 8.965 0 0 0 15.32 7 6 6 0 1 1 7 15.32z"/>
    </svg>


const SwitchIcion = (props) => {
    const [isClicked, isClickedChanged] = useState(true);
    const changeState = () => {
        props.OnChangedColor(changedBackGround())
        isClickedChanged(!isClicked)
    }
    const changedBackGround = () => {
        const toReturn = {}
        if(isClicked){
            toReturn.NotekGC="#999999";
            toReturn.NoteFC="";

            toReturn.UserInputBGC="#999999";
            toReturn.UserInputFC="#000000";
            toReturn.UserInputPHC="#A9A9A9";
            
            toReturn.TextAreaBGC ="#999999";
            toReturn.TextAreaFC ="#000000";
            toReturn.TextAreaPHC ="#A9A9A9";
        }
        else{
            toReturn.NotekGC="#fff";
            toReturn.NoteFC="";

            toReturn.UserInputBGC="#fff";
            toReturn.UserInputFC="#000000";
            toReturn.UserInputPHC="#ffffff";
            
            toReturn.TextAreaBGC ="#fff";
            toReturn.TextAreaFC ="#000000";
            toReturn.TextAreaPHC ="#ffffff";
        }
        return toReturn
    }

    return(
        <div onClick={changeState}>{isClicked ? (dark) : (light) }</div>
    )
};

export default SwitchIcion;