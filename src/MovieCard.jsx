import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  let link =' https://www.google.com/search?q='+Title
  return (
     
    <a href={link} target="_blank" >
    <div className="movie" key={imdbID} >
     
     
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
    </a>
  );
}

export default MovieCard;