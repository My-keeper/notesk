import React, { useState } from "react";
import NoteContainer from '../../UI/Modal';
import UserInput from '../../UI/UserInput'
import FadeIn  from 'react-fade-in';

const Schedule = (props) => {
    //for the titile 
    const [title, ChangeTitle] = useState("")

    return(
        <FadeIn>
            <NoteContainer
                position= {"relative"}
                width= {"480px"}
                margin= {"30px auto 20px auto"}
                padding= {"15px"}
                boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue= {"7px"}
                resizeValue={"both"}
                backGroundColorValue={props.ScheduleColor.NotekBGC}
                FontColorValue={props.ScheduleColor.NoteFC}
                >
                    <UserInput 
                        width= {"100%"}
                        BorderValue= {""}
                        padding= {"4px"}
                        outlineValue= "none"
                        fontSizeValue= {"1.2em"}
                        fontFamilyValue= {"inherit"} 
                        resizeValue= {"none"}
                        IsCalledValue={"HOVER"}
                        PlaceholderValue={props.title} 
                        // InputValue = {RecievedTitle}
                        // onchangeValue={e => ChangeRecievedTitle(e.target.value)}                            
                        backGroundColorValue={props.ScheduleColor.UserInputBGC}
                        FontColorValue={props.ScheduleColor.UserInputFC}
                        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
                    />
            </NoteContainer>
        </FadeIn>
    )
}

export default Schedule;