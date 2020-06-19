import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import ChangeNote from './ChangeNote/ChangeNote'

const NoteStyle = {
    background: "#fff",
  borderRadius: "7px",
  boxShadow: "0 2px 5px #ccc",
  padding: "10px",
  width: "240px",
  margin: "16px",
  float: "left",
}
const header = {
    fontSize: "1.1em",
    marginBottom: "6px",
}
const buttonStyle ={
    position: "relative",
    float: "right",
    marginRight: "10px",
    color: "#f5ba13",
    border: "none",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    outline: "none",
}

const Note = (props) => 
{    
    const handleDelete = () => {
        props.onDelete(props.id);
   }

   return(
        <div style={NoteStyle}>
            <h1 style={header}><ChangeNote title={props.title} name="t" note="Changing Title "/></h1>
            <h1 style={header}><ChangeNote content={props.content} name="c" note="Changing Note"/></h1>
            <button style={buttonStyle} onClick={handleDelete}><DeleteIcon /></button>
        </div>
   )

}
export default Note 