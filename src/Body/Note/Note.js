import React, {useState} from 'react';
import ChangeNote from './ChangeNote/ChangeNote'
import { DeleteFilled , DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

const NoteContainer = styled.div`
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
    display: flex;
    flex-direction: column;
`
const HoveringContainer = styled(FadeIn)`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 6px;
    margin-right: 6px;
    font-size: 27px;
    color: #f5ba13;
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
        <NoteContainer>
            <ChangeNote title={props.title} name="t" note={props.title}/>
            <ChangeNote content={props.content} name="c" note={props.content}/>
            <HoveringContainer > <DeleteFilled onClick={handleDelete}/> </HoveringContainer>
        </NoteContainer>
   )

}
export default Note 