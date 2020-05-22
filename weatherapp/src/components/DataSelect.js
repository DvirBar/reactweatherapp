import React, { useState } from 'react'

const DataSelect = props => {
    const [display, setDisplay] = useState(false)
    const [selected, setSelected] = [props.selected, props.setSelected]
    const values = ["Temperature", "Humidity", "Wind", "Clouds"]

    const toggleDrop = () => {
        setDisplay(!display)
    }

    const notDisplayed = {
        display: "none"
    };
    
    const displayed = {
        display: "block"
    };

    const selectData = param => {
        setSelected(param)
        setDisplay(false)
    }

    return (
        <div className="dropdown">
            <span>{selected}</span>
            <span className="dropdown_toggler" onClick={toggleDrop}>></span>
            <ul className="dropdown_select" style={display ? displayed : notDisplayed}>
                {values.map(value => 
                    <li onClick={() => selectData(value)}>{value}</li>
                    )}
            </ul>
        </div>
    )
}

export default DataSelect;
