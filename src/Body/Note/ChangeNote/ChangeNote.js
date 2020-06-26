import React, { useState }  from 'react';
import FadeIn from 'react-fade-in';
import { EditFilled , EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import TextArea from '../../../UI/TextArea'
import NoteContainer from '../../../UI/Modal'
import Model from '../../../UI/Modal'
 
const container ={
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexGrow: "4",
    marginBottom: "10px",
    
}

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
                // <div style={container}>
                //         <div style={{width: "90%"}}>{CurrentNote !== "" ? Value = CurrentNote : Value = RecievedNote}</div>
                //         <IcionStyleing><EditOutlined onClick={EditValue}/></IcionStyleing>

                // </div> 
                <Model
                        width= {"100%"}
                        display= {"flex"}
                        flexDirectionValue= {"row"}
                        flexGrowValue= {"4"}
                        marginBottomValue= {"10px"}
                >
                    <div style={{width: "90%"}}>{CurrentNote !== "" ? Value = CurrentNote : Value = RecievedNote}</div>
                        <IcionStyleing><EditOutlined onClick={EditValue}/></IcionStyleing>
                </Model>
            )
            }
        else {
            return(
                <div style={container}>
                        <div style={{width: "90%"}}>
                            {props.name === "t" ?
                            <input 
                            style={TextContainer} 
                            placeholder={props.note} 
                            value = {CurrentNote} 
                            onChange={e => setNote(e.target.value)}/>
                            :
                            <textarea 
                            style={TextContainer} 
                            placeholder={props.note} 
                            value = {CurrentNote} 
                            onChange={e => setNote(e.target.value)}  
                            rows={6}
                            />}
                            </div>
                        <IcionStyleing><EditFilled onClick={EditValue}/></IcionStyleing>
                </div>
            )
        }        
    }
    return( ReAddedHandler())
}

export default ChangeNote;