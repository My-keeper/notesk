import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../UI/Select';
import {HourValue, MinutsValue, TwelveHourSystemValue} from './TimeSelected'

const Test = (props) => {

    const [ChosenValue, ChangeChosenValue] = useState()
    // const [ChosenMinuts, ChangeChosenMinuts] = useState('12')
    // const [ChosenYear, ChangeChosenYear] = useState('')
    const {PHValue, ChangePHValue} = useState("") 
    const handle = (e) =>{
        console.log(e.target.value);
        ChangeChosenValue(e.target.value );
    }
    
    const Time = [<HourValue  />, <MinutsValue/>, <TwelveHourSystemValue/>]
    const Test = (Time[0]?
        <FadeIn><SelectData 
            PlaceholderValue={PHValue}
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
            InputValue = {ChosenValue}
            >
            {Time[0]}
        </SelectData></FadeIn>:null
        )
    console.log(Time[0])
    return Time.map((Inputvalue) => { 
        if(Time[0]){
            return <FadeIn><SelectData 
            PlaceholderValue={PHValue}
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
            InputValue = {ChosenValue}
            >
            {Time[0]}
        </SelectData></FadeIn>
        }
    }) 
    
}

export default Test;