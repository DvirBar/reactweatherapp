import React, { useContext, useState, useEffect } from 'react';
import './styles/css/App.css'; 
import { WeatherContext } from './context/WeatherContext';
import DegreeToggle from './components/stickyMenu/DegreeToggle';
import ChangeLang from './components/stickyMenu/ChangeLang';
import WeatherNow from './components/WeatherNow';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';
import Chart from './components/Chart';
import DailyChart from './components/DailyChart';


function App() { 
      const context = useContext(WeatherContext);
      const state = context.state;
      const [direction, setDirection] = useState({direction: 'ltr'})

      if((state.loading 
        || Object.entries(state.weather).length === 0)
        && state.error.length === 0) 
         // Check if state is loading or weather object is empty and there are no errors
      {
        return <p>Loading...</p>
      }

        return (
          <div className="App" style={direction}>
                <div className="menu">
                  <DegreeToggle />
                  <ChangeLang direction={direction} setDirection={setDirection} />
                </div>
                <div className="top">
                  <WeatherNow />
                </div>
                <div className="hourly">
                  <WeatherHourly />
                  <Chart />
                </div>
                <div className="daily">
                  <WeatherDaily />
                  <DailyChart />
                </div>
          </div>
        );
  }


export default App;
