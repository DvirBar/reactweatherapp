import React, { useState, useContext } from 'react';
import DataSelect from './DataSelect';
import { Line } from 'react-chartjs-2';
import { WeatherContext } from '../context/WeatherContext';

function Chart() {
    const [selected, setSelected] = useState("Show graph")
    const context = useContext(WeatherContext)
    const weatherInfo = context.state.weather
    const data = {
        labels: ['18:00', "19:00", "20:00"],
        datasets: [
            {
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                data: ['20', '45', '30']
            }
        ]
    }

    return (
        <div className="chart">
            <DataSelect selected={selected} setSelected={setSelected} />
            <Line width={200} height={50} data={data} />
        </div>
    )

}

export default Chart;