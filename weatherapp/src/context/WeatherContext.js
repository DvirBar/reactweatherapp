import React,  { useEffect, useReducer } from 'react';
import WeatherReducer from './WeatherReducer';
import axios from 'axios';

export const WeatherContext = React.createContext();

const initialState = {
    loading: false,
    error: '',
    weather: {}
  }

const WeatherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, initialState);
    useEffect(() => {
        dispatch({type: 'WEATHER_LOADING'})

        axios.get('http://localhost:5000/weather')
        .then(res => dispatch({
          type: 'WEATHER_SUCCESS',
          payload: res.data
        }))
        .catch(err => dispatch({
          type: 'WEATHER_ERROR',
          payload: err.data
        }))
      }, [])

return (
    <WeatherContext.Provider value={state.weather} >
        {children}
    </WeatherContext.Provider>
)
}

export default WeatherProvider
