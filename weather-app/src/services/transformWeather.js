import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../constans/weathers";

const getWeatherState = weather_data => {
  return SUN;
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);

  const data = {
    humidity,
    temperature: temp,
    weatherState,
    wind: `${speed} k/h`
  };
  return data;
};

export default transformWeather;
