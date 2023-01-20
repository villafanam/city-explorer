import React from 'react';
import SingleMovie from './SingleMovie';
import {Carousel} from 'react-bootstrap';


class Movies extends React.Component
{    
 
  render()
  { 
    // console.log('Movies: '); 
    // console.log(this.props.moviesData);

    return (
      <Carousel>
        {this.props.moviesData.map((element, index) => {
          return (
            <SingleMovie 
              image_url={element.image_url }
              title={element.title}
              key={element.index}
            />
          );
        })}
      </Carousel>
    );
  }
}

export default Movies;