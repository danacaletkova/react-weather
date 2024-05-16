import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {

  function showFahrenheit(event) {
    event.preventDefault();
    props.change();
  }

  function showCelsius(event) {
    event.preventDefault();
    props.change();
  }

  if (props.unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C{" "}
          <a href="/" onClick={showFahrenheit}>
            | °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          °F{" "}
          <a href="/" onClick={showCelsius}>
            | °C
          </a>
        </span>
      </span>
    );
  }
}
