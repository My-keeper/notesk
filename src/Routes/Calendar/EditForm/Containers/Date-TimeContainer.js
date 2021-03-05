import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined , ClockCircleOutlined} from "@ant-design/icons"; 
import TimeSelected from '../../DataCollection/TimeSelected';
import DateSelected from '../../DataCollection/DateSelected';
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { CloseCircleOutlined, CheckCircleOutlined, CheckCircleFilled, EditFilled, EditOutlined } from "@ant-design/icons";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 14px;
`
const EachateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
    margin-left: ${props => props.MarginLeft ? props.MarginLeft : null }
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const CalenderContianer = (props) => {
    //DateStyle and unDateStyle color style 
    const ShowDateStle = {
        marginRight: "4px", 
        marginLeft:"51px",
        marginTop:"7px" , 
        fontSize: "18px", 
        color : props.ScheduleColor.IconC
    }
    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }
    
    // This is a togole to change the state of the disabled and to change the icion as well 
    const InconArea = <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><CalendarOutlined style={IconColor}/> </FadeIn> 
        </div>

    //This is for the layout for Year Month Days  
    const [isSelectedDate, ChangeSelectedDate]= useState(true)
    props.GetIsSelectedDate(isSelectedDate)
    const ChangeSelectedData= isSelectedDate ?  
        <RadioButtonUncheckedIcon 
            onClick={()=>ChangeSelectedDate(false)}
            style={ShowDateStle}
        /> 
        : 
        <CheckCircleFilled 
            onClick={()=>ChangeSelectedDate(true)}
            style={ShowDateStle} 
        />
    //This is to switch between The selected date and the date that the user want to change 
    const isData = <EachateContainer> 
            {ChangeSelectedData}
           { isSelectedDate ? 
                <span style={{paddingTop: "7px" ,fontSize: "1em", marginLeft: "5px"}}> Chick to Change Selected Date of Event</span>
                :
                <span style={{paddingTop: "7px" ,fontSize: "1em", marginLeft: "5px"}}> Chick to Retun to Selected Date of Event</span>}
        </EachateContainer>
    //Starting Data Area
    const [fromData, ChangeFromDate] = useState("") 
    console.log(props.SendSD)
    const StartingData = <EachateContainer JustifyContentCalue={ ""}>
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
            { isSelectedDate ? <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px", color:props.ScheduleColor.IconC}}>{props.SendSD}</span></FadeIn> 
                :
                <DateSelected
                //These are used to send these data to DataSlected to be used for Year, Month, Day 
                ReturnFrom="From"
                ReturnClickedFromYear={props.SendSD.toString().slice(7,11)}
                ReturnClickedFromMonth={props.SendSD.toString().slice(0,3)} 
                ReturnClickedFromDay={props.SendSD.toString().slice(4,6)}
                name="start"
                //The incoming dating is used to chagne the format of the date and then send that number to submission button
                submitDateValue={(value) => ChangeFromDate(value)} 
                RecievedColor={props.ScheduleColor}
                />
            }
        </EachateContainer>
    
    // End Data Area
    const [ToData, ChangeToDate] = useState("")
    const EndingingData = <EachateContainer JustifyContentCalue={ ""}>
            <FadeIn><span style={{  padding: "4px" , fontSize: "1.2em", marginRight: "25px"}}>To</span></FadeIn>
            { isSelectedDate ? <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px", color:props.ScheduleColor.IconC }}>{props.SendED}</span></FadeIn> 
                :
                <DateSelected
                //These are used to send these data to DataSlected to be used for Year, Month, Day 
                ReturnFrom="To"
                ReturnClickedToYear={props.SendED.toString().slice(7,11)}
                ReturnClickedToMonth={props.SendED.toString().slice(0,3)} 
                ReturnClickedToDay={props.SendED.toString().slice(4,6)}
                name="end"
                //The incoming dating is used to chagne the format of the date and then send that number to submission button
                submitDateValue={(value) => ChangeToDate(value)} 
                RecievedColor={props.ScheduleColor}
            />
            }
        </EachateContainer>
    
    //This is the returned Date to the calendar
    const calendar = <InfoContainer>
            {InconArea}
            <DateContainer> 
                {isData}
                {StartingData}
                {EndingingData}
            </DateContainer>
        </InfoContainer>

    //To recieve a prop that will change the value from and to inside the schedule form to the value of From/to Date that has been created here  
    props.GetFromDate(props.SendSD) //Return either the selected data from the calendar form or the changed data by the user
    props.GetToDate(props.SendED) //Return either the selected data from the calendar form or the changed data by the user
    
    return(calendar)
}

const TimerContainer = (props) => {
    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px"
    }
    //DateStyle and unDateStyle color style 
    const ShowDateStle = {
        marginRight: "4px", 
        marginLeft:"51px",
        marginTop:"7px" , 
        fontSize: "18px", 
        color : props.ScheduleColor.IconC
    }
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"7px" , 
        fontSize: "18px", 
        color : props.ScheduleColor.IconC
    }

    
    const [isShowTime, ChangeisShowTime] = useState(true) //to show the option to change the Time that the user selected
    //this is the part where we change the icon based on clicking the div 
    const ShowData = <FadeIn>
        {isShowTime ?  null : 
            <CheckCircleFilled 
                onClick={()=>ChangeisShowTime(true)}
                style={VisibilityStle} />} 
        </FadeIn>
    const IcionArea = <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><ClockCircleOutlined style={IconColor}/>  </FadeIn>
            <FadeIn>{ShowData}</FadeIn>
        </div>
    const isDefulatTime = 
        <DateContainer>
            <FadeIn>
                <EachateContainer>
                    {isShowTime ? <RadioButtonUncheckedIcon onClick={()=>ChangeisShowTime(false)} style={ShowDateStle}/> : null} 
                    <span style={{paddingTop: "6px" ,fontSize: "1em", marginLeft: "5px"}}>By defualt the time set to 12 pm </span> 
                </EachateContainer>
            </FadeIn>
            <FadeIn><span style={{paddingBottom: "4px" ,fontSize: "1em", marginLeft: "60px"}}>Click the Circle to choose certain time</span></FadeIn>
        </DateContainer>

        //This is for the layout for Hour Minuts Day system
        const InfoArea = (isShowTime ? 
            isDefulatTime
            :
            <EachateContainer JustifyContentCalue={"space-between" }>
                        <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}> </span></FadeIn> 
                        <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{"Hour"}</span></FadeIn> 
                        <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{"Minuts"}</span></FadeIn> 
                        <FadeIn ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{"AM / PM"}</span></FadeIn> 
            </EachateContainer>
        );

    //collection of stating time for event
    const [StartHoursValue, ChangeStartHourValue ]= useState() //save the Starting Hour
    const [StartMinutsValue, ChangeStartMinutsValue ]= useState() //save the starting Minuts
    const [StartDayValue, ChangeStartDayValue ]= useState() //save starting if it is AM or PM
    const StartingTime = isShowTime ? null : <EachateContainer JustifyContentCalue={"space-between" }>
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>Start</span></FadeIn>
            <TimeSelected 
                submitHourValue={(value) => ChangeStartHourValue(value)}
                submitMinutsValue={(value) => ChangeStartMinutsValue(value)}
                submitDayValue={(value) => ChangeStartDayValue(value)}
                RecievedColor={props.ScheduleColor}
                //this is to disable the values that are inside and it is going to DataSelected
                DisabledisClicked={isShowTime} 
                />
        </EachateContainer>
    
    //collection of ending time for event
    const [EndHoursValue, ChangeEndHourValue ]= useState() //save the Ending Hour
    const [EndMinutsValue, ChangeEndMinutsValue ]= useState() //save the Ending Minuts
    const [EndDayValue, ChangeEndDayValue ]= useState() //save Ending if it is AM or PM
    const EndingTime = isShowTime ? null : <EachateContainer  MarginLeft={"10px"}  JustifyContentCalue={"space-between" }>
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>End</span></FadeIn>
            <TimeSelected 
                submitHourValue={(value) => ChangeEndHourValue(value)}
                submitMinutsValue={(value) => ChangeEndMinutsValue(value)}
                submitDayValue={(value) => ChangeEndDayValue(value)}
                RecievedColor={props.ScheduleColor}
                //this is to disable the values that are inside and it is going to DataSelected
                DisabledisClicked={isShowTime} 
                />
        </EachateContainer>
 
    const time = (
      <InfoContainer>
        {IcionArea}
        <DateContainer> 
            {InfoArea}
          {StartingTime}
          {EndingTime}
        </DateContainer>
      </InfoContainer>
    );

    props.FromHourSelected(StartDayValue === "PM" ? String(parseInt(StartHoursValue,10) + 12) : StartHoursValue) //this where we convert the returned hour from 12 hour system to 24 hour system 
    props.FromMinutsSelected(StartMinutsValue)
    props.ToHourSelected(EndDayValue === "PM" ? String(parseInt(EndHoursValue,10) + 12) : EndHoursValue) //this where we convert the returned hour To 12 hour system to 24 hour system 
    props.ToMinutsSelected(EndMinutsValue);
    props.isTime(isShowTime) 
    return (time)
}

export  {CalenderContianer, TimerContainer};