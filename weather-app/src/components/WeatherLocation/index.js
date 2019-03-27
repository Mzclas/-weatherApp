import React, { Component } from "react";
import CircuarProgress from "@material-ui/core/CircularProgress";
import tranformWeather from "../../services/transformWeather";
import { api_weather } from "../../constans/api_url";
import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
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
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = tranformWeather(data);
        this.setState({
          city: "Madrid",

          data: newWeather
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircuarProgress />}
      </div>
    );
  }
}

export default WeatherLocation;
