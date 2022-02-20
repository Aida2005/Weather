import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState({});

  function displayTemperature(response) {
    setLoaded(true);
    setTemperature({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function displayWeather(event) {
    event.preventDefault();
    let apiKey = "2a805289886a6cb0a6fa9785663fff97";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={displayWeather}>
      <input
        type="search"
        placeholder="Type a city.."
        autofocus={true}
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );
  if (loaded) {
    return (
      <div className="Temperature">
        {form}
          <p>Temperature: {Math.round(temperature.temperature)}°C</p>
          <p>Description: {temperature.description}</p>
          <p>Humidity: {temperature.humidity}%</p>
          <p>Wind: {temperature.wind}km/h</p>
          <p> 
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size="50"
              animate={true}
              />
              </p>
          
      </div>
    );
  } else {
    return form;
  }
}
