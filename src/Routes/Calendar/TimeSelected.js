import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../UI/Select';

const TimeSelected = (props) => {

    //this is for the hour input 
    const Hours = ['Hour','1','2','3','4','5','6','7','8','9','10','11','12']
    const DailyHours = (
        [Hours.map((Hour, index) => <option key={`Hour${index}`} value={Hour}>{Hour}</option>)]
        )

    //this is for the hour input 
    const Minuts = ['Minuts','5','10','15','20','25','30','35','40','45','50','55']
    const DailyMinut =(
        [Minuts.map((Minut, index) => <option key={`Minut${index}`} value={Minut}>{Minut}</option>)]
    )

    //this for either AM or PM
    const TwelveHourSystem = ['AM','PM']
    const DayDivided =(
        [TwelveHourSystem.map((DayTime, index) => <option key={`TwelveHourSystem${DayTime}`} value={DayTime}>{DayTime}</option>)]
        )
    
    const Time = [DailyHours, DailyMinut, DayDivided]
                
    return Time.map((inputvalue) => {
        return <FadeIn><SelectData 
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
            borderWidthValue="thin"
            marginRightValue={"15px"}
        >
            {inputvalue}
        </SelectData></FadeIn>
    })
}

export default TimeSelected;