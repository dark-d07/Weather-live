import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setError(null); // Clear previous error
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e139057c45d84927177adf791353dc35&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.response?.data?.message || 'An error occurred');
      }
    };

    fetchWeatherData();
  }, [city]);

  if (error) {
    return <div className='error'>{error}. Please enter a valid city name.</div>;
  }

  if (!weatherData) {
    return <div style={{color:"red"}}>Loading...</div>;
  }

  const weatherDescription = weatherData.weather[0].description;

  let weatherMessage = '';
  if (weatherDescription.includes('overcast')) {
    weatherMessage = 'It may be overcast and rain is possible.';
  }
  else if (weatherDescription.includes("broken clouds")) {
    weatherMessage = 'Nyaah Have Fun!!'
  }
  else if (weatherDescription.includes("scattered")) {
    weatherMessage = 'A little wind can form cyclone'
  }

  return (
    <div className="weather">
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherDescription}</p>
      {weatherMessage && <p>{weatherMessage}</p>}
    </div>
  );
};

export default Weather;
