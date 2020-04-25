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
                <p className="current time">
                    {moment.unix(weather.dt).tz(timeZone).format('HH:MM')}
                </p>
                <p className="current">
                    {moment.unix(weather.dt).tz(timeZone).format('MMMM Do, YYYY')}
                </p>
                <img src={img} className="img-now" />
                <p className="temp-now">{Math.round(weather.temp)}&#730;C</p>
            </Fragment>
            }
        </div>
    )
}

export default WeatherNow
