
import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../../../UI/Select';
import {NumberOfYearsValue, NumberOfMonthsValue, NumberOfDaysValue} from './OptionsForm'

const DateSelected = (props) => {
    
   const [YearsValueInput, ChangeYearsValueInput] = useState("")
   const handleYears = (e) =>{
       console.log(e.target.value)
       ChangeYearsValueInput(e.target.value );
   }
   const Years = <FadeIn><SelectData 
       key={`YearsValueInput${YearsValueInput}`}
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
       onchangeValue = {handleYears}
       InputValue = {YearsValueInput}
       >
       {<NumberOfYearsValue/>}
    </SelectData></FadeIn>

    const [MonthsValueInput, ChangeMonthsValue] = useState("")
    const handleMonths = (e) =>{
        console.log(e.target.value)
        ChangeMonthsValue(e.target.value );
    }
    const Months = <FadeIn><SelectData 
        key={`MonthsValueInput${MonthsValueInput}`}
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
        onchangeValue = {handleMonths}
        InputValue = {MonthsValueInput}
        >
        {<NumberOfMonthsValue/>}
    </SelectData></FadeIn>
    
    const [DayValueInput, ChangeDayValue] = useState("")
    const handleDays = (e) =>{
        console.log(e.target.value)
        ChangeDayValue(e.target.value );
    }
    const Days = <FadeIn><SelectData 
        key={`DayValueInput${DayValueInput}`}
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
        onchangeValue = {handleDays}
        InputValue = {DayValueInput}
        >
        {<NumberOfDaysValue/>}
    </SelectData></FadeIn>
    
    return (
        [ Years, Months, Days]
        )

}

export default DateSelected;