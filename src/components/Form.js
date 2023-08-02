import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearchResult }) => {
  const [animeName, setAnimeName] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    if (animeName.trim() === '') {
      return;
    }

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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
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
    </form>
  );
};

export default SearchBar;
