import React, { useState }  from 'react';
import EditFilled from "@material-ui/icons/Edit";
import './ChangeNote.css'
const ChangeNote = (props) => {
    let [CurrentNote, setNote] = useState("")
    const [inVal, exVal] = useState(true);
    const EditValue = (v) => {
        v.inVal !== inVal && exVal(!inVal);
        ReAddedHandler()
    }
    let N = ""
    props.name === "t" ? N = props.title : N = props.content
    const ReAddedHandler = (v) => {
        if (inVal) { 
            return ( 
            <div>
                { CurrentNote !== "" ? v=CurrentNote :  v=N}<EditFilled onClick={EditValue} id="i"/>
            </div>
            )
            }
        else {
            return(
            <div>
                <input placeholder={props.note} onChange={e => setNote(e.target.value)}/> <EditFilled onClick={EditValue} id="i"/>
            </div>
            )
        }        
    }
    return(
        <div>
            {ReAddedHandler()}
        </div>
    )
}

export default ChangeNote;