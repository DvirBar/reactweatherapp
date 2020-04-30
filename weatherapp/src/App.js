import React, { useContext, useState, useEffect } from 'react';
import './styles/css/App.css'; 
import { WeatherContext } from './context/WeatherContext';
import DegreeToggle from './components/DegreeToggle';
import WeatherNow from './components/WeatherNow';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';


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
                <div className="forecast">
                  <WeatherHourly />
                  <WeatherDaily />
                </div>
          </div>
        );
  }


export default App;
