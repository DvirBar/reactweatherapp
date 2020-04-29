import React, { useContext } from 'react';
import WeatherCard from './WeatherCard';
import { WeatherContext } from '../context/WeatherContext';

function WeatherDaily() {
    const weatherInfo = useContext(WeatherContext)

    return (
        <div className="weather-list daily">
            {weatherInfo.daily &&
                weatherInfo.daily.map(weather => 
                <WeatherCard weather={weather} isHourly={false}/>  )
            }
        </div>
    );
}

export default WeatherDaily
