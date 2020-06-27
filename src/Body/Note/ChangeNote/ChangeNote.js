import React, { useState }  from 'react';
import FadeIn from 'react-fade-in';
import { EditFilled , EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import UserInput from '../../../UI/InputArea'
import TextArea from '../../../UI/TextArea'
import NoteContainer from '../../../UI/Modal'
 
// const container ={
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     flexGrow: "4",
//     marginBottom: "10px",
    
// }

const TextContainer = {
    width: "100%",
    border: "",
    padding: "4px",
    outline: "none",
    fontSize: "1.2em",
    fontFamily: "inherit",
    resize: "none",
}
const IcionStyleing = styled(FadeIn)`
    position: relative;
    float: right;
    color: #f5ba13;
`
const ChangeNote = (props) => {
    const [inVal, exVal] = useState(true);
    const EditValue = (v) => { 
        v.inVal !== inVal && exVal(!inVal);
        RecievedNote=CurrentNote
    }
    
    let [CurrentNote, setNote] = useState("")
    let RecievedNote = ""
    props.name === "t" ? RecievedNote = props.title : RecievedNote =  props.content

    const ReAddedHandler = (Value) => {
        if (inVal) { 
            return (  
                <NoteContainer
                        width= {"100%"}
                        display= {"flex"}
                        flexDirectionValue= {"row"}
                        flexGrowValue= {"4"}
                        marginBottomValue= {"10px"}
                >
                    <div style={{width: "90%"}}>{CurrentNote !== "" ? Value = CurrentNote : Value = RecievedNote}</div>
                        <IcionStyleing><EditOutlined onClick={EditValue}/></IcionStyleing>
                </NoteContainer>
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
                            onchangeValue={e => setNote(e.target.value)}/>
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