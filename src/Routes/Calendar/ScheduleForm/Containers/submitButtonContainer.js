

import React, { useState } from "react";
import FadeIn  from 'react-fade-in'; 
import {LoginOutlined} from "@ant-design/icons"; 
import Button from '../../../../UI/Button';

const SubmissionContainer = (props) => {
    const [CreateEvent, ChanageEventInfo] = useState(
        {
            Id: '',  
            title: '', 
            description: '', 
            Url: '',
            textColor:"pink", 
            start: '',
            end: '',
            display: '', 
            backgroundColor:`${props.backGroundColorInput ? props.backGroundColorInput : "black"}`,
            daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
            start: '2021-02-12T10:30:00',
            end: '2021-02-12T11:30:00',
        }
    )
    props.SubmissionEvent(CreateEvent)
    const subNote = (event) => {
        event.preventDefault(props.PassDescriptionValue);
        // (props.PassTitleValue === "" && props.PassDescriptionValue === "" ) ?
        //     ( <FadeIn>
        //         {props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)") 
        //         , props.ChangeDescriptionPlaceHolder("Please Enter A Title ....(-_-)")}
        //     </FadeIn> )
        // : (props.PassTitleValue === "") ? 
        //     ( <FadeIn>
        //         {props.ChangePassTitlePlaceHolder("Please Enter A Title ....(-_-)")}
        //     </FadeIn>)
        // : (props.PassDescriptionValue === "" )?
        //     ( <FadeIn>
        //         {props.ChangeDescriptionPlaceHolder("Please Enter A Title ....(-_-)")}
        //     </FadeIn>)
        // : (
            <FadeIn>{
                ChanageEventInfo(
                    {
                        
                            start: '2021-02-13',textColor:"pink", end: '2021-02-14',
                        daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
                        startTime: '10:45:00',
                          endTime: '12:45:00'
                          , display: 'list-item',
                          textColor: 'blue'
                      
                      }
                //     { 
                //     Id: props.PassIdCounter + 1 , 
                //     titles: props.PassTitleValue,
                //     description: props.PassDescriptionValue,
                //     Url: props.PassURLValue,
                // }
                ) ,
                props.SubmitisClicked(false)

            }</FadeIn>
        // )
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
        onClick={subNote} 
        text = {"Submit"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
    </FadeIn>
    
    return (SubmitButton)
}

export  {SubmissionContainer};
