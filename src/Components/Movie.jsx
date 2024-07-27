import React from "react";
import movies from "./movies";

function Movie() {
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="flex gap-6 overflow-x-scroll mx-2">
      {movies.map((movie, index) => (
        <div key={index} className="h-[300px] w-[200px] bg-red-700 flex-shrink-0">
          <img className="h-[250px] w-full object-cover" src={movie.poster} alt={`${movie.title} poster`} />
          <div>
            <p className="bg-blue-400">{movie.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Movie;
