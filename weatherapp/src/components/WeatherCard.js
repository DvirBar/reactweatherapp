import React from 'react';

function WeatherCard(props) {
    const weather = props.weather;
    const img = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

    return (
        <div className="weather-card">
            <img src={img} />
            <p>
                <span>{Math.round(weather.temp.day)}</span>/
                <span>{Math.round(weather.temp.night)}</span>
            </p>
        </div>
    );
}

export default WeatherCard;