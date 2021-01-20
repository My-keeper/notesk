import React, { useState } from "react";
import styled from "styled-components";
import FadeIn  from 'react-fade-in';
import Inputdata from '../../../../UI/UserInput';
import {RepeatDayValue} from './OptionsForm';

const EachateContainer = styled.div`
    width: 60px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    margin: 4px;
`
const DateContainer = styled.div`
    width: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap
    // justify-content: flex-start;
`

const RepeatDaySelected = (props) => {
    const [onChange,ChangeOnChange]= useState({
        isTuesday: false,
        isWednesday: false,
        isThursday: false,
        isFriday: false,
        isSaturday: false,
        isSunday: false
    })
    const ChoosenDay = ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const [RepeatedDaysValueInput, ChangeRepeatedDaysValueInput] = useState("")
    const handleRepeatedDays = (e) =>{
        console.log(e.target.value)
        ChangeRepeatedDaysValueInput(e.target.value );
    }
    // onChangeDays = () => {
    //     onChange.map( (value) => {})
    // }

    console.log(onChange.isThursday)
    const trya = (DayValue) => {
        return [<Inputdata 
            key={`RepeatedDaysValueInput${RepeatedDaysValueInput}`}
            inputType={"checkbox"}
            name="title"
            widthValue={"15px"}
            paddingVale={"2px"}
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
            marginRightValue={"5px"}
            onchangeValue = {handleRepeatedDays}
            InputValue = {DayValue}
            ></Inputdata>,
            <label style={{marginRight: "10px"}}>{DayValue}</label>]
        }
        
    const me = [trya(ChoosenDay[0]),trya(ChoosenDay[1]),trya(ChoosenDay[2]),trya(ChoosenDay[3]),trya(ChoosenDay[4])]
    
    return (  
    // <div>
        <div style={{display: "flex",width: "50px", flexDirection: "row"}}>
                {me}
        </div>
    /* </div> */
    )
}

export default RepeatDaySelected;