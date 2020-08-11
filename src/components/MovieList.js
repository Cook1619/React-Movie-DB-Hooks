import React, { useState, useEffect } from "react";
import { MovieGrid } from "./Styled-Components/Styled-Components";
import Movie from "./Movie";
import axios from "axios";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      setMovies(res.data.results);
    }
    fetchData();
  }, [movies]);

  return (
    <MovieGrid>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MovieGrid>
  );
}
