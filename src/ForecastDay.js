import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function formattedDay() {
    let date = new Date(props.data.dt * 1000);
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[date.getDay()];
  }

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  return (
    <div className="ForecastDay">
      <div className="name">{formattedDay()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        color={"#66fcf1"}
        size={28}
      />
      <div>
        <span>{maxTemp()}</span>
        <span className="tempMin">{minTemp()}</span>
      </div>
    </div>
  );
}
