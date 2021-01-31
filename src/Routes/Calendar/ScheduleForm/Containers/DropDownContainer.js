import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined , ClockCircleOutlined} from "@ant-design/icons"; 
import DateSelected from './DataCollection/DateSelected';
import TimeSelected from './DataCollection/TimeSelected';
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
    justify-content: space-between;
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
    const [isClicked, ChangeisClicked] = useState(true)

    //This is for the layout for Year Month Days
    const Layout = ['','Year','Month','Day']

    //the date that the user clicked on to have it go to the data collection and have the same number 
    const [recievedClickedDate, ChangeRecievedClickedDate] = useState(props.RetrunClickedDate)
    //Dividing the Recieved Date to Year Month Day and Send them to DateSelected
    const RecievedYear = recievedClickedDate[0]
    const RecievedMonth = recievedClickedDate[1]
    const RecievedDay = recievedClickedDate[2]

    //All the needed information for craeting the date From 
    const [fromData, ChangeFromDate] = useState()

    //All the needed information for craeting the date To 
    const [ToData, ChangeToDate] = useState()

    //This is the returned Date to the calendar
    const calendar = <InfoContainer>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
        <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
        <FadeIn><div style={{marginTop: "40px"}} onClick={()=>ChangeisClicked(!isClicked)}>
                    {isClicked ?  <VisibilityOffIcon style={VisibilityStle} /> : <VisibilityIcon style={VisibilityStle} />}
                </div></FadeIn>
        </div>
        <DateContainer>
            <EachateContainer>
                {Layout.map(value =><FadeIn><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "30px"}}>{value}</span></FadeIn> ) }
            </EachateContainer>
            <EachateContainer>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
                <DateSelected
                    //These are used to send these data to DataSlected to be used for Year, Month, Day 
                    ReturnFrom="From"
                    ReturnClickedFromYear={RecievedYear}
                    ReturnClickedFromMonth={RecievedMonth} 
                    ReturnClickedFromDay={RecievedDay}
                    //The incoming dating is used to chagne the format of the date and then send that number to submission button
                    submitDateValue={(value) => ChangeFromDate(value)} 
                    RecievedColor={props.ScheduleColor}
                />
            </EachateContainer>
            <EachateContainer>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "25px"}}>To </span></FadeIn>

                <DateSelected 
                    //These are used to send these data to DataSlected to be used for Year, Month, Day 
                    ReturnFrom="To"
                    ReturnClickedToYear="Year" 
                    ReturnClickedToMonth="Month" 
                    ReturnClickedToDay="Day"
                    //this is to disable the values that are inside and it is going to DataSelected
                    DisabledisClicked={isClicked} 
                    submitDateValue={(value) => ChangeToDate(value)} 
                    RecievedColor={props.ScheduleColor}
                />
            </EachateContainer>
        </DateContainer>
    </InfoContainer>

    //To recieve a prop that will change the value from and to inside the schedule form to the value of From/to Date that has been created here  
    props.SubmitFromDateSelected(fromData)
    props.SubmitToDateSelected(ToData)
    
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

    // This is a togole to change the state of the disabled and to change the icion as well 
    const [isClicked, ChangeisClicked] = useState(true)
    
    //this is the part where we change the icon based on clicking the div 
    const mero = <div onClick={()=>ChangeisClicked(!isClicked)}>
        {isClicked ?  <VisibilityOffIcon style={VisibilityStle} /> : <VisibilityIcon style={VisibilityStle} />}
    </div>
    //This is for the layout for Hour Minuts Day system
    const Layout = ['','Hour','Minuts','AM / PM']

    const [StartHoursValue, ChangeStartHourValue ]= useState()
    const [StartMinutsValue, ChangeStartMinutsValue ]= useState()
    const [StartDayValue, ChangeStartDayValue ]= useState()
    const [EndHoursValue, ChangeEndHourValue ]= useState()
    const [EndMinutsValue, ChangeEndMinutsValue ]= useState()
    const [EndDayValue, ChangeEndDayValue ]= useState()
    
    const time =<InfoContainer>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <FadeIn><ClockCircleOutlined style={IconColor}/>  </FadeIn>
            <FadeIn>{mero}</FadeIn>
        </div>
        <DateContainer>
            <EachateContainer>
                {Layout.map(value =><FadeIn><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{value}</span></FadeIn> ) }
            </EachateContainer>
            <EachateContainer>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>Start</span></FadeIn>
                <TimeSelected 
                    submitHourValue={(value) => ChangeStartHourValue(value)}
                    submitMinutsValue={(value) => ChangeStartMinutsValue(value)}
                    submitDayValue={(value) => ChangeStartDayValue(value)}
                    RecievedColor={props.ScheduleColor}
                    //this is to disable the values that are inside and it is going to DataSelected
                    DisabledisClicked={isClicked} 
                    />
            </EachateContainer>
            <EachateContainer>
                <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "12px"}}>End</span></FadeIn>
                <TimeSelected 
                    submitHourValue={(value) => ChangeEndHourValue(value)}
                    submitMinutsValue={(value) => ChangeEndMinutsValue(value)}
                    submitDayValue={(value) => ChangeEndDayValue(value)}
                    RecievedColor={props.ScheduleColor}
                    //this is to disable the values that are inside and it is going to DataSelected
                    DisabledisClicked={isClicked} 
                    />
            </EachateContainer>
        </DateContainer>
        </InfoContainer>

    props.SubmitFromHourSelected(StartHoursValue)
    props.SubmitToHourlected(EndHoursValue)
    props.SubmitFromMinutsSelected(StartMinutsValue)
    props.SubmitToMinutsSelected(EndMinutsValue)
    props.SubmitFromDayValueSelected(StartDayValue)
    props.SubmitToDayValueSelected(EndDayValue)

    return (time)
}

export  {CalenderContianer, TimerContainer};