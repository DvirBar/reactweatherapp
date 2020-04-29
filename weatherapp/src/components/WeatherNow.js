import React, { Fragment, useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import moment from 'moment-timezone';

function WeatherNow() {
    const weatherInfo = useContext(WeatherContext)
    const timeZone = weatherInfo.timezone
    const [weather, setWeather] = useState(weatherInfo.current)
    const [img, setImg] = useState('')

    useEffect(() => {
        setWeather(weatherInfo.current)
    }, [weatherInfo])

    useEffect(() => {
        if(weather)
            setImg(`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    }, [weather])

    return (
        <div className="weather-now">
            {weather &&
            <Fragment>
                <img src={img} className="img-now" />
                <p className="main-weather">{weather.weather[0].main}</p>
                <p className="temp-now">{Math.round(weather.temp)}&#730;C</p>
                <p>Feels like: {Math.round(weather.feels_like)}&#730;C</p>
                <p className="current">
                    Updated: {moment.unix(weather.dt).tz(timeZone).format('ddd, MMMM Do HH:MM')}
                </p>
            </Fragment>
            }
        </div>
    )
}

export default WeatherNow
