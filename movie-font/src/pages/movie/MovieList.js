import React, { useEffect, useState } from "react";
import {
  getGenres,
  getRatingMovie,
  getyearWiseMovie,
  searchMovie,
} from "../../api/filterApi";
import SearchForm from "../../components/forms/SearchForm";
import MovieTable from "../../components/movie/MovieTable";
import Pagin from "../../components/movie/pagination";
import Header from "../../components/header/Header";
import { viewPageEvent } from "../../mixpanel/init";

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [genreses, setGenreses] = useState([]);
  const [genres, setGenres] = useState("");
  const [years, setYear] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [rating, setRating] = useState([]);
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchGenres();
    searchFilterData();
    setRatings(getRatingMovie());
    setYear(getyearWiseMovie());
  }, [genres, page]);

  const fetchGenres = async () => {
    const genRes = await getGenres();
    setGenreses(genRes.data?.genres);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    searchFilterData();
  };

  const onCLick = async () => {
    viewPageEvent("Sign Up", {
      age: 28,
      gender: "male",
      source: "facebook",
    })
  };

  const searchFilterData = async () => {
    const searchRes = await searchMovie(movie, page);
    setMovies(searchRes.data?.results);
    setTotalPage(searchRes.data?.total_pages);
  };

  return (
    <div>
      <Header />
      <button onClick={onCLick}> hello</button>
      <div className="container">
        <SearchForm
          onSubmit={onSubmit}
          setMovie={setMovie}
          movie={movie}
          genreses={genreses}
          setGenres={setGenres}
          genres={genres}
          ratings={ratings}
          setRating={setRating}
          years={years}
        />
        {/* <MovieCard page={page} movies={movies} inputMovie={movie} /> */}
        <MovieTable
          genres={genres}
          page={page}
          moviesInfo={movies}
          inputMovie={movie}
          setTotalPage={setTotalPage}
        />
        <Pagin page={page} tatalPage={totalPage} setPage={setPage} />
      </div>
    </div>
  );
};

export default MovieList;
