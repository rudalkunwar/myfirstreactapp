import React from "react";
import movies from "./movies";
function Movie() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative flex items-center overflow-x-scroll">
        {movies.map((movie) => (
          <div key={movie.movieId} className="mx-6">
            <div className="relative">
              <img
                className="h-52 w-[500px] object-cover"
                src={movie.poster}
                alt={`${movie.name} poster`}
              />
              <div className="absolute bottom-0 w-full bg-opacity-75 bg-red-500 text-white text-center">
                <p>{movie.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
