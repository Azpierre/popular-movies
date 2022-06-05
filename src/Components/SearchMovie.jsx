import React, { useState } from "react";

function SearchMovie() {
  const [search, setSearch] = useState(null);

  const getInput = async () => {
    const getApiData = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=40018c87f6679f6db147ba3baa4d1191&language=en-US&page=1&include_adult=false"
    );
  };

  return (
    <form className="search">
      <label htmlFor="">Search Movie</label>
      <input name="search_movie" type="text" />
      <button>Search</button>
    </form>
  );
}

export default SearchMovie;
