import React, { useState } from "react";
import FadeIn from "react-fade-in";
import SelectData from "../../../../../UI/Select";
import { ColorOptionsValue } from "./OptionsForm";

const ColorSelected = (props) => {
  const [ColorValueInput, ChangeColorValueInput] = useState("");
  const handleColors = (e) => {
    console.log(e.target.value);
    ChangeColorValueInput(e.target.value);
  };
  const Colors = (
    <FadeIn>
      <SelectData
        key={ColorValueInput.id}
        inputType={"text"}
        name="title"
        widthValue={"160px"}
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
        onchangeValue={handleColors}
        InputValue={ColorValueInput}
      >
        {<ColorOptionsValue />}
      </SelectData>
    </FadeIn>
  );

  return [Colors];
};

export default ColorSelected;
