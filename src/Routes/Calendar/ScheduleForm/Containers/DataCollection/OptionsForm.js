import React, { useState } from "react";
import { createEventId } from "../../../event-utils";

//this is for the hour input 
const HourValue = (props) => {

    const Hours = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const DailyHours = (
        [Hours.map((Hour, index) => 
            <option disabled={props.DisabledHour}  key={index.id + createEventId()} value={Hour}>{Hour}</option>)]
        )
    return(DailyHours)
}
const MinutsValue = (props) => {

    //this is for the hour input 
    const Minuts = ['05','10','15','20','25','30','35','40','45','50','55']
    const DailyMinut =(
        [Minuts.map((Minut, index) => 
            <option disabled={props.DisabledMinuts} key={index.id + createEventId()} value={Minut}>{Minut}</option>)]
        )
    return(DailyMinut)
}
const TwelveHourSystemValue = (props) => {

    //this for either AM or PM
    const TwelveHourSystem = ['AM','PM']
    const DayDivided =(
        [TwelveHourSystem.map((DayTime, index) => 
            <option disabled={props.DisabledHourSystem} key={index.id + createEventId()} value={DayTime}>{DayTime}</option>)]
        )
    return(DayDivided)
}
const NumberOfYearsValue = (props) => { 
    //this is for the years from this year 
    const NumberOfYears = [ '2020','2021', '2022', '2023', '2024','2025', '2026', 
                            '2027', '2028', '2029', '2030', '2031', '2032','2033', 
                            '2034','2035', '2036', '2037', '2038', '2039','2040']
    const YearContainer = (
        [NumberOfYears.map((year, index) => <option    key={index.id + createEventId()} value={year}>{year}</option>)]
    )
    
    return(
        YearContainer
        )
}
const NumberOfMonthsValue = (props) => { 
    //this is for the months in a year 
    const NumberOfMonths = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const MonthContainer = (
        [NumberOfMonths.map((month, index) => <option  key={index.id + createEventId()}  value={month}>{month}</option>)]
        )
    return(MonthContainer)
}
const NumberOfDaysValue = (props) => { 
    //this is for the days in a Month 
    const NumberOfDays = ['01','02','03','04','05','06','07','08','09','10',
                        '11','12','13','14','15','16','17','18','19','20',
                        '21','22','23','24','25','26','27','28','29','30','31']
    const DayContainer = (
        [NumberOfDays.map((days,index ) => <option  key={index.id + createEventId()} value={days}>{days}</option>)]
        )
    return(DayContainer)
}
const ColorOptionsValue = () => {

    //this is for the days in a Month 
    const ColorChoose = ['Choose Color','BlueViolet','Black','CornflowerBlue','DarkMagenta','DimGrey',
                            'DodgerBlue','Fuchsia','MidnightBlue','Purple','Salmon']
    const ColorContainer = (
        [ColorChoose.map((Colors,index ) => <option  key={index.id + createEventId()} value={Colors}>{Colors}</option>)]
        )
    return(ColorContainer)
}

export {HourValue, MinutsValue, TwelveHourSystemValue, 
        NumberOfYearsValue, NumberOfMonthsValue, NumberOfDaysValue, 
        ColorOptionsValue};
