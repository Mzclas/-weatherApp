import React from "react";
import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData";
import "./styles.css";

const WeatherLocation = () => (
  <div className="WeatherLocationCont">
    <Location city={"Buenos Aires"} />
    <WeatherData />
  </div>
);

export default WeatherLocation;
