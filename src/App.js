import React from 'react';
import './App.css';
import axios from 'axios';
import {Card,Container} from 'react-bootstrap';
import errorImg from './images/error.jpg'
import Weather from './Weather'
import Movies from './Movies';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      weatherData: [],
      movieData: []
    }
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleMovies = async() => {
    try {
      // TODO:  BUILD OUT MY URL FOR AXIOS TO HIT
      let url = `${process.env.REACT_APP_SERVER}/movie?cityName=${this.state.city}`;

      let moviesFromAxios = await axios.get(url);
      console.log(moviesFromAxios.data);

      // TODO: SET STATE WITH THE INFORMATION COMING BACK FROM AXIOS
      this.setState({
        movieData: moviesFromAxios.data
      });


    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  handleWeather = async (cityInfo) => {
    //event.preventDefault();
    // TODO: BUILD OUT FUNCTIONALITY TO CALL MY SERVER AND GET PET DATA
    
    try {
      // TODO:  BUILD OUT MY URL FOR AXIOS TO HIT
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}`;
      // let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`;
      
      //console.log(url);

      let weatherData = await axios.get(url);
      //console.log(weatherData.data);

    // TODO: SET STATE WITH THE INFORMATION COMING BACK FROM AXIOS

      this.setState({
        weatherData: weatherData.data, 
      });
    } 
    catch (error) {
      console.log(error.message);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
       // TODO: need use axios to hit LocationIQ - async/await
       let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json&limit=1`

       let cityDataFromAxios = await axios.get(url)
      //console.log(cityDataFromAxios.data)

      // TODO: save that data to state
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&markers=icon:tiny-red-cutout|${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=10`

        // cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`
      })

      //functions calls
      this.handleWeather(cityDataFromAxios.data[0]);
      this.handleMovies();
   
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  render()
  {
    //console.log(this.state.cityData);
    return(
      <>
        <h1>City Explorer</h1>
        <main className='appBody'>
          <form onSubmit={this.getCityData}>
            <label className="lbl"> Pick a City!
              <input type="text" onInput={this.handleInput} />
              <button className='myButton' type='submit'>Explore</button>
            </label>
          </form>
          <Container className='weatherCard'>
            {this.state.weatherData.map(forcast => {
              return(
                <Weather 
                date={forcast.date}
                description={forcast.description}
                />
              );})}
          </Container>

          {/* Ternary - W ? T : F */}
          { 
            this.state.error
            ?  <Card >
                  <Card.Img variant="top" src={errorImg} className="error" />
                  <Card.Body>
                    <Card.Title>ERROR...</Card.Title>
                   <Card.Text>{this.state.errorMessage}</Card.Text>
                  </Card.Body>
                </Card> 
            : <Card >
                <Card.Img variant="top" src={this.state.cityMap} />
                <Card.Body>
                  <Card.Title>{this.state.cityData.display_name}</Card.Title>
                  {this.state.cityData.lat && this.state.cityData.lon ?
                    <Card.Text>
                      Latitude: {this.state.cityData.lat} <br/>
                      Longitude:{this.state.cityData.lon}
                    </Card.Text>
                    : null
                  }
                  
                </Card.Body>
              </Card>  
          }

          <Container>
            <Movies moviesData={this.state.movieData}/>
          </Container>
        </main>
      </>
      
    )
  }
}

export default App;



