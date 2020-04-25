import React from 'react';
import './styles/css/App.css';
import WeatherList from './components/WeatherList';
import WeatherNow from './components/WeatherNow';
import WeatherProvider from './context/WeatherContext'; 

function App() { 
    return (
        <div className="App">
          <WeatherProvider>
              <WeatherNow />
              <WeatherList />
          </WeatherProvider>
        </div>
      );
  }


export default App;
