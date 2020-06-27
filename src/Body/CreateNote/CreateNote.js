import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import FadeIn from 'react-fade-in';
import UserInput from '../../UI/InputArea';
import TextArea from '../../UI/TextArea';
import NoteContainer from '../../UI/Modal';
import SwitchIcion from '../../UI/Switch';


const AddNote = styled.div`
    font-size :30px;
    color: #f5ba13;
    position: absolute;
    right: 25px;
    bottom: -15px;
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
    <FadeIn>
    <NoteContainer
        position= {"relative"}
        width= {"480px"}
        margin= {"30px auto 20px auto"}
        padding= {"15px"}
        boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
        borderRadiusValue= {"7px"}
        resizeValue={"both"}
        backGroundColorValue={props.Color.NotekGC}
        >
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
                IsCalledValue={"FOCUS"} 
                borderRadiusValue= {"7px"}
                backGroundColorValue={props.Color.UserInputBG}
                PlaceHolderColorValue={props.Color.UserInputPH}
                />
            {isExpanded && [<TextArea
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
                resizeValue={"vertical"}
                IsCalledValue={"FOCUS"}
                borderRadiusValue= {"7px"}
                backGroundColorValue={props.Color.TextAreaBGC}
                PlaceHolderColorValue={props.Color.TextAreaPHC}
                />,
                <AddNote onPointerEnter={OnHovering} onMouseLeave={OnHovering} in={isExpanded}>
                <FadeIn>{isHover ? <PlusCircleFilled onClick={subNote}/> :  <CheckCircleFilled onClick={subNote}/>}</FadeIn>
            </AddNote>]}
        </NoteContainer>
    </FadeIn>
    )
}

export default CreateNote;
