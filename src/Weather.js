import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function changeUnit() {
    if (unit === "celsius") {
      setUnit("fahrenheit");
    } else {
      setUnit("celsius");
    }
  }

  function getWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "39576631014d30e33bf03cff87abc13d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoFocus="on"
            required
            onChange={handleInput}
          />
          <input type="submit" value="Search" className="btn w-100" />
        </form>
        <WeatherInfo data={weatherData} unit={unit} change={changeUnit} />
        <Forecast
          coordinates={weatherData.coordinates}
          unit={unit}
          change={changeUnit}
        />
      </div>
    );
  } else {
    search();
    return (
      <div className="d-flex justify-content-center p-5 m-5">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#66fcf1"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
