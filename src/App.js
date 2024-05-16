import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Perth" />
        <footer className="p-2">
          <a
            href="https://github.com/danacaletkova/react-weather"
            target="_blank"
            rel="noreferrer"
          >Open-source </a>
          code by{" "}
          <a
            href="https://github.com/danacaletkova"
            target="_blank"
            rel="noreferrer"
          >
            Dana Caletkova
          </a>
        </footer>
      </div>
    </div>
  );
}
