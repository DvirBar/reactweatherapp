import React, { Fragment, useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';

function WeatherNow() {
    const context = useContext(WeatherContext);
    const weatherInfo = context.state.weather;
    const timeZone = weatherInfo.timezone;
    const isFahren = context.state.isFahren;
    const [weather, setWeather] = useState(weatherInfo.current);
    const [img, setImg] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        setWeather(weatherInfo.current);
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
                <p className="temp-now">
                    {Math.round(weather.temp)}&#730;
                    {isFahren ? <span>F</span> : <span>C</span>}
                </p>
                <p><span>{t("feels like")}:</span>
                    <span>
                        {Math.round(weather.feels_like)}&#730;
                        {isFahren ? <span>F</span> : <span>C</span>}
                    </span>
                    </p>
                <p className="current">
                    {t("updated")}: {moment.unix(weather.dt).tz(timeZone).format('ddd, MMMM Do HH:MM')}
                </p>
            </Fragment>
            }
        </div>
    )
}

export default WeatherNow
