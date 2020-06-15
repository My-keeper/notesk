import React, { useState } from 'react';
import './CreateNote.css';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const Note = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [CurrentNote, setNote] = useState({
        title: "",
        content: ""
    });

const handlerChange = (event) => {
    //getting info from the event and they are the name and value of the file that is used 
        //-> we are using distructuring object     // const Name = event.target.name; && const Value = event.target.value;
    const {name , value} = event.target ;
    //sending the given info from the target to the usesate using setNote
    setNote(prevNote => {
        return { 
            ...prevNote,
            [name]: value
        };
    });
}

const subNote = (event) => {
    //to prevent <form> to refresh every time it tragers then use 
    event.preventDefault();
    props.AddedNote(CurrentNote);
    setNote({
        title: "",
        content: ""
    })
}

const expand = (v) => {
    v.isExpanded !== isExpanded && setExpanded(!isExpanded)
  }

    return (
        <div>
            <form className="create-note">
                 <input
                    value={CurrentNote.title} 
                    name="title" 
                    placeholder="Title"
                    onChange={handlerChange}  
                    onClick={expand}  
                    />
                {isExpanded && (
                    <textarea 
                    value={CurrentNote.content} 
                    name="content" 
                    placeholder="Take a note ..." 
                    rows={isExpanded ? 3 : 1}
                    onChange={handlerChange}    
                    />
                    )}
                <Zoom  in={isExpanded}>
                    <Fab onClick={subNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default Note 