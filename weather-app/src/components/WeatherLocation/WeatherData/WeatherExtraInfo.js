import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="WeatherExtraInfoCont">
    <span>{`${humidity} % -`}</span>
    <span>{`${wind} wind`}</span>
  </div>
);

WeatherExtraInfo.propType = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
