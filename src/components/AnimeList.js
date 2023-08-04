const AnimeList = ({ myAnimeList,setMyAnimeList }) => {
  /// Function to handle watched or not watched
    const handleWatchedToggle = (animeId) => {
     
      const updatedList = myAnimeList.map((anime) =>
        anime.id === animeId ? { ...anime, watched: !anime.watched } : anime
      );
   
      setMyAnimeList(updatedList);
    };
 /// Function to handle delete from list
    const handleDelete = (animeId) => {
      
      const updatedList = myAnimeList.filter((anime) => anime.id !== animeId);
     
      setMyAnimeList(updatedList);
    };
  
    return (
      <div>
        <h2>My Anime List</h2>
        {myAnimeList.length > 0 ? (
          <ul className="list-container">
            {myAnimeList.map((anime) => (
              <li key={anime.id}>
                <span style={{ textDecoration: anime.watched ? 'line-through' : 'none' }}>
                  {anime.attributes.canonicalTitle}
                </span>
                <button onClick={() => handleWatchedToggle(anime.id)}>
                  {anime.watched ? 'Unwatched' : 'Watched'}
                </button>
                <button onClick={() => handleDelete(anime.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No anime added to the list yet.</p>
        )}
      </div>
    );
  };
  
  export default AnimeList;