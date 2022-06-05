import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [companiesProd, setCompaniesProd] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    showMovie(movieId);
  }, [movieId]);

  const showMovie = async (id) => {
    const movieInfoApi = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=40018c87f6679f6db147ba3baa4d1191`
    );

    const movieToShow = await movieInfoApi.json();
    setMovieDetails(movieToShow);
    setCompaniesProd(movieToShow.production_companies);
  };

  console.log(movieDetails);

  return (
    <div className="movie_details">
      <img
        src={
          "https://image.tmdb.org/t/p/original/" + movieDetails.backdrop_path
        }
        alt={movieDetails.title}
      />

      <div className="details">
        <div className="movies_infos">
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </div>
        <div className="movie_release">
          <div className="info_start">
            <h3>Release Date:</h3>
            <h3>{movieDetails.release_date}</h3>
          </div>

          <div className="info_end">
            <h3>Budget: </h3>
            <h3>$ {movieDetails.budget}</h3>
          </div>
        </div>
        <div className="companies">
          <h3>Production Companies:</h3>
          {companiesProd.map((data) => {
            return (
              <div className="companies_logo" key={data.id}>
                <img
                  src={"https://image.tmdb.org/t/p/original" + data.logo_path}
                  alt={data.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
