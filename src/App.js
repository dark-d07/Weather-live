import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  return (
    <div className="App">
      <h1 className='Title'>Weather App</h1>
      <SearchBar onSubmit={handleSearch} />
      {city && <Weather city={city} />}
      <footer className='foot'>By:- AMARNATH SINGH</footer>
    </div>
  );
}

export default App;
