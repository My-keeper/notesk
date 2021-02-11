import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined , ClockCircleOutlined} from "@ant-design/icons"; 
import DateSelected from './DataCollection/DateSelected';
import TimeSelected from './DataCollection/TimeSelected';
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { createEventId } from "../../event-utils";

const InfoContainer = styled.div`
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 4px;
    margin-bottom: 10px;
`
const EachateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.JustifyContentCalue};
    margin: 4px;
`
const DateContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const CalenderContianer = (props) => {
    //All Component Color Stle
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"15px", 
        marginTop:"4px" 
    }

    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"6px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }
    
    // This is a togole to change the state of the disabled and to change the icion as well 
    const [isStartedData, ChangeisStartedData] = useState(false) //to show the option to change the data that the user selected

    const StartingDataIcion = <FadeIn><div  onClick={()=>ChangeisStartedData(!isStartedData)}>
            {isStartedData ?  
                <VisibilityOffIcon style={VisibilityStle} /> 
            : 
                <VisibilityIcon style={VisibilityStle} />}
        </div></FadeIn>
    const [isEndedData, ChangeisEndedData] = useState(false) //to show the option to change the data that the user selected
    const EndingDataIcion = <FadeIn><div  onClick={()=>ChangeisEndedData(!isEndedData)}>
            {isEndedData ?  <VisibilityOffIcon style={VisibilityStle} /> : <VisibilityIcon style={VisibilityStle} />}
        </div></FadeIn>

    const InconArea = <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><CalendarOutlined style={IconColor}/> </FadeIn>
            {StartingDataIcion}
            {EndingDataIcion}
        </div>

    //This is for the layout for Year Month Days
    const Layout = ['','Year','Month','Day'] 
    const InfoArea = <EachateContainer JustifyContentCalue={"space-between" }>
            {(isStartedData || isEndedData ) ? Layout.map((value, index) => 
                <FadeIn key={index+ createEventId()} ><span  style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "30px"}}>{value}</span></FadeIn> 
            ) : <FadeIn><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginLeft: "150px"}}>Selected Data</span></FadeIn>}
        </EachateContainer>

    //Starting Data Area
    const [fromData, ChangeFromDate] = useState("") 
    const StartingData = <EachateContainer JustifyContentCalue={isStartedData ? "space-between" : ""}>
        <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
        {!isStartedData ? 
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px", color:props.ScheduleColor.IconC}}>{props.SendSD}</span></FadeIn>
        :
            <DateSelected   
                //The incoming dating is used to chagne the format of the date and then send that number to submission button
                submitDateValue={(value) => ChangeFromDate(value)} 
                RecievedColor={props.ScheduleColor}
        />}
    </EachateContainer>
    
    // End Data Area
    const [ToData, ChangeToDate] = useState()
    const EndingingData = <EachateContainer JustifyContentCalue={isEndedData ? "space-between" : ""}>
        <FadeIn><span style={{  padding: "4px" , fontSize: "1.2em", marginRight: "25px"}}>To</span></FadeIn>
        {!isEndedData ? 
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px", color:props.ScheduleColor.IconC }}>{props.SendED}</span></FadeIn>
        :
            <DateSelected   
                //The incoming dating is used to chagne the format of the date and then send that number to submission button
                submitDateValue={(value) => ChangeToDate(value)} 
                RecievedColor={props.ScheduleColor}
        />}
    </EachateContainer>
    
    //This is the returned Date to the calendar
    const calendar = <InfoContainer>
            {InconArea}
            <DateContainer>
                {InfoArea}
                {StartingData}
                {EndingingData}
            </DateContainer>
        </InfoContainer>

    //To recieve a prop that will change the value from and to inside the schedule form to the value of From/to Date that has been created here  
    props.GetFromDate(!isStartedData ?  props.SendSD : fromData) //Return either the selected data from the calendar form or the changed data by the user
    props.GetToDate(!isEndedData ? props.SendED :ToData) //Return either the selected data from the calendar form or the changed data by the user
    
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
    
    //Visable and unvisable color style 
    const VisibilityStle = {
        marginRight: "4px", 
        marginLeft:"4px",
        marginTop:"6px" , 
        fontSize: "21px", 
        color : props.ScheduleColor.IconC
    }

    
    const [isShowTime, ChangeisShowTime] = useState(true) //to show the option to change the Time that the user selected
    //this is the part where we change the icon based on clicking the div 
    const ShowData = <div onClick={()=>ChangeisShowTime(!isShowTime)}>
        {isShowTime ?  <VisibilityOffIcon style={VisibilityStle} /> : <VisibilityIcon style={VisibilityStle} />}
    </div>
    const IcionArea = <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><ClockCircleOutlined style={IconColor}/>  </FadeIn>
            <FadeIn>{ShowData}</FadeIn>
        </div>

    //This is for the layout for Hour Minuts Day system
    const Layout = ['','Hour','Minuts','AM / PM']
    const InfoArea = (<EachateContainer JustifyContentCalue={"space-between" }>
        { isShowTime ? 
            <FadeIn><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginLeft: "150px"}}>Optional Time Area</span></FadeIn> 
        :
            Layout.map((value, index) =>
                <FadeIn key={index+ createEventId()} ><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{value}</span></FadeIn> ) }
    </EachateContainer>
    );
    
    //collection of stating time for event
    const [StartHoursValue, ChangeStartHourValue ]= useState() //save the Starting Hour
    const [StartMinutsValue, ChangeStartMinutsValue ]= useState() //save the starting Minuts
    const [StartDayValue, ChangeStartDayValue ]= useState() //save starting if it is AM or PM
    const StartingTime = <EachateContainer JustifyContentCalue={"space-between" }>
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
    const [EndHoursValue, ChangeEndHourValue ]= useState() //save the ending Hour
    const [EndMinutsValue, ChangeEndMinutsValue ]= useState() //save the ending Minuts
    const [EndDayValue, ChangeEndDayValue ]= useState() //save ending if it is AM or PM
    const EndingTime = <EachateContainer JustifyContentCalue={"space-between" }>
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "12px"}}>End</span></FadeIn>
            <TimeSelected 
                submitHourValue={(value) => ChangeEndHourValue(value)}
                submitMinutsValue={(value) => ChangeEndMinutsValue(value)}
                submitDayValue={(value) => ChangeEndDayValue(value)}
                RecievedColor={props.ScheduleColor}
                //this is to disable the values that are inside and it is going to DataSelected
                DisabledisClicked={isShowTime} 
                />
        </EachateContainer>
        
    const time =<InfoContainer>
        {IcionArea}
        <DateContainer> 
            {InfoArea}
            {StartingTime}
            {EndingTime}
        </DateContainer>
        </InfoContainer>

    props.FromHourSelected(StartDayValue === "PM" ? String(parseInt(StartHoursValue,10) + 12) : StartHoursValue) //this where we convert the returned hour from 12 hour system to 24 hour system 
    props.ToHourlected(StartDayValue === "PM" ? String(parseInt(EndHoursValue,10) + 12) : EndHoursValue) //this where we convert the returned hour from 12 hour system to 24 hour system 
    props.FromMinutsSelected(StartMinutsValue)
    props.ToMinutsSelected(EndMinutsValue) 

    return (time)
}

export  {CalenderContianer, TimerContainer};