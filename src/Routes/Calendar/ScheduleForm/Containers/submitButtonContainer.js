

import React, { useState } from "react";
import FadeIn  from 'react-fade-in'; 
import {LoginOutlined} from "@ant-design/icons"; 
import Button from '../../../../UI/Button';

const SubmissionContainer = (props) => {
    console.log()
    const subNote = (event) => {
        event.preventDefault(props.PassDescriptionValue);
        if (props.PassTitleValue === "" && props.PassDescriptionValue === "" )
        {   
        return( <FadeIn>{
            props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)") 
            , props.ChangeDescriptionPlaceHolder("Please Enter A Title ....(-_-)")}
        </FadeIn> )
        } 
        else  if (props.PassTitleValue === "")
        {  
        return( <FadeIn>{
            props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)")}
        </FadeIn>)
                
        } else if (props.PassDescriptionValue === "" ){
        return( <FadeIn>{
            props.ChangeDescriptionPlaceHolder("Please Enter A Title ....(-_-)")}
        </FadeIn>)
        }
        // else
        // {
        //     props.AddedNote(CurrentNote);
        //     setNote({
        //         title: "",
        //         content: ""
        //     })
        //     setPlaceHolder({
        //         titlePH: "Title" , 
        //         contentPH: "Take a note ..."
        //     })
        //     setSubmit(false);
        // }
            
    }


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
        onClick={()=>( props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)") 
        , props.ChangeDescriptionPlaceHolder("Please Enter A Title ....(-_-)"))}
        text = {"Submit"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
    </FadeIn>
    
    return (SubmitButton)
}

export  {SubmissionContainer};
