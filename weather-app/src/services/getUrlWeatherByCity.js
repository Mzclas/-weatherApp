import { url_base_weather, api_key } from "../constans/api_url";

const getUrlWeatherByCity = city => {
  return `${url_base_weather}?q=${city}&APPID=${api_key}&units=metric`;
};

export default getUrlWeatherByCity;
