import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined , ClockCircleFilled} from "@ant-design/icons"; 
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
    width: 350px;
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
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }

    // This is a togole to change the state of the disabled and to change the icion as well 
    const [isClicked, ChangeisClicked] = useState(true)

    //this is the part where we change the icon based on clicking the div 
    const mero = <div onClick={()=>ChangeisClicked(!isClicked)}>
        {isClicked ? 
            <VisibilityOffIcon style={{marginRight: "4px", marginLeft:"4px",marginTop:"6px" , fontSize: "21px"}} />
            :
            <VisibilityIcon style={{marginRight: "4px", marginLeft:"4px",marginTop:"6px" , fontSize: "21px"}} />
        }
    </div>

    //This is for the layout for Year Month Days
    const Layout = ['','Year','Month','Day']
    const layoutValues = <EachateContainer>
        {Layout.map(value => 
            <FadeIn><span style={{ padding: "1px" ,paddingTop: "1px" , fontSize: "1.2em", marginRight: "1px"}}>{value}</span></FadeIn> ) }
    </EachateContainer>

    //the date that the user clicked on to have it go to the data collection and have the same number 
    const [recievedClickedDate, ChangeRecievedClickedDate] = useState(props.RetrunClickedDate)
    //Dividing the Recieved Date to Year Month Day and Send them to DateSelected
    const RecievedYear = recievedClickedDate[0]
    const RecievedMonth = recievedClickedDate[1]
    const RecievedDay = recievedClickedDate[2]

    //All the needed information for craeting the date From 
    const [fromData, ChangeFromDate] = useState()
    const fromDataCalendar =<EachateContainer>
        <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>From</span></FadeIn>
        <DateSelected
            //The incoming dating is used to chagne the format of the date and then send that number to submission button
            submitDateValue={(value) => ChangeFromDate(value)} 
            RecievedColor={props.ScheduleColor}
        />
    </EachateContainer>

    //All the needed information for craeting the date To 
    const [ToData, ChangeToDate] = useState()
    const toDataCalendar = <EachateContainer>
        <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "-3px"}}>To </span></FadeIn>
        {mero} 
        <DateSelected 
            //These are used to send these data to DataSlected to be used for Year, Month, Day 
            ReturnClickedYear="Year" 
            ReturnClickedMonth="Month" 
            ReturnClickedDay="Day"
            //this is to disable the values that are inside and it is going to DataSelected
            DisabledisClicked={isClicked} 
            submitDateValue={(value) => ChangeToDate(value)} 
            RecievedColor={props.ScheduleColor}
        />
    </EachateContainer>

    //This is the returned Date to the calendar
    const calendar = <InfoContainer>
        <FadeIn><CalendarOutlined style={IconColor}/>  </FadeIn>
        <DateContainer>
            {layoutValues}
            {fromDataCalendar}
            {toDataCalendar}
        </DateContainer>
    </InfoContainer>

    //To recieve a prop that will change the value from and to inside the schedule form to the value of From/to Date that has been created here  
    props.SubmitFromDateSelected(fromData)
    props.SubmitToDateSelected(ToData)
    
    return(calendar)
}

const TimerContainer = (props) => {
    const IconColor = { 
        color : props.ScheduleColor.IconC, 
        fontSize:"25px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const [StartHoursValue, ChangeStartHourValue ]= useState()
    const [StartMinutsValue, ChangeStartMinutsValue ]= useState()
    const [StartDayValue, ChangeStartDayValue ]= useState()
    const [EndHoursValue, ChangeEndHourValue ]= useState()
    const [EndMinutsValue, ChangeEndMinutsValue ]= useState()
    const [EndDayValue, ChangeEndDayValue ]= useState()
    
    const time =<InfoContainer>
            <FadeIn><ClockCircleFilled style={IconColor}/>  </FadeIn>
            <DateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>Start</span></FadeIn>
                    <TimeSelected 
                        submitHourValue={(value) => ChangeStartHourValue(value)}
                        submitMinutsValue={(value) => ChangeStartMinutsValue(value)}
                        submitDayValue={(value) => ChangeStartDayValue(value)}
                        RecievedColor={props.ScheduleColor}/>
                </EachateContainer>
                <EachateContainer>
                    <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "5px"}}>End</span></FadeIn>
                    <TimeSelected 
                        submitHourValue={(value) => ChangeEndHourValue(value)}
                        submitMinutsValue={(value) => ChangeEndMinutsValue(value)}
                        submitDayValue={(value) => ChangeEndDayValue(value)}
                        RecievedColor={props.ScheduleColor}/>
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