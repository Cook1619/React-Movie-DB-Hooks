import React, { useEffect, useState } from "react";
import {
  Poster,
  MovieWrapper,
  MovieInfo,
} from "./Styled-Components/Styled-Components";
import axios from "axios";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

export default function MovieDetails({ match }) {
  const [movie, setMovie] = useState([]);
  let params = match.params;
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
      );
      setMovie(res.data);
    }
    fetchData();
  }, [movie]);
  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
}
