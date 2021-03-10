import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import FadeIn from 'react-fade-in';
import UserInput from '../../../UI/UserInput';
import TextArea from '../../../UI/TextArea';
import NoteContainer from '../../../UI/Modal';
import { SentimentVeryDissatisfied, Title, ImportContacts ,SentimentVerySatisfied} from '@material-ui/icons';
import API from "../../../API/API";

const AddNote = styled.div`
    font-size :30px;
    color: #f5ba13;
    position: absolute;
    right: 0px;
    bottom: -15px;
    width: 36px;
    height: 36px;
`
const InfoContainer = styled.div`
    width: 455px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
    `
const CreateNote = (props) => {
    const IconColor = { color : props.RecieveColor.IconC }
    const [isExpanded, setExpanded] = useState(false);
    const [isSubmit, setSubmit] = useState(false); 
    const [CurrentNote, setNote] = useState({title: "",content: "", id: ""}); 
    const [CurrentPlaceHolde, setPlaceHolder]= useState({titlePH: "Title" , contentPH: "Take a note ..."})
    const [isHover, SetHover] = useState(true);
    const OnHovering = () => {SetHover(!isHover)}
    const subNote = async (event) =>  {
        event.preventDefault();
        setSubmit(true);
        if (CurrentNote.title === "" && CurrentNote.content === "" )
        {   
        return( <FadeIn>{
            setPlaceHolder({ titlePH: "Please Enter A Title ....(-_-)!", contentPH: "Please Enter some Content ...(-_-)!"}) 
            && isIconUserInput() && isIconTextArea()}
        </FadeIn> )
        } 
        else  if (CurrentNote.title === "" )
        {  
        return( <FadeIn>{
            setPlaceHolder({titlePH: "Please Enter A Title ....(-_-)"}) 
            && isIconUserInput()}
        </FadeIn>)
                
        } else if (CurrentNote.content === "" )
        {
        return( <FadeIn>{
            setPlaceHolder({contentPH: "Please Enter some Content ...(-_-)!"}) 
            && isIconTextArea()}
        </FadeIn>)
        }else
        {
            const isLoggedIn = await API.isLoggedIn();
            if(isLoggedIn){
                return API.CreateNote(CurrentNote.title, CurrentNote.content, (note)=>{
                    setNote({note})
                    props.AddedNote(note)
                    setNote({
                        title: "",
                        content: "",
                        id: ""
                    })
                    setPlaceHolder({
                        titlePH: "Title" , 
                        contentPH: "Take a note ..."
                    })
                    setSubmit(false)
                } ) 
            }
            props.AddedNote(CurrentNote)
            setNote({
                title: "",
                content: "",
                id: ""
            })
            setPlaceHolder({
                titlePH: "Title" , 
                contentPH: "Take a note ..."
            })
            setSubmit(false)

        }  
        
    }
    
    const isIconUserInput = () => 
    (!isSubmit ? 
        (CurrentNote.title === "" ? <SentimentVerySatisfied style={IconColor}/> : <Title style={IconColor}/>) 
        : (CurrentNote.title === "" ? <SentimentVeryDissatisfied style={IconColor}/> : <Title style={IconColor}/>))
    const isIconTextArea = () => 
    (!isSubmit ? 
        (CurrentNote.content === "" ? <SentimentVerySatisfied style={IconColor}/> : <ImportContacts style={IconColor}/>) 
        : (CurrentNote.content === "" ? <SentimentVeryDissatisfied style={IconColor}/> : <ImportContacts style={IconColor}/>))
    const handlerChange = (event) => {
        const {name , value} = event.target ;
        setNote(prevNote => { return {...prevNote, [name]: value};});
    }
    const expand = () => {setExpanded(true)}
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
        backGroundColorValue={props.RecieveColor.NotekBGC}
        >
        <InfoContainer>
            <FadeIn><UserInput
            InputValue={CurrentNote.title}
            name="title"
            inputType={"text"}
            PlaceholderValue={CurrentPlaceHolde.titlePH}
            onchangeValue={handlerChange}
            onClickValue={expand}
            widthValue={"421px"}
            paddingVale={"4px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            borderRadiusValue= {"7px"}
            backGroundColorValue={props.RecieveColor.UserInputBGC}
            FontColorValue={props.RecieveColor.UserInputFC}
            PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
            borderColorValue={props.RecieveColor.BorderColor}
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /></FadeIn>
            <FadeIn>{ isIconUserInput()}</FadeIn>
        </InfoContainer>
            {isExpanded && 
        <InfoContainer>
            <FadeIn><TextArea
            InputValue={CurrentNote.content}
            name="content"
            PlaceholderValue={CurrentPlaceHolde.contentPH}
            rows={isExpanded ? 3 : 1}
            onchangeValue={handlerChange}
            widthValue={"421px"}
            paddingVale={"4px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            resizeValue={"vertical"}
            IsCalledValue={"FOCUS"}
            borderRadiusValue= {"7px"}
            backGroundColorValue={props.RecieveColor.TextAreaBGC}
            FontColorValue={props.RecieveColor.TextAreaFC}
            PlaceHolderColorValue={props.RecieveColor.TextAreaPHC}
            borderColorValue={props.RecieveColor.BorderColor}
            BorderValue={"solid"}
            borderWidthValue="thin"
            marginRightValue={"10px"}
            /> </FadeIn>
            <FadeIn>{isIconTextArea()}</FadeIn>
        </InfoContainer>}
            {isExpanded && 
            <AddNote onPointerEnter={OnHovering} onMouseLeave={OnHovering}>
                <FadeIn>{isHover ? <PlusCircleFilled /> :  <CheckCircleFilled onClick={subNote}/>}</FadeIn>
            </AddNote>}
        </NoteContainer>
    </FadeIn>
    )
}

export default CreateNote;
