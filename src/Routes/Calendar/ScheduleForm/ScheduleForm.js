import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from '../../../UI/Modal';
import UserInput from '../../../UI/UserInput'
import FadeIn  from 'react-fade-in';
import { CalendarOutlined , ClockCircleFilled, LinkOutlined, LoginOutlined, BgColorsOutlined} from "@ant-design/icons";
import { Title, ImportContacts } from '@material-ui/icons';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import RepeatIcon from '@material-ui/icons/Repeat';
import DateSelected from './DropDown/DateSelected';
import TimeSelected from './DropDown/TimeSelected';
import ColorSelected from './DropDown/ColorSelected';
import RepeatDaySelected from './DropDown/RepeatedDaysSelected';
import Button from '../../../UI/Button';

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`
const EachateContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Schedule = (props) => {
    const [numberOfRepeatedDays, ChangenumberOfRepeatedDays] = useState(0) 
    const [IsShown, setIsShown] = useState(false)
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const ButtonIconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"20px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    
    const title = <InfoContainer>
                <FadeIn><Title style={IconColor}/></FadeIn>
                <FadeIn><UserInput 
                key={`title` + 1}
                inputType={"text"}
                name="title"
                PlaceholderValue={" Title"}
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

    const titleDescription = <InfoContainer>
            <FadeIn><ImportContacts style={IconColor}/></FadeIn>
            <FadeIn><UserInput
            key={`titleDescription`+1} 
            inputType={"text"}
            name="title"
            PlaceholderValue={" Description"}
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
    
    const AttachedLinkDescription = <InfoContainer>
        <FadeIn><LinkOutlined style={IconColor}/></FadeIn>
        <FadeIn><UserInput 
        key={`AttachedLinkDescription` }
        inputType={"text"}
        name="Url"
        PlaceholderValue={" Attached Link For Description"}
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

    const calendar = <InfoContainer>
            <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
                    <DateSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "24px"}}>To</span></FadeIn>
                    <DateSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
            </DateContainer>
        </InfoContainer>

    const time =<InfoContainer>
            <FadeIn><ClockCircleFilled style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>Start</span></FadeIn>
                    <TimeSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>End</span></FadeIn>
                    <TimeSelected RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
            </DateContainer>
        </InfoContainer>

    const FontColor = <InfoContainer>
            <EachateContainer>
                <FadeIn><BgColorsOutlined style={{fontSize:"32px",color : props.ScheduleColor.IconC,marginRight:"9px",marginTop:"4px"}}/></FadeIn>
                <FadeIn><ColorSelected RecievedColor={props.ScheduleColor}/></FadeIn>
            </EachateContainer>
            <EachateContainer>
                <FadeIn><ColorLensIcon style={{fontSize:"32px",color : props.ScheduleColor.IconC,marginRight:"9px",marginTop:"4px"}}/></FadeIn>
                <FadeIn><ColorSelected RecievedColor={props.ScheduleColor}/></FadeIn>
            </EachateContainer>
    </InfoContainer>

    const RepeatedDays = <InfoContainer>
            <FadeIn><RepeatIcon style={IconColor}/></FadeIn>
            <FadeIn><RepeatDaySelected ValueOfRepeatedDays={(value) => ChangenumberOfRepeatedDays(value)} RecievedColor={props.ScheduleColor}/></FadeIn>
    </InfoContainer>

    const SubmitButton = <FadeIn><Button
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
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        text = {"Submit"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
        </FadeIn>

   return(
        <FadeIn>
            <NoteContainer
                position= {"relative"}
                width= {"480px"}
                margin= {"30px auto 20px auto"}
                padding= {"15px"}
                boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue= {"7px"}
                resizeValue={"both"}
                backGroundColorValue={props.ScheduleColor.NotekBGC}
                FontColorValue={props.ScheduleColor.NoteFC}
                >
                    {title}
                    {titleDescription}
                    {AttachedLinkDescription} 
                    {calendar} 
                    {time}
                    {FontColor} 
                    {RepeatedDays}
                    {SubmitButton}
            </NoteContainer>
        </FadeIn>
    )
}

export default Schedule;
