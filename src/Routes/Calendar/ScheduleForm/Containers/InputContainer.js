import React, { useState } from "react";
import styled from "styled-components";
import UserInput from '../../../../UI/UserInput'
import TextArea from '../../../../UI/TextArea';
import FadeIn  from 'react-fade-in';
import { LinkOutlined} from "@ant-design/icons";
import { Title, ImportContacts } from '@material-ui/icons';
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
        marginRight:"9px", 
        marginTop:"4px" 
    }

    const [titleValue, ChangeTitle] = useState("")
    const [CurrentPlaceHolde, setPlaceHolder]= useState(props.SubmitTitlePlaceHolder)
    console.log("this is the props  " + props.SubmitTitlePlaceHolder)
    console.log("ttesting  " + CurrentPlaceHolde)

    const title = <InfoContainer>
        <FadeIn><Title style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`title` + 1}
        inputType={titleValue}
        //This is the Props that is coming from Schedule From once I click on submit
        PlaceholderValue={props.SubmitTitlePlaceHolder}
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

const DescriptionContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [DescriptionValue, ChangeDescription] = useState("")
    const [CurrentPlaceHolde, setPlaceHolder]= useState(props.SubmitDescriptionPlaceHolder)
  
    const Description = <InfoContainer>
        <FadeIn><DescriptionIcon style={IconColor}/></FadeIn>
        <FadeIn><TextArea
        key={`Description`+1} 
        inputType={DescriptionValue}
        PlaceholderValue={CurrentPlaceHolde}
        rows={3}
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
        resizeValue={"vertical"}
        borderWidthValue="thin"
        marginRightValue={"10px"}
        /></FadeIn>
    </InfoContainer>

    props.Description(DescriptionValue)

    return (Description)
}

const URLContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [URLValue, ChangeURL] = useState("")
    const [CurrentPlaceHolde, setPlaceHolder]= useState(props.SubmitURLPlaceHolder)

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

export  {TitleContainer, DescriptionContainer, URLContainer};