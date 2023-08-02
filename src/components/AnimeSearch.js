import React from 'react';

const AnimeSearch = ({ results, onAddToList, myAnimeList }) => {
  const addAnimeToList = (anime) => {
    const isDuplicate = myAnimeList.some((item) => item.id === anime.id);
    if (!isDuplicate) {
      onAddToList(anime);
    }
  };
  return (
    <div>
      {results.length > 0 ? (
        <div>
          {results.map((anime) => (
            <div key={anime.id} className="anime-card">
                <button onClick={() => addAnimeToList(anime)}>Add to List</button>
              <h2>{anime.attributes.canonicalTitle}</h2>
            
              {anime.attributes.posterImage?.tiny && (
                <img
                  className="anime-img"
                  src={anime.attributes.posterImage.tiny}
                  alt={anime.attributes.canonicalTitle}
                />
              )}
                <p>{anime.attributes.synopsis}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default AnimeSearch;