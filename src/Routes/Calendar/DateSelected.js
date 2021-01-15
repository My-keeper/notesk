import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import SelectData from '../../UI/Select';

//this is for the years from this year 
const years = ["year","2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"]
const YearContainer = (
    [years.map((year) => { return <option  value={"year"}>{year}</option> })]
    )

//this is for the months in a year 
const NumberOfMonths = ['Months','1','2','3','4','5','6','7','8','9','10','11','12']
const MonthContainer = (
    [NumberOfMonths.map((month) => <option value={month}>{month}</option>)]
    )

//this is for the days in a Month 
const NumberOfDays = ['Days','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
const DayContainer = (
    [NumberOfDays.map((days ) => <option value={days}>{days}</option>)]
    )

const Date = [YearContainer, MonthContainer, DayContainer]
            
const DateSelected = (props) => {
    return Date.map((Inputvalue) => {
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
            {Inputvalue}
        </SelectData></FadeIn>
    })
}

export default DateSelected;