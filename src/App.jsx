import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <div className="weather-card">
        <h1>🌍 Global Weather App</h1>
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {weather && (
          <WeatherCard weather={weather} />
        )}

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;
