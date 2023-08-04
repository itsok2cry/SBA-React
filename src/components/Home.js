import React from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';
import AnimeSearch from './AnimeSearch';

const Home = ({ handleSearchResult, searchResults, handleAddToList, myAnimeList }) => {
  const location = useLocation();

  return (
    <>
      <h1>Search, List, Anime!</h1>
      <h6>Search for an anime below or press random button for a random anime:</h6>
      <Form onSearchResult={handleSearchResult} onAddToList={handleAddToList} />
      <AnimeSearch results={searchResults} onAddToList={handleAddToList}  myAnimeList={myAnimeList} />
    </>
  );
};

export default Home;