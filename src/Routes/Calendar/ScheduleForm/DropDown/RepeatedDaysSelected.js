import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../../../UI/Select';
import {RepeatDayValue} from './OptionsForm';

const RepeatDaySelected = (props) => {
    
   const [RepeatedDaysValueInput, ChangeRepeatedDaysValueInput] = useState("")
   const handleRepeatedDays = (e) =>{
       console.log(e.target.value)
       ChangeRepeatedDaysValueInput(e.target.value );
   }
   const Colors = <FadeIn><SelectData 
       key={`RepeatedDaysValueInput${RepeatedDaysValueInput}`}
       inputType={"checkbox"}
       name="title"
       widthValue={"160px"}
       paddingVale={"4px"}
       outlineValue={"none"}
       fontSizeValue={"1.2em"}
       fontFamilyValue={"inherit"}
       IsCalledValue={"FOCUS"} 
       borderRadiusValue= {"7px"}
    //    backGroundColorValue={ props.ScheduleColor.UserInputBGC}
    //    FontColorValue={props.ScheduleColor.UserInputFC}
    //    PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
    //    borderColorValue={props.ScheduleColor.BorderColor} 
       BorderValue={"solid"}
       borderWidthValue={"thin"}
       marginRightValue={"15px"}
       onchangeValue = {handleRepeatedDays}
       InputValue = {RepeatedDaysValueInput}
       >
       {<RepeatDaySelected/>}
    </SelectData></FadeIn>

    return (Colors)
}

export default RepeatDaySelected;