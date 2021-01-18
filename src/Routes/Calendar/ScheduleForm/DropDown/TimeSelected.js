import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../../../UI/Select';
import {HourValue, MinutsValue, TwelveHourSystemValue} from './OptionsForm';

const OptionForm = (props) => {
    
    const [HourValueInput, ChangeHourValue] = useState("")
    const handle = (e) =>{
        console.log(e.target.value)
        ChangeHourValue(e.target.value );
    }
    const Hours = <FadeIn><SelectData 
        key={`HourValueInput${HourValueInput}`}
        inputType={"text"}
        name="title"
        widthValue={"105px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={ props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor} 
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue = {handle}
        InputValue = {HourValueInput}
        >
        {<HourValue/>}
    </SelectData></FadeIn>

    const [MinutsValueInput, ChangeMinutsValue] = useState("")
    const handleMinuts = (e) =>{
        console.log(e.target.value)
        ChangeMinutsValue(e.target.value );
    }
    const Minuts = <FadeIn><SelectData 
        key={`MinutsValueInput${MinutsValueInput}`}
        inputType={"text"}
        name="title"
        widthValue={"105px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={ props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor} 
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue = {handleMinuts}
        InputValue = {MinutsValueInput}
        >
        {<MinutsValue/>}
    </SelectData></FadeIn>

    const [DaytimeValueInput, ChangeDaytimeValue] = useState("")
    const handleDaytime = (e) =>{
        console.log(e.target.value)
        ChangeDaytimeValue(e.target.value );
    }
    const DayTime = <FadeIn><SelectData 
        key={`DaytimeValueInput${DaytimeValueInput}`}
        inputType={"text"}
        name="title"
        widthValue={"105px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={ props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor} 
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue = {handleDaytime}
        InputValue = {DaytimeValueInput}
        >
        {<TwelveHourSystemValue/>}
    </SelectData></FadeIn>

    return (
        [Hours, Minuts, DayTime]
        )
}
export default OptionForm;
