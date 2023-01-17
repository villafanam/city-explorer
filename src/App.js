import React from 'react';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
    }
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
       // TODO: need use axios to hit LocationIQ - async/await
       let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json&limit=1`

       let cityDataFromAxios = await axios.get(url)
      console.log(cityDataFromAxios.data)

      // TODO: save that data to state
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&markers=icon:tiny-red-cutout|${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=10`

        // cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`
      })

   
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

          <form onSubmit={this.getCityData}>
            <label class="lbl"> Pick a City!
              <input type="text" onInput={this.handleInput} />
              <button class='myButton' type='submit'>Explore</button>
            </label>
          </form>

          {/* Ternary - W ? T : F */}
          { 
            this.state.error
            ? <p>{this.state.errorMessage}</p>
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
      </>
      
    )
  }
}

export default App;


