import React, { useState } from "react";
import styled from "styled-components";
import UserInput from '../../../../UI/UserInput'
import FadeIn  from 'react-fade-in';
import { LinkOutlined} from "@ant-design/icons";
import { Title, ImportContacts } from '@material-ui/icons';

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`

const TitleContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }

    const [titleValue, ChangeTitle] = useState("")
    const [CurrentPlaceHolde, setPlaceHolder]= useState("Title")
    // const subTitle = (event) => {
    //     event.preventDefault();
    //     if (titleValue === "" )
    //     {  
    //          return( <FadeIn>{setPlaceHolder("Please Enter A Title ....(-_-)") }</FadeIn>)
    //     }
    //     else
    //     {
    //         props.AddedTitle(titleValue);
    //         ChangeTitle("")
    //         setPlaceHolder("Title")
    //     }
    // }    
    const title = <InfoContainer>
        <FadeIn><Title style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`title` + 1}
        inputType={titleValue}
        PlaceholderValue={CurrentPlaceHolde}
        name="title"
        widthValue={"402px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.ScheduleColor.UserInputBGC}
        FontColorValue={props.ScheduleColor.UserInputFC}
        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
        borderColorValue={props.ScheduleColor.BorderColor}  
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>

    props.SubmitTitle(titleValue)

    return(title)
}

const TitleDescriptionContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [titleDescriptionValue, ChangetitleDescription] = useState("")
    const [CurrentPlaceHolde, setPlaceHolder]= useState("Title Description")
    // const subTitleDescription = (event) => {
    //     event.preventDefault();
    //     if (titleDescriptionValue === "" )
    //     {  
    //          return( <FadeIn>{setPlaceHolder("Please Enter A title Description ....(-_-)") }</FadeIn>)
    //     }
    //     else
    //     {
    //         props.AddedTitle(titleDescriptionValue);
    //         ChangetitleDescription("")
    //         setPlaceHolder("Title Description")
    //     }
    // }    
    const titleDescription = <InfoContainer>
        <FadeIn><ImportContacts style={IconColor}/></FadeIn>
        <FadeIn><UserInput
        key={`titleDescription`+1} 
        inputType={titleDescriptionValue}
        PlaceholderValue={CurrentPlaceHolde}
        name="title"
        widthValue={"402px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.ScheduleColor.UserInputBGC}
        FontColorValue={props.ScheduleColor.UserInputFC}
        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
        borderColorValue={props.ScheduleColor.BorderColor}  
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>

    props.TitleDescription(titleDescriptionValue)

    return (titleDescription)
}

const URLContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [URLValue, ChangeURL] = useState("")
    const [CurrentPlaceHolde, setPlaceHolder]= useState("Optional Attached Link For Description")
    // const subURL = (event) => {
    //     event.preventDefault();
    //     if (URLValue !== "" )
    //     {  
    //         props.AddedTitle(URLValue);
    //         ChangeURL("")
    //         setPlaceHolder("URL")
    //     }
    // }  
    const URL = <InfoContainer>
        <FadeIn><LinkOutlined style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`AttachedLinkDescription` }
        inputType={URLValue}
        PlaceholderValue={CurrentPlaceHolde}
        name="Url"
        widthValue={"402px"}
        paddingVale={"4px"}
        outlineValue={"none"}
        fontSizeValue={"1.2em"}
        fontFamilyValue={"inherit"}
        IsCalledValue={"FOCUS"} 
        borderRadiusValue= {"7px"}
        backGroundColorValue={props.ScheduleColor.UserInputBGC}
        FontColorValue={props.ScheduleColor.UserInputFC}
        PlaceHolderColorValue={props.ScheduleColor.UserInputPHC}
        borderColorValue={props.ScheduleColor.BorderColor}    
        BorderValue={"solid"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>

    props.URLOption(URLValue)

    return (URL)
}

export  {TitleContainer, TitleDescriptionContainer, URLContainer};