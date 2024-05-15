import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Perth" />
        <footer className="px-2">
          This project was coded by{" "}
          <a
            href="https://github.com/danacaletkova"
            target="_blank"
            rel="noreferrer"
          >
            Dana Caletkova
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/danacaletkova/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://meteo-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
