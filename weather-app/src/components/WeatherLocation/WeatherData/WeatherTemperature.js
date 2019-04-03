import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "../../../constans/weathers";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers"
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];

  if (icon) return <WeatherIcons className="wicon" name={icon} size="2x" />;
  else return <WeatherIcons className="wicon" name={"day-sunny"} size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="WeatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`ºC`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
