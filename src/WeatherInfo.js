import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-between flex-column-reverse align-items-center flex-md-row align-items-md-stretch py-4 px-1">
        <div className="d-flex align-items-end">
          <WeatherIcon code={props.data.icon} color={"#fff"} size={50} />
          <WeatherTemperature
            celsius={props.data.temperature}
            unit={props.unit}
            change={props.change}
          />
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)} °C</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="text-center text-md-end pb-4 pb-md-0">
          <h1>{props.data.city}</h1>
          <ul className="p-0">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
