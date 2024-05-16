import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function formattedDay() {
    let date = new Date(props.data.dt * 1000);
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[date.getDay()];
  }

  function formatTemp(temp) {
    let celsiusTemp = Math.round(temp);
    let fahrenheitTemp = Math.round((temp * 9) / 5 + 32);
    if (props.unit === "celsius") {
      return `${celsiusTemp}°`;
    } else {
      return `${fahrenheitTemp}°`;
    }
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
        <span>{formatTemp(props.data.temp.max)}</span>
        <span className="tempMin">{formatTemp(props.data.temp.min)}</span>
      </div>
    </div>
  );
}
