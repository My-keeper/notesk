import React, { useState } from "react";

//this is for the hour input 
const HourValue = () => {

    const Hours = ['Hour','1','2','3','4','5','6','7','8','9','10','11','12']
    const DailyHours = (
        [Hours.map((Hour, index) => 
            <option key={`Hour${index}`} value={Hour}>{Hour}</option>)]
            )
    return(DailyHours)
}
const MinutsValue = () => {

  //this is for the hour input 
  const Minuts = ['Minuts','5','10','15','20','25','30','35','40','45','50','55']
  const DailyMinut =(
      [Minuts.map((Minut, index) => 
          <option key={`Minut${index}`} value={Minut.value}>{Minut}</option>)]
  )
    return(DailyMinut)
}
const TwelveHourSystemValue = () => {

   //this for either AM or PM
   const TwelveHourSystem = ['AM','PM']
   const DayDivided =(
       [TwelveHourSystem.map((DayTime, index) => 
           <option key={`TwelveHourSystem${index}`} value={DayTime.value}>{DayTime}</option>)]
       )
   
      return(DayDivided)
  }
export  {HourValue, MinutsValue, TwelveHourSystemValue};