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
    width: 40px;
    order: 3
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const RepeatDaySelected = (props) => {
    const ChoosenDay = ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const [RepeatedDaysValueInput, ChangeRepeatedDaysValueInput] = useState("")
    const handleRepeatedDays = (e) =>{
        console.log(e.target.value)
        ChangeRepeatedDaysValueInput(e.target.value );
    }
    const trya = <EachateContainer>
        <DateContainer><Inputdata 
                    key={`RepeatedDaysValueInput${RepeatedDaysValueInput}`}
                    inputType={"checkbox"}
                    name="title"
                    widthValue={"15px"}
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
                    // InputValue = {days}
                    />
                <label style={{marginRight: "10px"}}>{ChoosenDay[0]}</label></DateContainer>
                
    </EachateContainer>
    // const Colors = 
    //     [ChoosenDay.map((days,index ) => 
    //             <div style={{display: "flex", width: "30px"}}>
    //                 <Inputdata 
    //                 key={`RepeatedDaysValueInput${RepeatedDaysValueInput}`}
    //                 inputType={"checkbox"}
    //                 name="title"
    //                 widthValue={"15px"}
    //                 paddingVale={"4px"}
    //                 outlineValue={"none"}
    //                 fontSizeValue={"1.2em"}
    //                 fontFamilyValue={"inherit"}
    //                 IsCalledValue={"FOCUS"} 
    //                 borderRadiusValue= {"7px"}
    //             //    backGroundColorValue={ props.ScheduleColor.UserInputBGC}
    //             //    FontColorValue={props.ScheduleColor.UserInputFC}
    //             //    PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
    //             //    borderColorValue={props.ScheduleColor.BorderColor} 
    //                 BorderValue={"solid"}
    //                 borderWidthValue={"thin"}
    //                 marginRightValue={"15px"}
    //                 onchangeValue = {handleRepeatedDays}
    //                 InputValue = {days}
    //                 />
    //             <label >{days}</label>
    //             </div>
    //     )]

    return (  trya
    )
}

export default RepeatDaySelected;