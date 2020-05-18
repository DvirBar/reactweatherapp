import React, { useContext, useState, useEffect } from 'react';
import './styles/css/App.css'; 
import { WeatherContext } from './context/WeatherContext';
import DegreeToggle from './components/DegreeToggle';
import WeatherNow from './components/WeatherNow';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';
import Chart from './components/Chart';


function App() { 
      const context = useContext(WeatherContext);
      const loading = context.state.loading

      if(loading)
        return <p>Loading...</p>

      return (
          <div className="App">
                <div className="top">
                  <WeatherNow />
                  <DegreeToggle />
                </div>
                <div className="hourly">
                  <WeatherHourly />
                  <Chart />
                </div>
                <div className="daily">
                  <WeatherDaily />
                </div>
          </div>
        );
  }


export default App;
