import React, { useState } from "react";
import styled from "styled-components"; 
import FadeIn  from 'react-fade-in'; 
import { CalendarOutlined , ClockCircleFilled} from "@ant-design/icons"; 
import DateSelected from './DataCollection/DateSelected';
import Inputdata from '../../../../UI/UserInput';
import TimeSelected from './DataCollection/TimeSelected';
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Layers } from "@material-ui/icons";
import { Layout } from "antd";

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
    const [tst, chte] = useState(false)
    const mero = <Inputdata 
    // key={NumberOfRepeatedDays.id}
    inputType={"checkbox"}
    name="title"
    widthValue={"15px"}
    paddingVale={"2px"}
    outlineValue={"none"}
    fontSizeValue={"1.2em"}
    fontFamilyValue={"inherit"}
    IsCalledValue={"FOCUS"} 
    borderRadiusValue= {"7px"}
    // backGroundColorValue={ props.RecievedColor.UserInputBGC}
    // FontColorValue={props.RecievedColor.UserInputFC}
    // PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
    // borderColorValue={props.RecievedColor.BorderColor} 
    BorderValue={"solid"}
    borderWidthValue={"thin"}
    marginLeftValue={"5px"}
    marginTopValue={"4px"}
    onClickValue = {() =>chte(!tst)}
    // onchangeValue={() =>chte(!tst)}
    // InputValue = {DayValue}
    ></Inputdata>

    //This is for the layout for Year Month Days
    const Layout = ['','Year','Month','Day']
    const layoutValues = <EachateContainer>
        {Layout.map(value => 
            <FadeIn><span style={{ padding: "4px" , fontSize: "1.2em", marginRight: "1px"}}>{value}</span></FadeIn> ) }
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
            //The first three are used to send these data to DataSlected to be used for Year, Month, Day 
            ReturnClickedYear={RecievedYear} 
            ReturnClickedMonth={RecievedMonth} 
            ReturnClickedDay={RecievedDay} 
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
        <DateSelected Testing={true} submitDateValue={(value) => ChangeToDate(value)} RecievedColor={props.ScheduleColor}/>
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