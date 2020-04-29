import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from './WeatherCard';

function WeatherHourly() {
    const weatherInfo = useContext(WeatherContext)

    return (
        <div className="weather-list hourly">
            {weatherInfo.hourly && 
                weatherInfo.hourly.map(weather => 
                <WeatherCard weather={weather} isHourly={true} /> )
            }
        </div>
    )
}

export default WeatherHourly