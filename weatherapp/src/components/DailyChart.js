import React, { useContext, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { WeatherContext } from '../context/WeatherContext';
import moment from 'moment';

function DailyChart() {
    const context = useContext(WeatherContext)
    const isFahren = context.state.isFahren
    const weatherInfo = context.state.weather
    const timeZone = weatherInfo.timezone
    const [tempDay, setTempDay] = useState([])
    const [tempNight, setTempNight] = useState([])
    const [yAxes, setYAxes] = useState({})

    useEffect(() => {
        setTempDay(weatherInfo.daily.map(day => Math.round(day.temp.day)))
        setTempNight(weatherInfo.daily.map(night => Math.round(night.temp.night)))
    }, [isFahren])

    useEffect(() => {
        setYAxes({
            beginAtZero: false,
            min: Math.min(...tempDay, ...tempNight) -10,
            max: Math.max(...tempDay, ...tempNight) +10,
            fontColor: '#fff'
        })
    }, [tempDay, tempNight])

    const data = {
        labels: weatherInfo.daily.map(weather => [
            moment.unix(weather.dt).tz(timeZone).format('ddd')
        ]),
        datasets: [ // day
            {
                label: 'Day',
                backgroundColor: 'rgb(3, 177, 252 ,0.6)',
                borderColor: 'rgb(3, 177, 252)',
                data: tempDay
            },
            {
                label: 'Night',
                backgroundColor: 'rgb(42, 209, 64 ,0.6)',
                borderColor: 'rgb(42, 209, 64)',
                data: tempNight
            }
            
        ]
    }

    const options = {
        scales: {
            yAxes: [{
                ticks: yAxes
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#fff'
                }
            }]
        },
        legend: {
            labels: {
                fontColor: '#fff'
            }
        }
    }

    return (
        <div className="chart">
            <Line data={data} options={options} width={200} height={50} />
        </div>
    )
}

export default DailyChart
