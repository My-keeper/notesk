import React, { useState }  from 'react';
import { EditFilled , EditOutlined } from '@ant-design/icons';

const NoteStyle = {
    position: "relative",
    float: "right",
    border: "none",
    fontSize: "16px",
    width: "15%",
}
const notestyle = {
    width: "220px",
}
const fildSize = {
    width: "80%",
}
const divh = {
    width: "100%"
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
                <form style={divh}>
                    <div>
                        <th style={notestyle}>{CurrentNote != "" ? Value = CurrentNote : Value = RecievedNote}</th>
                        <th><div><EditFilled onClick={EditValue} /></div></th>
                    </div>
                </form>
            )
            }
        else {
            return(
                <form style={divh}>
                        <th style={notestyle}><input placeholder={props.note} value = {CurrentNote} onChange={e => setNote(e.target.value)}/></th>
                        <th><div><EditFilled onClick={EditValue} /></div></th>
                </form>
            )
        }        
    }
    return(
        <form >
            {ReAddedHandler()}
        </form>
    )
}

export default ChangeNote;