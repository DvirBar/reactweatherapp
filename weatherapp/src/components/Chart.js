import React, { useState, useEffect, useContext } from 'react';
import DataSelect from './DataSelect';
import { Line } from 'react-chartjs-2';
import { WeatherContext } from '../context/WeatherContext';
import moment from 'moment';

function Chart() {
    const [selected, setSelected] = useState('Temperature')
    const context = useContext(WeatherContext)
    const isFahren = context.state.isFahren
    const weatherInfo = context.state.weather
    const timeZone = weatherInfo.timezone
    const [fetchData, setFetchData] = useState([]) 
    const color = {
        'Temperature': 'rgb(252, 186, 3',
        'Humidity': 'rgb(3, 177, 252',
        'Clouds': 'rgb(42, 209, 64'
    }
    const [yAxes, setYAxes] = useState({})
    let sel = ''

    useEffect(() => {
        if (selected == 'Temperature')
            sel = 'temp'
        else sel = selected.toLowerCase();
        setFetchData(weatherInfo.hourly.map(weather => 
            sel === 'temp' ? Math.round(weather[sel]) : weather[sel]
        ));
    }, [selected, isFahren])

    useEffect(() => {
        setYAxes({
            beginAtZero: sel !== 'temp',
            min: sel === 'temp'? Math.min(...fetchData) - 10 : 0,
            max: Math.max(...fetchData) + 10,
            fontColor: '#fff'
        })
    }, [fetchData])

    const data = {
        labels: weatherInfo.hourly.map(weather => [
            moment.unix(weather.dt).tz(timeZone).format('HH:MM')
        ]),
        datasets: [
            {
                backgroundColor: color[selected] + ',0.6)',
                borderColor: color[selected] + ')',
                data: fetchData
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
            display: false
        }
    }

    return (
        <div className="chart">
            <DataSelect selected={selected} setSelected={setSelected} />
            {selected !== 'Wind' 
            ? <Line width={200} height={50} data={data} options={options} />
            : "Wind chart"
            }
        </div>
    )

}

export default Chart;