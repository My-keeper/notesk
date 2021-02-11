import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../../../UI/Select";
import {
  NumberOfYearsValue,
  NumberOfMonthsValue,
  NumberOfDaysValue,
} from "./OptionsForm";
import { createEventId } from "../../../event-utils";

const DateSelected = (props) => {
  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [YearsValueInput, ChangeYearsValueInput] = useState("");
  const handleYears = (e) => (
    ChangeYearsValueInput(e.target.value)
    )
  const Years = (
    <FadeIn>
      <SelectData
        key={YearsValueInput + createEventId()}
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
        InputValue={YearsValueInput}
      >
        {
          <NumberOfYearsValue/>
        }
      </SelectData>
    </FadeIn>
  );

  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [MonthsValueInput, ChangeMonthsValue] = useState("");
  const handleMonths = (e) => (
    ChangeMonthsValue(e.target.value) 
  );
  const Months = (
    <FadeIn>
      <SelectData
        key={MonthsValueInput.id + createEventId()}
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
        InputValue={MonthsValueInput}
      >
        {
          <NumberOfMonthsValue/>
        }
      </SelectData>
    </FadeIn>
  );

  /*
        This part is chicking if the input that the user entered is what is wanted or not 
        Once the select is clicked then it will change to normal dropdown with input number 
    */
  const [DayValueInput, ChangeDayValue] = useState("");
  const handleDays = (e) => (
    console.log(e.target),
    ChangeDayValue(e.target.value) 
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
  props.submitDateValue(
    YearsValueInput + "-" + MonthsValueInput + "-" + DayValueInput
  );

  return [Years, Months, Days];
};

export default DateSelected;
