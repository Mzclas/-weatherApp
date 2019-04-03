import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";

const atrToComponents = cities => {
  return cities.map(city => <WeatherLocation key={city} city={city} />);
};

const LocationList = ({ cities }) => {
  return <div>{atrToComponents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default LocationList;
