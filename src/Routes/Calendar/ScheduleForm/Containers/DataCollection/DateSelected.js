import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../../../UI/Select";
import {
  NumberOfYearsValue,
  NumberOfMonthsValue,
  NumberOfDaysValue,
} from "./OptionsForm";

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
  const handleYears = (e) => (
    ChangeYearsValueInput(e.target.value), ChnageUserChangedYear(false)
  );
  const Years = (
    <FadeIn>
      <SelectData
        key={YearsValueInput + 1}
        value="as"
        PlaceholderValue="asdfas"
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
        borderColorValue={
          props.DisabledisClicked ? "#A9A9A9" : props.RecievedColor.BorderColor
        }
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleYears}
        InputValue={YearsValueInput}
      >
        {
          <NumberOfYearsValue
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledYear={props.DisabledisClicked}
          />
        }
      </SelectData>
    </FadeIn>
  );

  // This part is changed once the user click on the drop down to see other options
  const [GetUserChangeMonth, ChnageUserChangedMonth] = useState(true);
  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [MonthsValueInput, ChangeMonthsValue] = useState(
    GetUserChangeMonth
      ? props.ReturnFrom === "From"
        ? props.ReturnClickedFromMonth
        : props.ReturnClickedToMonth
      : ""
  );
  const handleMonths = (e) => (
    ChangeMonthsValue(e.target.value), ChnageUserChangedMonth(false)
  );
  const Months = (
    <FadeIn>
      <SelectData
        key={MonthsValueInput.id +1}
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
        borderColorValue={
          props.DisabledisClicked ? "#A9A9A9" : props.RecievedColor.BorderColor
        }
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleMonths}
        InputValue={MonthsValueInput}
      >
        {
          <NumberOfMonthsValue
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledMonth={props.DisabledisClicked}
          />
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
    console.log(e.target),
    ChangeDayValue(e.target.value), ChnageUserChangedDay(false)
  );
  const name = props.name == "start" ? "start" : "end"
  const Days = (
    <FadeIn>
      <SelectData
        key={DayValueInput.id  +1}
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
        borderColorValue={
          props.DisabledisClicked ? "#A9A9A9" : props.RecievedColor.BorderColor
        }
        BorderValue={"solid"}
        borderWidthValue={"thin"}
        marginRightValue={"15px"}
        onchangeValue={handleDays}
        InputValue={DayValueInput}
      >
        {
          <NumberOfDaysValue
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledDay={props.DisabledisClicked}
          />
        }
      </SelectData>
    </FadeIn>
  );

  //this is submitted to DropDownContainer
  props.submitDateValue(
    YearsValueInput + "-" + MonthsValueInput + "-" + DayValueInput
  );

  return [Years, Months, Days];
};

export default DateSelected;
