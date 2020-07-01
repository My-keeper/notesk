import React, { useState }  from 'react';
import FadeIn from 'react-fade-in';
import { EditFilled , EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import UserInput from '../../../../UI/UserInput'
import TextArea from '../../../../UI/TextArea'
import NoteContainer from '../../../../UI/Modal'


const IcionStyleing = styled(FadeIn)`
    position: relative;
    float: right;
    color: #f5ba13;
`
const ChangeNote = (props) => {
    const [isHover, SetHover] = useState(true);
    const EditValue = () => { 
        SetHover(!isHover);
        RecievedNote=CurrentNote
    }
    
    let [CurrentNote, setNote] = useState("")
    let RecievedNote = ""
    props.name === "t" ? RecievedNote = props.title : RecievedNote =  props.content

    const ReAddedHandler = (Value) => {
        if (isHover) { 
            return (  
                <FadeIn><NoteContainer
                width= {"100%"}
                display= {"flex"}
                flexDirectionValue= {"row"}
                flexGrowValue= {"4"}
                marginBottomValue= {"5px"}
                backGroundColorValue={props.RecieveChangeColor.NotekBGC}
                FontColorValue={props.RecieveChangeColor.NoteFC}
            >
                 {/* border:"solid", borderWidth:"thin",borderRadius:"5px",height: "24px",marginRight: "8px",borderColor:props.RecieveChangeColor.BorderColor */}
            <div style={{width: "90%"}}>{CurrentNote !== "" ? Value = CurrentNote : Value = RecievedNote}</div>
            <IcionStyleing><EditOutlined onClick={EditValue}/></IcionStyleing>
            </NoteContainer></FadeIn>
            )
            }
        else {
            return(
                <NoteContainer
                    width= {"100%"}
                    display= {"flex"}
                    flexDirectionValue= {"row"}
                    flexGrowValue= {"4"}
                    marginBottomValue= {"10px"}
                    backGroundColorValue={props.RecieveChangeColor.NotekBGC}
                >
                <div style={{width: "90%"}}>
                    {props.name === "t" ?
                    <UserInput 
                    width= {"100%"}
                    BorderValue= {""}
                    padding= {"4px"}
                    outlineValue= "none"
                    fontSizeValue= {"1.2em"}
                    fontFamilyValue= {"inherit"}
                    resizeValue= {"none"}
                    IsCalledValue={"HOVER"}
                    PlaceholderValue={props.note} 
                    InputValue = {CurrentNote}
                    onchangeValue={e => setNote(e.target.value)}                            
                    backGroundColorValue={props.RecieveChangeColor.UserInputBGC}
                    FontColorValue={props.RecieveChangeColor.UserInputFC}
                    PlaceHolderColorValue={props.RecieveChangeColor.UserInputPHC}
                    />
                    :
                    <TextArea 
                    PlaceholderValue={props.note} 
                    InputValue = {CurrentNote} 
                    onchangeValue={e => setNote(e.target.value)}  
                    rows={6}
                    width= {"100%"}
                    BorderValue= {""}
                    padding= {"4px"}
                    outlineValue= "none"
                    fontSizeValue= {"1.2em"}
                    fontFamilyValue= {"inherit"}
                    resizeValue= {"vertical"}
                    IsCalledValue={"HOVER"}
                    backGroundColorValue={props.RecieveChangeColor.TextAreaBGC}
                    FontColorValue={props.RecieveChangeColor.TextAreaFC}
                    PlaceHolderColorValue={props.RecieveChangeColor.TextAreaPHC}
                    />}
                    </div>
                    <IcionStyleing><EditFilled onClick={EditValue}/></IcionStyleing>
                </NoteContainer>
            )
        }        
    }
    return( ReAddedHandler())
}

export default ChangeNote;