import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../../../../UI/Select';
import {HourValue, MinutsValue, TwelveHourSystemValue} from './OptionsForm';

const OptionForm = (props) => {
    
    const [HourValueInput, ChangeHourValue] = useState("")
    const handle = (e) =>{ChangeHourValue(e.target.value );}
    const Hours = <FadeIn><SelectData 
        key={HourValueInput.id}
        inputType={"text"}
        name="title"
        widthValue={"112px"}
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
        {<HourValue 
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledHour={props.DisabledisClicked}
        />}
    </SelectData></FadeIn>

    const [MinutsValueInput, ChangeMinutsValue] = useState("")
    const handleMinuts = (e) =>{ChangeMinutsValue(e.target.value );}
    const Minuts = <FadeIn><SelectData 
        key={MinutsValueInput.id}
        inputType={"text"}
        name="title"
        widthValue={"112px"}
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
        {<MinutsValue 
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledMinuts={props.DisabledisClicked}
        />}
    </SelectData></FadeIn>

    const [DaytimeValueInput, ChangeDaytimeValue] = useState("")
    const handleDaytime = (e) =>{
        console.log(e.target.value)
        ChangeDaytimeValue(e.target.value );
    }
    const DayTime = <FadeIn><SelectData 
        key={DaytimeValueInput.id}
        inputType={"text"}
        name="title"
        widthValue={"112px"}
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
        {<TwelveHourSystemValue 
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledHourSystem={props.DisabledisClicked}
        />}
    </SelectData></FadeIn>

    props.submitHourValue(HourValueInput)
    props.submitMinutsValue(MinutsValueInput)
    props.submitDayValue(DaytimeValueInput)


    return (
        [Hours, Minuts, DayTime]
        )
}
export default OptionForm;
