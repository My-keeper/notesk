import React from 'react';
import API from './API'

const Weather = () => {
    
    return(
        <div>
            <input 
                placeholder="Location"

            ></input>
            <button
                onClick={()=>API.WeatherApp("cairo")}
            >
                Search
            </button>
        </div>
    )
}

export default Weather;