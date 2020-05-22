const convertTemp = (temp, isFahren) => {
  if(isFahren) 
    return ((temp * 9/5) + 32)

  return((temp - 32) * 5/9)
}

// const loopTempObjects = objects => {

// }

const formatTemp = (weather, isFahren) => {
      return {
        ...weather,
        current: {
          ...weather.current,
          temp: convertTemp(weather.current.temp, isFahren),
          feels_like: convertTemp(weather.current.feels_like, isFahren),
        },
        hourly: weather.hourly.map(hour => ({
          ...hour,
          temp: convertTemp(hour.temp, isFahren),
          feels_like: convertTemp(hour.feels_like, isFahren)
        })),
        daily: weather.daily.map(day => ({
          ...day,
          temp: {
            day: convertTemp(day.temp.day, isFahren),
            min:  convertTemp(day.temp.min, isFahren),
            max:  convertTemp(day.temp.max, isFahren),
            night: convertTemp(day.temp.night, isFahren),
            eve:  convertTemp(day.temp.eve, isFahren),
            morn: convertTemp(day.temp.morn, isFahren)
          },
          feels_like: {
            day: convertTemp(day.feels_like.day, isFahren),
            night: convertTemp(day.feels_like.night, isFahren),
            eve: convertTemp(day.feels_like.eve, isFahren),
            morn: convertTemp(day.feels_like.morn, isFahren),
          }

        }))
      }
}

const filterHourly = weather => {
  return weather.filter((item, index) => {
    if(index % 3 === 0 && index <= 24)
    {
      return item
    }
  })
}

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
            isFahren: false,
            weather: {
                ...action.payload,
                hourly: filterHourly(action.payload.hourly)
            }
          };
        case 'WEATHER_ERROR':
          return {
            ...state,
            loading: false,
            isFahren: false,
            error: action.payload
          };
          case 'CHANGE_FORMAT': 
            return {
              ...state,
              loading: false,
              isFahren: action.payload,
              weather: formatTemp(state.weather, action.payload),
            }
        default:
          return state;
      }
}

export default WeatherReducer
