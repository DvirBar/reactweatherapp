import React, { useContext } from 'react';
import WeatherCard from './WeatherCard';
import { WeatherContext } from '../context/WeatherContext';

function WeatherList() {
    const weatherInfo = useContext(WeatherContext)

    return (
        <div className="weather-list">
            {weatherInfo.daily &&
                weatherInfo.daily.map(weather => 
                <WeatherCard weather={weather}/>  )
            }
        </div>
    );
}

export default WeatherList
