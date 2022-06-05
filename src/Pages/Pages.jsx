import React from "react";

// Navigation Route
import { Routes, Route } from "react-router-dom";

//Components

import Nav from "../Components/Nav";

import Home from "./Home";
import MovieDetails from "./MovieDetails";

function Pages() {
  return (
    <div>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movieDetails/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}

export default Pages;
