import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  function getForecast(response) {
    console.log(response.data);
  }

  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getForecast);

  return (
    <>
      <div className="Forecast">
        <div className="row pt-4 pb-2">
          <div className="col">
            <div className="ForecastDay">Mon</div>
            <WeatherIcon code="01d" color={"#66fcf1"} size={28} />
            <div>
              <span className="ForecastTempMax">35°</span>
              <span className="ForecastTempMin">8°</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
