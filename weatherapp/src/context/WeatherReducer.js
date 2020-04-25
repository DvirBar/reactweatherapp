export const WeatherReducer = (state, action) => {
    switch(action.type) {
        case 'WEATHER_LOADING':
          return {
            ...state,
            loading: true
          };
        case 'WEATHER_SUCCESS':
          return {
            ...state,
            loading: false,
            error: '',
            weather: action.payload
          };
        case 'WEATHER_ERROR':
          return {
            ...state,
            loading: false,
            error: action.payload
          };
        default:
          return state;
      }
}

export default WeatherReducer
