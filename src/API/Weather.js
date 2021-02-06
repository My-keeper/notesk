import React, { useState } from 'react';
import API from './API'
import InputArea from '../UI/UserInput'
const Weather = () => {
    const [LocationV, ChnageLocationV]= useState("")
    // const LocationV= ""
    console.log(LocationV)
    return(
        <div style={{margin:"20px"}}>
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
                BorderValue={"solid"}
                borderWidthValue="thin"
                marginRightValue={"10px"} 
            />
            <button
                style={{margin:"10px"}}
                onClick={()=>API.WeatherApp(LocationV)}
            >
                Search
            </button>
        </div>
    )
}

export default Weather;