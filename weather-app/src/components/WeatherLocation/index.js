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

class WeatherLocation extends Component {
  render() {
    return (
      <div className="WeatherLocationCont">
        <Location city={"Buenos Aires"} />
        <WeatherData data={data} />
      </div>
    );
  }
}

export default WeatherLocation;
