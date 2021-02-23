import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../../../UI/Select";
import { HourValue, MinutsValue, TwelveHourSystemValue } from "./OptionsForm";
import { createEventId } from "../../../event-utils";
import { ControlCameraOutlined } from "@material-ui/icons";

const OptionForm = (props) => {
  const [HourClicked, ChangeHourClicked]= useState(false)
  const [HourValueInput, ChangeHourValue] = useState("");
  const handle = (e) => {
    ChangeHourValue(e.target.value);
  };
  const Hours = (
    <FadeIn>
      <SelectData
        key={HourValueInput.id + createEventId()}
        inputType={"text"}
        name="title"
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
        onClickValue={() => ChangeHourClicked(!HourClicked)}
        onchangeValue={handle}
        InputValue={HourValueInput}
      >
        {
          <HourValue
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledHour={props.DisabledisClicked}
          />
        }
      </SelectData>
    </FadeIn>
  );

  const [MinutsClicked, ChangeMinutsClicked] = useState(false)
  const [MinutsValueInput, ChangeMinutsValue] = useState("");
  const handleMinuts = (e) => {
    ChangeMinutsValue(e.target.value);
  };
  const Minuts = (
    <FadeIn>
      <SelectData
        key={MinutsValueInput.id + createEventId()}
        inputType={"text"}
        name="title"
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
        onchangeValue={handleMinuts}
        onClickValue={() => ChangeMinutsClicked(!MinutsClicked)}
        InputValue={MinutsValueInput}
      >
        {
          <MinutsValue
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledMinuts={props.DisabledisClicked}
          />
        }
      </SelectData>
    </FadeIn>
  );

  const [DayTimeClicked, ChangeDayTimeClicked]= useState(false)
  const [DaytimeValueInput, ChangeDaytimeValue] = useState("");
  const handleDaytime = (e) => {
    ChangeDaytimeValue(e.target.value);
  };
  const DayTime = (
    <FadeIn>
      <SelectData
        key={DaytimeValueInput.id + createEventId()}
        inputType={"text"}
        name="title"
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
        onClickValue={() => ChangeDayTimeClicked(!DayTimeClicked)}
        onchangeValue={handleDaytime}
        InputValue={DaytimeValueInput}
      >
        {
          <TwelveHourSystemValue
            //this is the DisabledisClicked that is coming from DropDown to change every time we click on the icion
            DisabledHourSystem={props.DisabledisClicked}
          />
        }
      </SelectData>
    </FadeIn>
  );

  props.submitHourValue(HourClicked ? HourValueInput : "12");
  props.submitMinutsValue(MinutsValueInput ? MinutsClicked : "00");
  props.submitDayValue(DayTimeClicked ? DaytimeValueInput : "AM");

  return [Hours, Minuts, DayTime];
};
export default OptionForm;
