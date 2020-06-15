import React, { useState }  from 'react';
import './Note.css';
import DeleteIcon from "@material-ui/icons/Delete";
import ChangeNote from './ChangeNote/ChangeNote'

const Note = (props) => 
{    
    const handleDelete = () => {
        props.onDelete(props.id);
   }

   return(
        <div className="note">
            <h1><ChangeNote title={props.title} name="t" note="Changing Title "/></h1>
            <p><ChangeNote content={props.content} name="c" note="Changing Note"/></p>
            <button onClick={handleDelete}><DeleteIcon /></button>
        </div>
   )

}
export default Note 