import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import ChangeNote from './ChangeNote/ChangeNote'
import { DeleteFilled , DeleteOutlined } from '@ant-design/icons';

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
    width : "240px%"
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

const Hover= {
    position: "relative",
    fontSize: "27px",
    float: "right",
    marginRight: "10px",
    color: "#f5ba13",
    border: "none",
}

const Note = (props) => 
{    
    const handleDelete = () => {
        props.onDelete(props.id);
   }

   return(
        <table style={NoteStyle}>
            <h1 style={header}><ChangeNote title={props.title} name="t" note={props.title}/></h1>
            <h1 style={header}><ChangeNote content={props.content} name="c" note={props.content}/></h1> 
            {/* <button style={buttonStyle} onClick={handleDelete}><DeleteIcon /></button> */}
            <div style={Hover}><DeleteFilled /></div>
            <DeleteOutlined />

        </table>
   )

}
export default Note 