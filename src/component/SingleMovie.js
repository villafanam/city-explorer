import React from 'react';
import { Carousel } from 'react-bootstrap';


class SingleMovie extends React.Component {

  render() {
    // console.log('SingleMovie:');
    // console.log(this.props.title);
    // console.log(this.props.image_url);

    //unpackage all props from carousel parent component
    const {
      key,
      image_url,
      title,
      ...rest
    } = this.props;

    return (
      <>
        <Carousel.Item {...rest} key={this.props.key}>
          <img
            className="d-block w-100"
            src={this.props.image_url ? `https://image.tmdb.org/t/p/w500${this.props.image_url}` : 'https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg'}
            alt={this.props.title}
           
          />
          <Carousel.Caption>
            <h3
              style={{
                backgroundColor: '#912C22',
                borderRadius: '5px',
                width: 'max-content',
                margin: 'auto',
                padding: '5px'
              }}>
              {this.props.title}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </>
    );
  }
}

export default SingleMovie;