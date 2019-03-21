import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTempereture from "./WeatherTemperature";

const WeatherData = () => (
  <div>
    <WeatherTempereture />
    <WeatherExtraInfo />
  </div>
);

export default WeatherData;
