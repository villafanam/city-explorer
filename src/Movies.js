import React from 'react';
import {Carousel} from 'react-bootstrap';
import errorImg from './images/error.jpg'

class Movies extends React.Component
{    
  render()
  { 
 

    return (
      
        <Carousel>
          {this.props.moviesData.map((element, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={element.image_url ? `https://image.tmdb.org/t/p/w500${element.image_url}` : errorImg}
                  alt={element.title}
                />
              <Carousel.Caption>
                <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>
                  {element.title}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            );
          })}
       </Carousel>
    );
  }
}

export default Movies;