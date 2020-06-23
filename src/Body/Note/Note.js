import React, {useState} from 'react';
import ChangeNote from './ChangeNote/ChangeNote'
import { DeleteFilled , DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const NoteStyle = {
    background: "#c1c1c1",
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
// const Hover= {
//     position: "relative",
//     fontSize: "27px",
//     float: "right",
//     marginRight: "10px",
//     color: "#f5ba13",
//     border: "none",
// }
const HoveringContainer = styled.div`
    position: relative;
    font-size: 27px;
    float: right;
    margin-right: 10px;
    color: #f5ba13;
    border: none;
`

const Note = (props) => 
{    
    const handleDelete = () => {
        props.onDelete(props.id);
   }    
   const [isHover, SetHover] = useState(true);
   
   const OnHovering = (v) => {
        v.Hover !== isHover && SetHover(!isHover)
   }
   return(
        <table style={NoteStyle}>
            <h1 style={header}><ChangeNote title={props.title} name="t" note={props.title}/></h1>
            <h1 style={header}><ChangeNote content={props.content} name="c" note={props.content}/></h1>
            <HoveringContainer onPointerEnter={OnHovering} onMouseLeave={OnHovering}>
            {isHover ? <DeleteFilled onClick={handleDelete}/> : <DeleteOutlined onClick={handleDelete}/>}
            </HoveringContainer>
            {/* <div style={Hover} onPointerEnter={OnHovering} onMouseLeave={OnHovering}>
                 {isHover ? <DeleteFilled onClick={handleDelete}/> : <DeleteOutlined onClick={handleDelete}/>} 
            </div> */}

        </table>
   )

}
export default Note 