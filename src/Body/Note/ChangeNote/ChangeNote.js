import React, { useState }  from 'react';
import EditFilled from "@material-ui/icons/Edit";

const NoteStyle = {
    position: "relative",
    float: "right",
    border: "none",
    fontSize: "16px",
    width: "15%",
}
const NoteSize = {
    width: "240px",
}
const fildSize = {
    width: "80%",
    margin: "0px 0px 0px 0px",
}


const ChangeNote = (props) => {
    let [CurrentNote, setNote] = useState("")

    const [inVal, exVal] = useState(true);
    const EditValue = (v) => {
        v.inVal !== inVal && exVal(!inVal);
        ReAddedHandler()
    }

    let Name = ""
    props.name === "t" ? Name = props.title : Name = props.content

    const ReAddedHandler = (Value) => {
        if (inVal) { 
            return ( 
            <div style= {NoteSize}>
                <div>{  Value=Name} 
                <div style={NoteStyle}><EditFilled onClick={EditValue} /></div>
                </div>
            </div>
            )
            }
        else {
            return(
            <div style= {NoteSize}>
                <div style={fildSize}><input placeholder={props.note} onChange={e => setNote(e.target.value)}/></div> <EditFilled onClick={EditValue} style={NoteStyle}/>
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