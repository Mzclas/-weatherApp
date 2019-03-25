import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../../constans/weathers";
import "./styles.css";

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: "10 k/h"
};

const data2 = {
  temperature: 25,
  weatherState: RAIN,
  humidity: 50,
  wind: "100 k/h"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Madrid",
      data: data
    };
  }

  HandleUpdateClick = () => {
    console.log("actualizado");
    this.setState({
      city: "Buenos aires",
      data: data2
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
