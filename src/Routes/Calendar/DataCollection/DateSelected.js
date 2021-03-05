import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../UI/Select";
import {
  NumberOfYearsValue,
  NumberOfMonthsValue,
  NumberOfDaysValue,
} from "./OptionsForm";
import { createEventId } from "../event-utils";

const DateSelected = (props) => {
  //This part is changed once the user click on the drop down to see other options
  const [GetUserChangeYear, ChnageUserChangedYear] = useState(true);
  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [YearsValueInput, ChangeYearsValueInput] = useState(
    GetUserChangeYear
      ? props.ReturnFrom === "From"
        ? props.ReturnClickedFromYear
        : props.ReturnClickedToYear
      : ""
    );
  const [isChangedValueYear, changedValueYear]= useState(false)
  const handleYears = (e) => (
    ChangeYearsValueInput(e.target.value) , ChnageUserChangedYear(false) ,changedValueYear(true)
    )
  const Years = (
    <FadeIn>
      <SelectData
        key={YearsValueInput + createEventId()}
        InputValue={YearsValueInput}
        value="as"
        PlaceholderValue="asdfas"
        inputType={"text"}
        name={props.name == "start" ? "start" : "end"}
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleYears}
      >
        {
          <NumberOfYearsValue/>
        }
      </SelectData>
    </FadeIn>
  );
  
  // This part is changed once the user click on the drop down to see other options
  const [GetUserChangeMonth, ChnageUserChangedMonth] = useState(true);
  const [isChangedValueMonth, changedValueMonth]= useState(false)
  const [MonthsValues, ChangeMonths] = useState({
    Jan: {id: "1", name: "jan"},
    Feb: {id: "2", name: "Feb"},
    Mar: {id: "3", name: "Mar"},
    Apr: {id: "4", name: "Apr"},
    May: {id: "5", name: "May"},
    Jun: {id: "6", name: "Jun"},
    Jul: {id: "7", name: "Jul"},
    Aug: {id: "8", name: "Aug"},
    Sep: {id: "9", name: "Sep"},
    Oct: {id: "10", name: "Oct"},
    Nov: {id: "11", name: "Nov"},
    Dec: {id: "12", name: "Dec"}
  })
  /*
  This part is chicking if the input that the user entered is what is wanted or not 
  Once the select is clicked then it will change to normal dropdown with input number 
  */
 const [MonthsNumber, ChangeMonthsNumber] = useState("") //this for when user clicke
  const RecivingMonthsValueInput = GetUserChangeMonth
    ? (props.ReturnFrom === "From"
        ? props.ReturnClickedFromMonth
        : props.ReturnClickedToMonth)
    : null
  // GetUserChangeMonth ?  ChangeMonthsNumber(Object.values(MonthsValues).map( value => {
  //     if (value.name == RecivingMonthsValueInput) {
  //       return value.id
  //     }
  //   }).filter(item => item)[0]) : null
  
  //this part if the user clicked and changed the month
  const handleMonths = (e) => {
    ChnageUserChangedMonth(false) 
    changedValueMonth(true)
    // ChangeMonthsValue(e.target.value)
    const MonthValue = e.target.value
    ChangeMonthsNumber(Object.values(MonthsValues).map( value => {
      if (value.name == MonthValue) {
        return value.id
      }
    }).filter(item => item)[0])
  }
  const Months = (
    <FadeIn>
      <SelectData
        key={MonthsNumber + createEventId()}
        inputType={"text"}
        name={props.name == "start" ? "start" : "end"}
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={props.DisabledisClicked ? "" : "FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleMonths}
        InputValue={MonthsNumber}
      >
        {
          <NumberOfMonthsValue/>
        }
      </SelectData>
    </FadeIn>
  );

  // This part is changed once the user click on the drop down to see other options
  const [GetUserChangeDay, ChnageUserChangedDay] = useState(true);
  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [DayValueInput, ChangeDayValue] = useState(
      GetUserChangeDay
        ? props.ReturnFrom === "From"
          ? props.ReturnClickedFromDay
          : props.ReturnClickedToDay
        : ""
    );
  const handleDays = (e) => (
    ChangeDayValue(e.target.value) , ChnageUserChangedDay(false)
  );
  const name = props.name == "start" ? "start" : "end"
  const Days = (
    <FadeIn>
      <SelectData
        key={DayValueInput.id  + createEventId()}
        inputType={"text"}
        name={props.name == "start" ? "start" : "end"}
        widthValue={"112px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={props.DisabledisClicked ? "" : "FOCUS"}
        borderRadiusValue={"7px"}
        backGroundColorValue={props.RecievedColor.UserInputBGC}
        FontColorValue={props.RecievedColor.UserInputFC}
        PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
        borderColorValue={props.RecievedColor.BorderColor}
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleDays}
        InputValue={DayValueInput}
      >
        {
          <NumberOfDaysValue/>
        }
      </SelectData>
    </FadeIn>
  );

  //this is submitted to DropDownContainer
  const ReturnYear = (isChangedValueYear ? YearsValueInput : 
                      (props.ReturnFrom === "From"
                        ? 
                        props.ReturnClickedFromYear
                        : 
                        props.ReturnClickedToYear))
  console.log(MonthsNumber)
  props.submitDateValue(ReturnYear+ "-" + MonthsNumber + "-" + DayValueInput);

  return [Years, Months, Days];
};

export default DateSelected;
