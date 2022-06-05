import React from "react";

//Navigation
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div className="movie">
      <Link to={`/movieDetails/${movie.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt={movie.title}
        />
        <div className="movie_infos">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
