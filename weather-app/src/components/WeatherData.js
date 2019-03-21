import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTempereture from "./WeatherTemperature";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../constans/weathers";

const WeatherData = () => (
  <div>
    <WeatherTempereture temperature={20} weatherState={WINDY} />
    <WeatherExtraInfo humidity={80} wind={"10m/s"} />
  </div>
);

export default WeatherData;
