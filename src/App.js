import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./Movies.js";
export default function App() {
  const apiLink =
    "https://api.themoviedb.org/3/search/movie?api_key=52dbf5b6e21f1268285391475335cb84&language=it&query=";

  const linkImg = "https://image.tmdb.org/t/p/w342/";
  const posterNotFound =
    "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";

  const [movies, setMovies] = useState();
  const [keyFilm, setKeyFilm] = useState("easter egg");
  const keyRef = useRef(null); //definisco il Ref che userò come Key

  const getData = () => {
    setMovies();
    axios.get(apiLink + keyFilm).then((response) => {
      setMovies(response.data.results);
    });
  };

  const changeKey = () => {
    setKeyFilm(keyRef.current.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };

  const resetSearch = () => {
    setKeyFilm();
    setMovies();
    keyRef.current.value = "";
  };

  return (
    <div>
      <header>
        <div className="bigTitle">
          <img
            src="/img/1280px-Amazon_Prime_Video_logo.svg.png"
            alt="big_logo"
            onClick={resetSearch}
          />
        </div>
        <div className="header_search">
          <div>Cerca il film che preferisci</div>
          <input
            type="text"
            ref={keyRef}
            onChange={changeKey}
            onKeyPress={handleKeyPress}
          />
          <button onClick={getData}>🔍</button>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <Movies
            movies={movies}
            linkImg={linkImg}
            posterNotFound={posterNotFound}
          />
        </div>
      </div>

      <footer>Made with ❤ my AngeloLama</footer>
    </div>
  );
}
