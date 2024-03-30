import { useState, useEffect } from "react";

const api = {
  key: "rEHlgNvhGyzZ5anIRR61KlepmI0l8etj",
  base: "http://dataservice.accuweather.com/currentconditions/v1/",
};

const CurrentWeather = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetchingCurrentWeather();
  }, []);

  const fetchingCurrentWeather = async () => {
    try {
      const response = await fetch(`${api.base}215854?apikey=${api.key}`);
      const weather = await response.json();
      console.log(weather[0]);
      setWeather(weather[0]);
    } catch (error) {
      console.log("error fetching the current weather", error);
    }
  };

  if (!weather) {
    return;
    <div>
      <h1>Loading ...</h1>
    </div>;
  }

  return (
    <div>
      <h2>current weather:</h2>
      <p>Local day time: {weather.LocalObservationDateTime}</p>
      <p>Weather: {weather.WeatherText}</p>
      <p>
        Temperature: {weather.Temperature?.Metric?.Value}°C /
        {weather.Temperature?.Imperial?.Value}°F
      </p>
      <h3>More info:</h3>
      <p>
        Mobile Link: <a href={weather.MobileLink}>AccuWeather Mobile Link</a>
      </p>
      <p>
        Link: <a href={weather.Link}>AccuWeather Link</a>
      </p>
    </div>
  );
};
export default CurrentWeather;
