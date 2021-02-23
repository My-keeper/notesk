import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal"; 
import { CloseCircleOutlined } from "@ant-design/icons";
import FadeIn from "react-fade-in";
import {TitleContainer,DescriptionContainer,URLContainer} from "../ScheduleForm/Containers/InputContainer";
import {CalenderContianer,TimerContainer} from "../ScheduleForm/Containers/DropDownContainer";
import RDContainer from "../ScheduleForm/Containers/DaysContainer";
import SubmitButton from "../ScheduleForm/Containers/SubmitButton1";
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const EachateContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`


const EditEventForm = (props) => {

    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"24px", 
        marginLeft:"10px"
    }
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"6px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }
    
    // The Event information 
    const Header= <EachateContainer JustifyContentCalue={"flex-end"}>
        <span style={{ 
            padding: "1px" ,paddingTop: "1px" , 
            fontSize: "1.2em", marginLeft: "150px",
            color: `${props.ScheduleColor.IconC}`}}>
                Event Info
        </span> 
        <CloseCircleOutlined
            onClick={()=> props.closedEventForm(true)} 
            style={{marginRight: "12px", marginLeft: "180px", marginBottom: "15px",
            fontSize: "26px", color: props.ScheduleColor.IconC}} // send the color list from the parent App file 
        />
    </EachateContainer>  

    //Title Area
    const [getTitle, ChangeTitle] = useState("");
    const Title = <TitleContainer
            SubmitTitle={(value) => ChangeTitle(value)} //this is to return input value of the title and then send it to submit model
            isEditTitle={props.getTitle} //this is to send the placeholder for the title area
            ScheduleColor={props.ScheduleColor}  // send the color list from the parent App file 
        />  

     //Description Area
    const [getDescription, ChangeDescription] = useState("");
    const Description = (
        <DescriptionContainer
        SubmitDescription={(value) => ChangeDescription(value)}
        isEditDescription={props.getDescription}
        ScheduleColor={props.ScheduleColor}
        />
    );

     //URL Area
    const [getURL, ChangeURL] = useState();
    const URL = (
        <URLContainer
        URLOption={(value) => ChangeURL(value)}
        isEditURL={props.getURL}
        ScheduleColor={props.ScheduleColor}
        />
    );

    //This is to show either the data or repeated days
    const [isShowTime, ChangeisShowTime] = useState(true) //to show the option to change the Time that the user selected
    const ShowData = <div onClick={()=>ChangeisShowTime(!isShowTime)}>
        {isShowTime ?  <RadioButtonUncheckedIcon style={VisibilityStle} /> : <RadioButtonCheckedIcon style={VisibilityStle} /> }
    </div>
    const isData = <EachateContainer>
            <DateRangeIcon style={IconColor}/>   
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "50px"}}>Selected Data of Event</span>
        </EachateContainer>
    const isRepeated = <EachateContainer>
            <AddAlertIcon style={IconColor}/>   
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "20px"}}>Select days of repeated Event and its Time</span>
        </EachateContainer>
    const IcionArea = <EachateContainer> 
        {ShowData} 
        {isShowTime ? isData : isRepeated }
        </EachateContainer>

    // Data From and To
    const [getFormDate, ChangeFormDate] = useState(); //this is the data that will be send to submit model to be added to the event list 
    const [getToDate, ChangeToDate] = useState();  //this is the data that will be send to submit model to be added to the event list 

    // const StartDate= props.SendSelectedSD //This is the selected data in calendar
    // const EndDate= props.SendSelectedED//This is the selected data in calendar  
    const Data = ( !isShowTime ? null :
        <CalenderContianer
        // SendSD={StartDate} //This is to send back the selected started data
        // SendED={EndDate} //This is to send back the selected ended data
        GetFromDate={(value) => ChangeFormDate(value)} //Returning the selected data that the user chose 
        GetToDate={(value) => ChangeToDate(value)} //Returning the selected data that the user chose 
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        /> 
    );

     //This is for the time
     const [StartHours, ChangeStartHour] = useState(); //have returned starting hour if time is needed
     const [StartMinuts, ChangeStartMinuts] = useState(); //have returned starting minut if time is needed 
     const [EndHours, ChangeEndHour] = useState(); //have returned Ending hour if time is needed
     const [EndMinuts, ChangeEndMinuts] = useState(); //have returned Ending minut if time is needed 
     const [TimeClicked, ChangeTimeClicked] = useState() //this to make sure that time is included or not and show the repeated days model
     const Time = ( isShowTime ? null :
         <TimerContainer
         SendShowTime={isShowTime}
         FromHourSelected={(value) => ChangeStartHour(value)} // return starting hour if time is needed
         FromMinutsSelected={(value) => ChangeStartMinuts(value)} // return starting minut if time is needed 
         ToHourSelected={(value) => ChangeEndHour(value)} // return Ending hour if time is needed
         ToMinutsSelected={(value) => ChangeEndMinuts(value)} // return Ending minut if time is needed 
         ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
         isTime={(value) => ChangeTimeClicked(value)}
         />
         );
         
     //this is for number of rebeated days 
     const [GetRepeatedDays, ChangeRepeatedDays] = useState()
     const RepeatedDays =( isShowTime ? null :<RDContainer
         ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
         SubmitNumberOfRP={(value) => ChangeRepeatedDays(value)} //returning the value of repeated days 
         />
     );

    const EditForm = (
        <FadeIn>
            <NoteContainer
                position={"relative"}
                width={"520px"}
                margin={"30px auto 20px auto"}
                padding={"15px"}
                boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue={"7px"}
                resizeValue={"both"}
                backGroundColorValue={props.ScheduleColor.NotekBGC} //// send the color list from the parent App file 
                FontColorValue={props.ScheduleColor.NoteFC} //// send the color list from the parent App file 
                >
                    {Header}
                    {Title}
                    {Description}
                    {URL}
                    {IcionArea}
                    {Data}
                    {Time}
                    {RepeatedDays}
            </NoteContainer> 
        </FadeIn>
    );

  return EditForm;

}

export default EditEventForm;
