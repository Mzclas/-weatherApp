import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../../constans/weathers";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "sun",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  if (icon) return <WeatherIcons name={icon} size="2x" />;
  else return <WeatherIcons name={"day-sunny"} size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="WeatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} ºC`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
