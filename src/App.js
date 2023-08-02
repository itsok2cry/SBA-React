import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Home from './components/Home';
import AnimeList from './components/AnimeList';
import './App.css';

function App() {
  const themeColor = useSelector((state) => state.theme.value);
  const [searchResults, setSearchResults] = useState([]);
 const [myAnimeList, setMyAnimeList] = useState(() => {
  const storedAnimeList = JSON.parse(localStorage.getItem('myAnimeList'));
  return storedAnimeList || [];
});


  const handleSearchResult = (results) => {
    setSearchResults(results);
  };

  const handleAddToList = (anime) => {
    setMyAnimeList((prevList) => [...prevList, anime]);
  };

  // Load anime list from local storage on initial render
  useEffect(() => {
    const storedAnimeList = JSON.parse(localStorage.getItem('myAnimeList'));
    if (storedAnimeList) {
      setMyAnimeList(storedAnimeList);
    }
  }, []);

  // Save anime list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('myAnimeList', JSON.stringify(myAnimeList));
    console.log('Saved to local storage:', myAnimeList); // Log the anime list whenever it's saved
  }, [myAnimeList]);

  console.log('Current anime list:', myAnimeList); // Log the current anime list whenever it changes

  return (
    <Router>
      <div className='App' style={themeColor}>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                handleSearchResult={handleSearchResult}
                searchResults={searchResults}
                handleAddToList={handleAddToList}
                myAnimeList={myAnimeList}
              />
            }
          />
          <Route path='/my-list' element={<AnimeList myAnimeList={myAnimeList} setMyAnimeList={setMyAnimeList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

