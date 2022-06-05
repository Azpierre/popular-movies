import React, { useEffect, useState } from "react";

//
//import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components

import Movie from "../Components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const apiData = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=40018c87f6679f6db147ba3baa4d1191`
    );
    const data = await apiData.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home">
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default Home;
