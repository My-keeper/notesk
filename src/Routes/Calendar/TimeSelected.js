import React, { useState } from "react";

//this is for the hour input 
const HourValue = () => {

    const Hours = ['Hour','1','2','3','4','5','6','7','8','9','10','11','12']
    const DailyHours = (
        [Hours.map((Hour, index) => 
            <option  key={`Hour${index}`} value={Hour}>{Hour}</option>)]
        )
    return(DailyHours)
}
const MinutsValue = () => {

    //this is for the hour input 
    const Minuts = ['Minuts','5','10','15','20','25','30','35','40','45','50','55']
    const DailyMinut =(
        [Minuts.map((Minut, index) => 
            <option key={`Minut${index}`} value={Minut}>{Minut}</option>)]
        )
    return(DailyMinut)
}
const TwelveHourSystemValue = () => {

    //this for either AM or PM
    const TwelveHourSystem = ['..','AM','PM']
    const DayDivided =(
        [TwelveHourSystem.map((DayTime, index) => 
            <option key={`TwelveHourSystem${index}`} value={DayTime}>{DayTime}</option>)]
        )
    return(DayDivided)
}
const YearsValue = () => {

   //this is for the years from this year 
    const years = [
        "year","2021", "2022", "2023", "2024", 
        "2025", "2026", "2027", "2028", "2029", 
        "2030", "2031", "2032", "2033", "2034", 
        "2035", "2036", "2037", "2038", "2039", 
        "2040"]
    const YearContainer = (
    [years.map((year, index) => { return <option  key={`YearsValue${index}`} value={"year"}>{year}</option> })]
        )
    return(YearContainer)
}
const NumberOfMonthsValue = () => {

    //this is for the months in a year 
    const NumberOfMonths = ['Months','1','2','3','4','5','6','7','8','9','10','11','12']
    const MonthContainer = (
        [NumberOfMonths.map((month, index) => <option key={`NumberOfMonths${index}`}  value={month}>{month}</option>)]
        )
    return(MonthContainer)
}
const NumberOfDaysValue = () => {

    //this is for the days in a Month 
    const NumberOfDays = ['Days','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    const DayContainer = (
        [NumberOfDays.map((days,index ) => <option key={`NumberOfDays${index}`} value={days}>{days}</option>)]
        )
    return(DayContainer)
}

export {HourValue, MinutsValue, TwelveHourSystemValue, YearsValue, NumberOfMonthsValue, NumberOfDaysValue};
