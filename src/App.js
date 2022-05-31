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
  const handleKeypress = e => {      //it triggers by pressing the enter key    
    if (e.keyCode === 13) {      
      searchMovies(searchTerm);
     } 
     };

  return (
    <div className="app">
        <div className="wrapper"><h1 class="pop">Popcorn</h1></div>
      
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
          onKeyPress={handleKeypress}
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
          <div class="wrapper"><h2 class="ohoh" >Oh oh! No movies found...</h2></div>
          
          <div className="emptyblock"></div>
        </div>
      )}
    </div>
  );
};

export default App;