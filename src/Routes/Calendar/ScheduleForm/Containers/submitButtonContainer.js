

import React, { useState } from "react";
import FadeIn  from 'react-fade-in'; 
import {LoginOutlined} from "@ant-design/icons"; 
import Button from '../../../../UI/Button';

const SubmissionContainer = (props) => {
    const [thi, ct] = useState(true)
    const m = thi ? "Title ..." :  "Please Enter A Title ....(-_-)"
    //Checking the title 
    const subTitle = () => (
        // console.log(props.ChangePassTitlePlaceHolder)
        props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)") 
            // event.preventDefault();
            // if (props.PassTitleValue === "" )
            // {  
            //      return( <FadeIn>{props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)") }</FadeIn>)
            // }
            // else
            // {
            //     // props.AddedTitle(titleValue);
            //     props.PassTitleValue("")
            //     // setPlaceHolder("Title")
            // }
    )  

// console.log(props.ChangePassTitlePlaceHolder )



    const [IsShown, setIsShown] = useState(false)
    const ButtonIconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"20px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const SubmitButton = <FadeIn>
        <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginLeftValue={"35%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"}
        backGroundColorValue={IsShown ? props.ScheduleColor.LogSignColor : props.ScheduleColor.UserInputBGC }
        FontColorValue={props.ScheduleColor.IconC}
        borderColorValue={props.ScheduleColor.BorderColor}
        IsCalledValue={"hover"} 
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px"
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
        onClick={() => (ct(!thi), props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)"))}
        text = {"Submit"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
    </FadeIn>
    
    return (SubmitButton)
}

export  {SubmissionContainer};
