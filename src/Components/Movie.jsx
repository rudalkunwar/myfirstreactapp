import React from "react";
const movies = [
  {
    movieId: 11,
    name: "Inception",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    movieId: 12,
    name: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    movieId: 13,
    name: "The Matrix",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    movieId: 14,
    name: "Fight Club",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDIzODRmZTEtMmNhNS00ZjEwLWI5YzQtMjZhZDY3ZDJkYmE0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    movieId: 15,
    name: "Pulp Fiction",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhM5BlZTAtM2UwYTAtYWYwYy00ZDc2LWJmNWYtYzY5YzE3ZjEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    movieId: 16,
    name: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmQtZWFjYy00YzBkLWJmYjQtOWRiZmQxMWVmYjI5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    movieId: 17,
    name: "Gladiator",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzNhMWUzODY1MmEwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    movieId: 18,
    name: "Saving Private Ryan",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDQtYWY5Yzg3ZGRkZjM4XkEyXkFqcGdeQXVyMDM2NDM2MA@@._V1_SX300.jpg",
  },
];
function Movie() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-blue-300 h-52 w-48 flex gap-4">
        <div className="relative">
          <img
            className="absolute"
            src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            alt=""
          />
          <p>Inception</p>
        </div>
        <div className="relative">
          <img
            className="absolute"
            src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            alt=""
          />
          <p>Inception</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
