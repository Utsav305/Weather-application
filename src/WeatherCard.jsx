import React from "react";

function WeatherCard({ weather }) {
  return (
    <div id="weatherDisplay">
      <h2>{`${weather.name}, ${weather.sys.country}`}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>{weather.weather[0].main}</p>
      <p>{`${weather.main.temp.toFixed(1)}°C`}</p>
      <p>{`Humidity: ${weather.main.humidity}% | Wind: ${weather.wind.speed} m/s`}</p>
    </div>
  );
}

export default WeatherCard;
