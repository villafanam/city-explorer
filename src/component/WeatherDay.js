import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component
{
  render()
  {
    return(
      <>
        <Card >
          <Card.Body>
            <Card.Img 
              className='weatherImg' 
              variant="top" 
              src={this.props.weatherImg}
            />
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

export default WeatherDay;