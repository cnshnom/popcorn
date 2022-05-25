import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import Popcorn from "./popcorn.svg"
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=bba09740";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("harry");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Popcorn</h1>
      <div  >
        <img
          src={Popcorn}
          className="popcorn" 
          alt="popcorn"
        />
        </div>
      
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What do you want to watch?"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          
          <h2 >Oh oh!<br/> <br/> <br/> No movies found</h2>
          <div className="emptyblock"></div>
        </div>
      )}
    </div>
  );
};

export default App;