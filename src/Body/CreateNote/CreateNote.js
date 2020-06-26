import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import FadeIn from 'react-fade-in';
import UserInput from '../../UI/InputArea'
import TextArea from '../../UI/TextArea'

const NoteContainer = styled.div`
    position: relative;
    width: 480px;
    margin: 30px auto 20px auto;
    padding: 15px;
    background: #fff;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
    border-radius: 7px;
`
const TextContainer = 
{
    width: "100%",
    border: "none",
    padding: "4px",
    outline: "none",
    fontSize: "1.2em",
    fontFamily: "inherit",
    resize: "none",
}
const AddNote = styled(FadeIn)`
    font-size :30px;
    color: #f5ba13;
    position: absolute;
    right: 15px;
    bottom: -13px;
    width: 36px;
    height: 36px;
`
const CreateNote = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [CurrentNote, setNote] = useState({title: "",content: ""});
    const [isHover, SetHover] = useState(true);
    const OnHovering = () => {SetHover(!isHover)}
    const subNote = (event) => {
        event.preventDefault();
        props.AddedNote(CurrentNote);
        setNote({
            title: "",
            content: ""
        })
    }
    const handlerChange = (event) => {
        const {name , value} = event.target ;
        setNote(prevNote => { return {...prevNote, [name]: value};});
    }
    const expand = () => {
        setExpanded(true)
    }
    return(
        <NoteContainer>
            {/* <input 
                style={TextContainer}
                value={CurrentNote.title} 
                placeholder="Title"
                name="title" 
                onClick={expand}
                onChange={handlerChange}
            /> */}
            <UserInput
                InputValue={CurrentNote.title}
                name="title"
                inputType={"text"}
                PlaceholderValue={"Title"}
                onchangeValue={handlerChange}
                onClickValue={expand}
                widthInput={"100"}
                BorderValue={"none"}
                paddingVale={"4px"}
                outlineValue={"none"}
                fontSizeValue={"1.2em"}
                fontFamilyValue={"inherit"}
            />
            {isExpanded && [
            // <textarea 
            //     style={TextContainer}
            //     value={CurrentNote.content} 
            //     name="content" 
            //     placeholder="Take a note ..." 
            //     rows={isExpanded ? 3 : 1}
            //     onChange={handlerChange}
            // />,
            <TextArea
                InputValue={CurrentNote.content}
                name="content"
                PlaceholderValue={"Take a note ..."}
                rows={isExpanded ? 3 : 1}
                onchangeValue={handlerChange}
                widthInput={"480px"}
                BorderValue={"none"}
                paddingVale={"4px"}
                outlineValue={"none"}
                fontSizeValue={"1.2em"}
                fontFamilyValue={"inherit"}
            />
            ,
            <AddNote onPointerEnter={OnHovering} onMouseLeave={OnHovering} in={isExpanded}>
                {isHover ? <PlusCircleFilled onClick={subNote}/> : <CheckCircleFilled onClick={subNote}/>}
            </AddNote>]}
        </NoteContainer>
    )
}

export default CreateNote;
