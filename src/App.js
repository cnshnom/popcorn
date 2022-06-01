import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
//import Popcorn from "./popcorn.svg"
import "./App.css";
import "./recommend.css";

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
    
        <div className="wrapper"><h1 >Popcorn</h1>  
      

         </div>
        
     

    <div className="recommend">
    <button class="btn third">What's new?</button>
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
          <div className="wrapper"><p class="ohoh" >Oh oh! No movies found...</p></div>
          
          <div className="emptyblock"></div>
        </div>
      )}
    </div>
  );
};

export default App;