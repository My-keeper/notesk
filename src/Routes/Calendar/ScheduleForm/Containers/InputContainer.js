import React, { useState } from "react";
import styled from "styled-components";
import UserInput from '../../../../UI/UserInput'
import TextArea from '../../../../UI/TextArea';
import FadeIn  from 'react-fade-in';
import { LinkOutlined} from "@ant-design/icons";
import { Title } from '@material-ui/icons';
import DescriptionIcon from '@material-ui/icons/Description';
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
        marginRight:"15px", 
        marginTop:"4px" 
    }

    const [titleValue, ChangeTitle] = useState("")
    const title = <InfoContainer>
        <FadeIn><Title style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`title` + 1}
        // This is to change the Value of Title based on the input 
        onchangeValue={e => ChangeTitle(e.target.value)}
        //This is the Props that is coming from Schedule From once I click on submit
        PlaceholderValue={props.SubmitTitlePlaceHolder}
        name="title"
        inputType={"text"} 
        widthValue={"425px"}
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

const DescriptionContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }
    const [DescriptionValue, ChangeDescription] = useState("")
    const Description = <InfoContainer>
        <FadeIn><DescriptionIcon style={IconColor}/></FadeIn>
        <FadeIn><TextArea
        key={`Description`+1} 
        // This is to change the Value of Title based on the input 
        onchangeValue={e => ChangeDescription(e.target.value)}
        //This is the Props that is coming from Schedule From once I click on submit
        PlaceholderValue={props.SubmitDescriptionPlaceHolder}
        rows={3}
        name="Description"
        inputType={"text"} 
        widthValue={"425px"}
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
        resizeValue={"vertical"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>

    props.SubmitDescription(DescriptionValue)

    return (Description)
}

const URLContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }
    const [URLValue, ChangeURL] = useState("")
    const URL = <InfoContainer>
        <FadeIn><LinkOutlined style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`AttachedLinkDescription` }
        // This is to change the Value of Title based on the input 
        onchangeValue={e => ChangeURL(e.target.value)}
        //This is the Props that is coming from Schedule From once I click on submit
        PlaceholderValue={props.SubmitURLPH}
        name="Url"
        inputType={"text"} 
        widthValue={"425px"}
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

export  {TitleContainer, DescriptionContainer, URLContainer};