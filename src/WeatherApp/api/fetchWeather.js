// import React from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "018c7234e6b8d1460bfaf2a52fc00a0c"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
}

// export default fetchWeather;
// 018c7234e6b8d1460bfaf2a52fc00a0c