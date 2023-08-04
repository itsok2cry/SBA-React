import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearchResult }) => {
  const [animeName, setAnimeName] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    const url = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(animeName)}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      onSearchResult(data.data);

      
      if (data.data && data.data.length > 0) {
        onSearchResult([data.data[0]]);
      } else {
        onSearchResult([]);
      }
      setAnimeName('');
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRandomAnime = async () => {
    try {
      const randomQuery = Date.now().toString(36);
      const url = `https://kitsu.io/api/edge/anime?random=${randomQuery}`;

      const response = await axios.get(url);
      const data = response.data;

      if (data.data && data.data.length > 0) {
        // Get a random index within the range of the data array
        const randomIndex = Math.floor(Math.random() * data.data.length);
        // Get the anime at the random index
        const randomAnime = data.data[randomIndex];
        // Display the random anime
        onSearchResult([randomAnime]);
      } else {
  
        onSearchResult([]);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <form onSubmit={handleSearch} className='form-container'>
      <label htmlFor="animeName"></label>
      <input
        type="text"
        id="animeName"
        name="animeName"
        value={animeName}
        onChange={(e) => setAnimeName(e.target.value)}
        required
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleRandomAnime}>
        Random 
      </button>
    </form>
  );
};

export default SearchBar;
