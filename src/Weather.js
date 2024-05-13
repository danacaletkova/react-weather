import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              required
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn w-100" />
          </div>
        </div>
      </form>
      <div className="row py-4">
        <div className="col-6 d-flex align-items-end">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          ></img>
          <p>
            <span className="temperature">26</span>
            <span className="unit">°C</span>
          </p>
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 28%</li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
        <div className="col-6 text-end">
          <h1>Perth</h1>
          <ul>
            <li>Monday 12:00pm</li>
            <li>Partly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
