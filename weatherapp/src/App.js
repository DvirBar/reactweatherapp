import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState({})

  axios.get('http://localhost:5000/weather')
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))

  return (
    <div className="App">
      {weather.visibility}
    </div>
  );
}

export default App;
