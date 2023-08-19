import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className='box'
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit" className='B'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
