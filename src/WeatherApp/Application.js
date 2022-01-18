import React, { useState } from 'react'
import  { fetchWeather }  from "./api/fetchWeather";

const Application = () => {

    const [query, setQuuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            // setQuuery();
            console.log(data);
        }
    }

    return (
        <div className='main-container'>
            <div className='search'>
            <input  
            type="text" 
            className="search" 
            placeholder="Search City..." 
            value={query}
            onChange={(e) => setQuuery(e.target.value)}
            onKeyPress={search}
            />
            </div>
            {weather.main && (
                <div className='city'>
                    <div className='info'>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                    </div>
                    <div className='details'>
                        <h2 className='city-name'>
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                            <div className="city-temp">
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                                <p>{weather.weather[0].description}</p>
                            </div>
                            <div className="city-wind">
                                <span><b>wind:</b> {Math.round(weather.wind.speed)} <i>km/s</i></span>
                                
                            </div>
                                {/* <div className='sun-night'>
                                    <p><b>Sunrise: </b>{new Date(weather.sys.sunrise).getHours().toString()} : {new Date(weather.sys.sunrise).getMinutes().toString()}</p>
                                    <p><b>Sunset: </b>{new Date(weather.sys.sunrise).getHours().toString()} : {new Date(weather.sys.sunset).getMinutes().toString()}</p>
                                </div> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Application;