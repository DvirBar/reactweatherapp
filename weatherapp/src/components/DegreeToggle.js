import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function DegreeToggle() {
    const context = useContext(WeatherContext)
    const [isFahren, setIsFahren] = useState(context.state.isFahren)
    const [isUpdating, setIsUpdating] = useState(false) 
    const dispatch = context.dispatch

    const handleChange = () => {
        setIsUpdating(true)
        setIsFahren(!isFahren)
    }

    useEffect(() => {
        if(isUpdating) {
            dispatch({
                type: "WEATHER_LOADING"
            })
            dispatch({
                type: "CHANGE_FORMAT",
                payload: isFahren
            })
        }
        setIsUpdating(false)
    }, [isFahren])

    return (
        <div className="degree-toggle">
            <span>&#730;C</span>
            <label className="toggle">
                <input type="checkbox" value={isFahren} onChange={() => handleChange()} />
                <span className="toggle-button"></span>
            </label>
            <span>&#730;F</span>
        </div>
    )
}

export default DegreeToggle
