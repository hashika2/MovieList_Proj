import React, { useEffect, useState } from "react";
import {
  getGenres,
  getRatingMovie,
  getyearWiseMovie,
  searchMovie,
  searchMovieFromDiscover,
} from "../../api/filterApi";
import SearchForm from "../../components/forms/SearchForm";
import MovieTable from "../../components/movie/MovieTable";
import Pagin from "../../components/movie/pagination";
import Header from "../../components/header/Header";

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
  }, [page]);

  const fetchGenres = async () => {
    const genRes = await getGenres();
    setGenreses(genRes.data?.genres);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    searchFilterData();
  };

  const searchFilterData = async () => {
    const searchRes = await searchMovie(movie, page);
    setMovies(searchRes.data?.results);
    setTotalPage(searchRes.data?.total_pages);
  };

  const dropDownSearch = async (id, name) => {
    const searchResFromDiscover = await searchMovieFromDiscover(id, page);
    setGenres(name);
    setMovie(name);
    setMovies(searchResFromDiscover.data?.results);
    setTotalPage(searchResFromDiscover.data?.total_pages);
  };

  return (
    <div>
      <Header />
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
          dropDownSearch={dropDownSearch}
        />
        <MovieCard page={page} movies={movies} inputMovie={movie} />
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
