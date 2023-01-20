import React from 'react';
import WeatherDay from './WeatherDay';
import './Weather.css'

class Weather extends React.Component
{
  render()
  {
    return(
      <>
        {this.props.weatherData.map(forcast => {
              return(
                <WeatherDay
                date={forcast.date}
                description={forcast.description}
                weatherImg={forcast.weatherImg}
                />
              );})}
      </>
    );
  }
}

export default Weather;