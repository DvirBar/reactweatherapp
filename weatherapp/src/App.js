import React from 'react';
import './styles/css/App.css';
import WeatherProvider from './context/WeatherContext'; 
import DegreeToggle from './components/DegreeToggle';
import WeatherNow from './components/WeatherNow';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';

function App() { 
    return (
        <div className="App">
          <WeatherProvider>
              <div className="top">
                <DegreeToggle />
                <WeatherNow />
              </div>
              <div className="forecast">
                <WeatherHourly />
                <WeatherDaily />
              </div>
          </WeatherProvider>
        </div>
      );
  }


export default App;
