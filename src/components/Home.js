import React from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';
import AnimeSearch from './AnimeSearch';

const Home = ({ handleSearchResult, searchResults, handleAddToList, myAnimeList }) => {
  const location = useLocation();

  return (
    <>
      <h1>Anime Search</h1>
      <Form onSearchResult={handleSearchResult} onAddToList={handleAddToList} />
      <AnimeSearch results={searchResults} onAddToList={handleAddToList}  myAnimeList={myAnimeList} />
    </>
  );
};

export default Home;