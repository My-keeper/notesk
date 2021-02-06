import React, { useState } from 'react';
import API from './API'
import InputArea from '../UI/UserInput'
const Weather = () => {
    const [LocationV, ChnageLocationV]= useState("")
    // const LocationV= ""
    console.log(LocationV)
    return(
        <div>
            <InputArea 
                PlaceholderValue="Location"
                onchangeValue={event=>ChnageLocationV(event.target.value)}
                inputType={"text"} 
                widthValue={"425px"}
                paddingVale={"4px"}
                outlineValue={"none"}
                fontSizeValue={"1.2em"}
                fontFamilyValue={"inherit"}
                IsCalledValue={"FOCUS"} 
                borderRadiusValue= {"7px"}
            />
            <button
                onClick={()=>API.WeatherApp(LocationV)}
            >
                Search
            </button>
        </div>
    )
}

export default Weather;