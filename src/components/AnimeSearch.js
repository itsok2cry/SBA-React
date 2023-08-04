import React from 'react';

const AnimeSearch = ({ results, onAddToList, myAnimeList }) => {
  ///Makes sure you can not keep adding same anime to list
  const addAnimeToList = (anime) => {
    const isDuplicate = myAnimeList.some((item) => item.id === anime.id);
    if (!isDuplicate) {
      onAddToList(anime);
      alert(`${anime.attributes.canonicalTitle} has been added to your list.`)
    }
   
  };
  return (
    <div>
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
    </div>
  );
};

export default AnimeSearch;