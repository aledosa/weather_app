import React, { useState } from "react";
const api = {
  key: "2add350b8e05c436a835ee7e3b10cb2c",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, updateQuery] = useState("");
  const [weather, updateWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          updateWeather(result);
          updateQuery("");
        });
    }
  };

  const dateBuilder = (srcDate) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[srcDate.getDay()];
    let date = srcDate.getDate();
    let month = months[srcDate.getMonth()];
    let year = srcDate.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const weatherValidation = (srcWeather) => {
    if (srcWeather === "Clear") {
      return "app clear";
    }

    if (srcWeather === "Clouds") {
      return "app cloudy";
    }

    if (srcWeather === "Mist") {
      return "app mist";
    }

    if (srcWeather === "Rain" || srcWeather === "Drizzle") {
      return "app rainy";
    }

    return "app";
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weatherValidation(weather.weather[0].main)
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            placeholder="Search ..."
            type="text"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)} ˚C
              </div>
              <div className="temp-senstation">
                Feels like {Math.round(weather.main.feels_like)} ˚C
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
            <div className="copyright-box">
              <div className="copyright-text">
                Images are property of Alexa Dominguez ®
              </div>
            </div>
          </div>
        ) : (
          <div className="copyright-container">
            <div className="copyright-text">
              Images are property of Alexa Dominguez ®
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
