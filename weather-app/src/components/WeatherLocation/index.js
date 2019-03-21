import React from "react";
import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData";

const WeatherLocation = () => (
  <div>
    <Location city={"Buenos Aires"} />
    <WeatherData />
  </div>
);

export default WeatherLocation;
