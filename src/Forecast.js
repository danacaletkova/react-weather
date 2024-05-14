import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
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
