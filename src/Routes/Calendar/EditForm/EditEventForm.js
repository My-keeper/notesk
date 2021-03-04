import React, { useState } from "react";
import styled from "styled-components";
import NoteContainer from "../../../UI/Modal"; 
import { CloseCircleOutlined, CheckCircleOutlined, CheckCircleFilled, EditFilled, EditOutlined } from "@ant-design/icons";
import FadeIn from "react-fade-in";
import {TitleContainer,DescriptionContainer,URLContainer} from "./TextInputContainer";
import {CalenderContianer,TimerContainer} from "./Date-TimeContainer";
import RDContainer from "../ScheduleForm/Containers/DaysContainer";
import SubmitButton from "../ScheduleForm/Containers/SubmitButton";
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SubmitChanges from './submitChanges';
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
      color: props.ScheduleColor.IconC,
      fontSize: "24px",
      marginTop: "2px",
      marginLeft: "60px",
    };
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"7px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }
    //DateStyle and unDateStyle color style 
    const ShowDateStle = {
        marginRight: "4px", 
        marginLeft:"60px",
        marginTop:"7px" , 
        fontSize: "18px", 
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
    const ShowData = isShowTime ?  
        <EditOutlined  
            onClick={()=>ChangeisShowTime(false)}
            style={VisibilityStle} 
        /> 
        : 
        <EditFilled 
            onClick={()=>ChangeisShowTime(true)}
            style={VisibilityStle} 
        /> 
    //This is for the layout for Year Month Days 
    const InfoArea = <EachateContainer>
            <DateRangeIcon style={IconColor}/>
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "20px"}}>Selected Data</span>
        </EachateContainer>
    const isRepeated = <EachateContainer>
            <AddAlertIcon style={IconColor}/>   
            <span style={{paddingTop: "4px" ,fontSize: "1em", marginLeft: "20px"}}>Select days of repeated Event and its Time</span>
        </EachateContainer>
    //This is for the Data area or the Repeated Date area
    const IcionArea = <EachateContainer> 
        {ShowData} 
        {isShowTime ? InfoArea : isRepeated }
        </EachateContainer>

    // Data From and To
    const [getFormDate, ChangeFormDate] = useState(); //this is the data that will be send to submit model to be added to the event list 
    const [getToDate, ChangeToDate] = useState();  //this is the data that will be send to submit model to be added to the event list 
    const StartDate= props.getStartedClickedEvent //This is the selected data in calendar for edit passing down from EventForm
    const EndDate= props.getEndededClickedEvent//This is the selected data in calendar  for edit passing down from EventForm
    const [EditTime, ChangeEditedTime ] = useState("")
    const Data = ( !isShowTime ? null :
        <CalenderContianer
        SendSD={StartDate} //This is to send back the selected started data
        SendED={EndDate} //This is to send back the selected ended data
        GetFromDate={(value) => ChangeFormDate(value)} //Returning the selected data that the user chose 
        GetToDate={(value) => ChangeToDate(value)} //Returning the selected data that the user chose
        GetIsSelectedDate={(value)=>ChangeEditedTime(value)} //To pass down to Time to show when the user want to chagne time 
        ScheduleColor={props.ScheduleColor} // send the color list from the parent App file  
        /> 
    );

    //This is for the time
    const [StartHours, ChangeStartHour] = useState(); //have returned starting hour if time is needed
    const [StartMinuts, ChangeStartMinuts] = useState(); //have returned starting minut if time is needed 
    const [EndHours, ChangeEndHour] = useState(); //have returned Ending hour if time is needed
    const [EndMinuts, ChangeEndMinuts] = useState(); //have returned Ending minut if time is needed 
    const [TimeClicked, ChangeTimeClicked] = useState() //this to make sure that time is included or not and show the repeated days model
    const Time = ( EditTime ? null :
        <TimerContainer
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
    
    const submitChanges = <SubmitChanges 
        PassEventsInfoList={props.EventsInfoList}//list of all the Events created and compare it with the changed one
        TheIdOfClickedEvent={props.IDofClickedEvent} //the clicked event ID
        ReturnChangedEvents={(value) => props.ChangeOldEvents(value)} //Delete selected event from all event and close model
        isCloseModel={(value) => props.CloseModel(value)} //to return true if clicked
        ColorChange={props.ScheduleColor} 
    />;

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
          {submitChanges}
        </NoteContainer>
      </FadeIn>
    );

  return EditForm;

}

export default EditEventForm;
