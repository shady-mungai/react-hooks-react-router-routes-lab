import React from "react";
import { movies } from "../data";

function Movies() {
  const eachMovie = movies.map((movie,index) => {
    return (
      <div key={index}>
        {movie.title}
        {movie.time}
        <ul>
          {movie.genres.map((genre,index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return <div>
    <h1>Movies Page</h1>
    {eachMovie}
    </div>;
}

export default Movies;
