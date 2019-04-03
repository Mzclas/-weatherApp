import React, { Component } from "react";
import CircuarProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";
import tranformWeather from "../../services/transformWeather";
import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    this.HandleUpdateClick();
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
  };

  HandleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = tranformWeather(data);
        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircuarProgress />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
};

export default WeatherLocation;
