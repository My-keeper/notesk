import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../UI/Select';
import {HourValue, MinutsValue, TwelveHourSystemValue} from './TimeSelected'

const Test = (props) => {

    const [ChosenHour, ChangeChosenHoue] = useState('')
    // const [ChosenMinuts, ChangeChosenMinuts] = useState('12')
    // const [ChosenYear, ChangeChosenYear] = useState('')

    //this is for the hour input 
    // const Hours = ['Hour','1','2','3','4','5','6','7','8','9','10','11','12']
    // const DailyHours = (
    //     [Hours.map((Hour, index) => 
    //         <option key={`Hour${index}`} value={Hour}>{Hour}</option>)]
    //     )
        
    const handle = (e) =>{
        console.log(e.target.value);
        ChangeChosenHoue(e.target.value );
    }
    
    const Time = [<HourValue/>, <MinutsValue/>, <TwelveHourSystemValue/>]
    // console.log(ChosenHour)   
    return <FadeIn><SelectData 
            PlaceholderValue={props.PHValue}
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
            InputValue = {ChosenHour}
        >
            {<MinutsValue/>}
        </SelectData></FadeIn>
}

export default Test;