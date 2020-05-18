import React from 'react';
import Modal from '../Modal';
import moment from 'moment';

const WeatherDetails = props => {
    const weather = props.weather;
    const img = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    const humidity_prog = {
        height: (weather.humidity/100)*54
    }

    return (
        <Modal display={props.display} setDisplay={props.setDisplay}>
            <div className="weather-details">
                <div className="weather-desc">
                {moment.unix(weather.dt).tz(props.timezone).format('ddd, MMMM Do HH:00')}
                    <img src={img} />
                    <p className="weather-main">{weather.weather[0].main}</p>
                </div>
                <div className="temp-col">
                    <p className="main-temp">
                        {Math.round(weather.temp)}&#730;
                        {props.isFahren ? <span>F</span> : <span>C</span>}
                    </p>
                    <p>Feels like: 
                        {Math.round(weather.feels_like)}&#730;
                        {props.isFahren ? <span>F</span> : <span>C</span>}
                    </p>
                </div>
                <div className="details-col">
                    <div>
                        <p className="detail-header">WIND</p>
                        <p>{weather.wind_speed}m/sec</p>
                        <p>{weather.wind_deg}&#730;</p>
                    </div>
                    <div>
                        <p className="detail-header">PRESSURE</p>
                        <p>{weather.pressure} hPa</p>
                    </div>
                </div>
                <div className="details-col">
                    <div>
                        <p className="detail-header">HUMIDITY</p>
                        <p>
                            <span className="humidity-bar">
                                <span className="humidity-progress" style={humidity_prog}></span>
                            </span>
                            <span className="humidity">{weather.humidity}%</span>
                        </p>
                    </div>
                    <div>
                        <p className="detail-header">CLOUDS</p>
                        <p>{weather.clouds}%</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default WeatherDetails
