import React, { useState, useContext, Fragment } from 'react';
import WeatherDetails from './WeatherDetails';
import moment from 'moment';
import { WeatherContext } from '../context/WeatherContext';

function WeatherCard(props) {
    const weather = props.weather;
    const context = useContext(WeatherContext)
    const isFahren = context.state.isFahren
    const timeZone = context.state.weather.timezone
    const img = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    const [display, setDisplay] = useState(false)

    const openModal = () => {
        setDisplay(true);
    }
    
    return (
        <Fragment>
            <WeatherDetails 
            display={display} 
            setDisplay={setDisplay}
            weather={weather} 
            isFahren={isFahren}
            timezone={timeZone}
            />
            
            <div className="weather-card" onClick={() => openModal()}>
                <p>{moment.unix(weather.dt).tz(timeZone).format('HH:00')}</p>
                <p><img src={img} /></p>
                {props.isHourly
                    ? 
                        <span>{Math.round(weather.temp)}</span>
                    :
                    <p>
                        <span>{Math.round(weather.temp.day)}</span>/
                        <span>{Math.round(weather.temp.night)}</span>
                    </p>
                }
            </div>
        </Fragment>
    );
}

export default WeatherCard;