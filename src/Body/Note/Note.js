import React, {useState} from 'react';
import ChangeNote from './ChangeNote/ChangeNote'
import { DeleteFilled , DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FadeIn  from 'react-fade-in';
import NoteContainer from '../../UI/Modal';


const HoveringContainer = styled.div`
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
   const OnHovering = () => {SetHover(!isHover)}
   return(
    <FadeIn>
        <NoteContainer
            background= {"#fff"}
            borderRadiusValue= {"7px"}
            boxShadowValue= {"0 2px 5px #ccc"}
            flexDirectionValue= {"column"}
            padding= {"10px"}
            width= {"240px"}
            margin= {"16px"}
            float= {"left"}
            display= {"flex"}
            backGroundColorValue={props.RecieveColor.NotekBGC}
            >
            <ChangeNote RecieveChangeColor={props.RecieveColor} title={props.title} name="t" note={props.title}/>
            <ChangeNote RecieveChangeColor={props.RecieveColor} content={props.content} name="c" note={props.content}/>
            <HoveringContainer onPointerEnter={OnHovering} onMouseLeave={OnHovering}> 
            <FadeIn> 
                <div></div>
                <div>{isHover ? <DeleteFilled onClick={handleDelete}/>: <DeleteOutlined onClick={handleDelete}/>}</div>
            </FadeIn> 
            </HoveringContainer>
        </NoteContainer>
    </FadeIn>
   )

}
export default Note 