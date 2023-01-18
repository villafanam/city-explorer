import React from 'react';
import Card from 'react-bootstrap/Card';
import './Weather.css'
import cloudImg from './images/cloudy.jpg'

class Weather extends React.Component
{
  render()
  {
    return(
      <>
        <Card >
          <Card.Body>
          <Card.Img className='weatherImg' variant="top" src="https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/clear-day.svg"/>
            <Card.Title>{this.props.date}</Card.Title>
            <Card.Text>
              {this.props.description}
              </Card.Text>
          </Card.Body>
        </Card> 
      </>
    );
  }
}

export default Weather;