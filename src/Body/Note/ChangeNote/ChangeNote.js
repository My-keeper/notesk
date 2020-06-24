import React, { useState }  from 'react';
import { EditFilled , EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const container ={
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexGrow: "4",
    marginBottom: "10px",
    
}
const firstest = styled.div`

`
const IcionStyling = {
    position: "relative",
    float: "right",
    color: "#f5ba13",
}

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
                <div style={container}>
                        <div style={{width: "90%"}}>{CurrentNote !== "" ? Value = CurrentNote : Value = RecievedNote}</div>
                        <EditOutlined style={IcionStyling} onClick={EditValue}/>

                </div>
            )
            }
        else {
            return(
                <div style={container}>
                        <div style={{width: "90%"}}><input placeholder={props.note} value = {CurrentNote} onChange={e => setNote(e.target.value)}/></div>
                        <EditFilled style={IcionStyling} onClick={EditValue} /> 
                </div>
            )
        }        
    }
    return( ReAddedHandler())
}

export default ChangeNote;