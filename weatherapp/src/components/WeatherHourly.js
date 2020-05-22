import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from './WeatherCard';
import Chart from './Chart'


function WeatherHourly() {
    const context = useContext(WeatherContext)
    const weatherInfo = context.state.weather

    return (
            <div className="weather-list hourly">
                {
                    weatherInfo.hourly.map(weather => 
                    <WeatherCard weather={weather} isHourly={true} /> )
                }
            </div>
    )
}

export default WeatherHourly
