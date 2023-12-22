import React, { Component } from "react";
import Weather from "./Components/Weather/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      city: "Kathmandu",
      temperature: "",
      humidity: "",
      wind: "",
      weatherdetail:"",
    };
  }
  SearchCity = (event) => {
    let city = event.target.city.value;
    this.setState({ city });
    event.preventDefault();
  };
  async componentDidMount() {
    await this.fetchWeatherData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      await this.fetchWeatherData();
    }
  }

  fetchWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=a1c0185292e4465036fba62c7eabf7a6&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        weatherdetail:data.weather[0].main,
        
      });
    
    } catch (error) {
      console.error("There was a problem fetching the API:", error);
    }
  };

  render() {
    return (
      <div>
        <Weather
          name={this.state.city}
          temp={this.state.temperature}
          humi={this.state.humidity}
          wind={this.state.wind}
          weth={this.state.weatherdetail}
          SearchCity={this.SearchCity}
        />
      </div>
    );
  }
}
export default App;
