import React, {useState} from 'react';
import { DeleteFilled , DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FadeIn  from 'react-fade-in';
import NoteContainer from '../../../UI/Modal';
import UserInput from '../../../UI/UserInput'
import TextArea from '../../../UI/TextArea'

const HoveringContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 6px;
    margin-right: 6px;
    font-size: 27px;
    color: #f5ba13;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const IcionStyleing = styled.div`
    position: relative;
    float: right;
    color: #f5ba13;
`

const Div =styled.div`
background: #fff;
border-radius: 7px;
box-shadow: 0 2px 5px #ccc;
padding: 10px;
width: 240px;
margin: 16px;
float: left;
`

const Note = (props) => 
{   
    //this is for deleting the note 
    const handleDelete = () => {props.onDelete(props.id);}    
    //this is for the Hovering for the delete Icon
    const [isHover, SetHover] = useState(true);
    const OnHovering = () => {SetHover(!isHover)}
    
   return(
    // <FadeIn>
        // <NoteContainer
        //     background= {"#fff"}
        //     borderRadiusValue= {"7px"}
        //     boxShadowValue= {"0 2px 5px #ccc"}
        //     flexDirectionValue= {"column"}
        //     padding= {"10px"}
        //     width= {"240px"}
        //     margin= {"16px"}
        //     float= {"left"}
        //     display= {"flex"}
        //     // backGroundColorValue={props.RecieveColor.NotekBGC}
        //     // FontColorValue={props.RecieveColor.NoteFC}
        //     >
        <Div>

            <FadeIn>{props.title}</FadeIn>
            <FadeIn>{props.content}</FadeIn>
            <HoveringContainer > 
                {isHover ? 
                <FadeIn><DeleteFilled onClick={handleDelete} onPointerEnter={OnHovering} onMouseLeave={OnHovering}/></FadeIn>: 
                <FadeIn><DeleteOutlined onClick={handleDelete} onPointerEnter={OnHovering} onMouseLeave={OnHovering}/></FadeIn>}
            </HoveringContainer>
        </Div>
            
        // </NoteContainer>
    /* </FadeIn> */
   )

}
export default Note 











    // //this is for changing the title
    // const [TitleClicked, ChangeTitleClicked] = useState(true)
    // let [RecievedTitle, ChangeRecievedTitle] = useState("")
    // const TitleHandler = () =>{return(ChangeTitleClicked(false),ChangeRecievedTitle(props.title)) }
    // const changeTItleHandler = () => {return(ChangeTitleClicked(true) , props.ChangeTitle(props.id, RecievedTitle), ChangeRecievedTitle(""))}
    // const handlingTitle =() => {
    //     if (TitleClicked) {
    //         return(
    //         <FadeIn>
    //         <Container>
    //             <FadeIn>{ props.title}</FadeIn>
    //             <FadeIn><IcionStyleing><EditOutlined onClick={TitleHandler}/></IcionStyleing></FadeIn>
    //         </Container>
    //         </FadeIn>
    //         )
    //     }
    //     // else
    //     // {
    //     //     return(
    //     //     <FadeIn>
    //     //     <Container>
    //     //         <FadeIn>
    //     //         <UserInput 
    //     //             width= {"100%"}
    //     //             BorderValue= {""}
    //     //             padding= {"4px"}
    //     //             outlineValue= "none"
    //     //             fontSizeValue= {"1.2em"}
    //     //             fontFamilyValue= {"inherit"} 
    //     //             resizeValue= {"none"}
    //     //             IsCalledValue={"HOVER"}
    //     //             PlaceholderValue={props.title} 
    //     //             InputValue = {RecievedTitle}
    //     //             onchangeValue={e => ChangeRecievedTitle(e.target.value)}                            
    //     //             backGroundColorValue={props.RecieveColor.UserInputBGC}
    //     //             FontColorValue={props.RecieveColor.UserInputFC}
    //     //             PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
    //     //         />
    //     //         </FadeIn>
    //     //         <FadeIn><IcionStyleing><EditOutlined onClick={changeTItleHandler} /></IcionStyleing></FadeIn>
    //     //     </Container>
    //     //     </FadeIn>
    //     //     )
    //     // }
    // }
    // //this is for changing the content
    // const [ContentClicked, ChangeContentClicked] = useState(true)
    // let [RecievedContent, ChangeRecievedContent] = useState("")
    // const ContentHandler = () =>{return(ChangeContentClicked(false),ChangeRecievedContent(props.content)) }
    // const changeContentHandler = () => {return(ChangeContentClicked(true) , props.ChangeContent(props.id, RecievedContent), ChangeRecievedContent(""))}
    // const handlingContent =() => {
    //     if (ContentClicked) {
    //         return(
    //         <FadeIn>
    //         <Container>
    //             <FadeIn>{ props.content}</FadeIn>
    //             <FadeIn><IcionStyleing><EditOutlined onClick={ContentHandler}/></IcionStyleing></FadeIn>
    //         </Container>
    //         </FadeIn>
    //         )
    //     }
    //     // else
    //     // {
    //     //     return(
    //     //     <FadeIn>
    //     //     <Container>
    //     //         <FadeIn>
    //     //         <TextArea 
    //     //             PlaceholderValue={props.content} 
    //     //             InputValue = {RecievedContent} 
    //     //             onchangeValue={e => ChangeRecievedContent(e.target.value)}  
    //     //             rows={6}
    //     //             width= {"100%"}
    //     //             BorderValue= {""}
    //     //             padding= {"4px"}
    //     //             outlineValue= "none"
    //     //             fontSizeValue= {"1.2em"}
    //     //             fontFamilyValue= {"inherit"}
    //     //             resizeValue= {"vertical"}
    //     //             IsCalledValue={"HOVER"}
    //     //             backGroundColorValue={props.RecieveColor.TextAreaBGC}
    //     //             FontColorValue={props.RecieveColor.TextAreaFC}
    //     //             PlaceHolderColorValue={props.RecieveColor.TextAreaPHC}
    //     //         />
    //     //         </FadeIn>
    //     //         <FadeIn><IcionStyleing><EditOutlined onClick={changeContentHandler} /></IcionStyleing></FadeIn>
    //     //     </Container>
    //     //     </FadeIn>
    //     //     )
    //     // }
    // }   