import React from 'react';
import {Carousel} from 'react-bootstrap';

class Movies extends React.Component
{

  
    
  render()
  { 
    let carouselItems = this.props.moviesData.map((element, index) => {
      return (
        <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={element.image_url}
          alt={element.title}
        />
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>
            {element.title}
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      );
    })

    return (
      <>
        <Carousel>
          {carouselItems}
       </Carousel>
        
      </>
    );
  }
}

export default Movies;