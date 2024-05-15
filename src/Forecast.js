import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function getForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <>
        <div className="Forecast">
          <div className="row pt-4 pb-2">
            {forecast.map(function (dailyForecast, index) {
              if (index < 7) {
                return (
                  <div className="col" key="index">
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  } else {
    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
