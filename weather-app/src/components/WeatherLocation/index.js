import React, { Component } from "react";
import tranformWeather from "../../services/transformWeather";
import { api_weather } from "../../constans/api_url";

import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData";
import "./styles.css";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../../constans/weathers";

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: "10 k/h"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      data: data
    };
  }

  HandleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = tranformWeather(data);
        this.setState({
          city: "Madrid",

          data: newWeather
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.HandleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
