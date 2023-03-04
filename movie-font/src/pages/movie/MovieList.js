import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import {
  getGenres,
  getRating,
  getRatingMovie,
  getyearWiseMovie,
  searchMovie,
} from "../../api/filterApi";
import SearchForm from "../../components/forms/SearchForm";
import MovieCard from "../../components/movie/movieCard";
import MovieTable from "../../components/movie/MovieTable";
import Pagin from "../../components/movie/pagination";

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
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    fetchGenres();
    // fetchRatingMovie();
    searchFilterData();
    setRatings(getRatingMovie());
    setYear(getyearWiseMovie());
  }, [genres, page]);

  const fetchGenres = async () => {
    const genRes = await getGenres();
    setGenreses(genRes.data?.genres);
  };

  const fetchRatingMovie = async () => {
    const gratingRes = await getRating();
    setRating(gratingRes.data?.results);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    searchFilterData();
  };

  const searchFilterData = async () => {
    const searchRes = await searchMovie(movie, page);
    setMovies(searchRes.data?.results);
    // setPage(searchRes.data?.total_pages);
    setTotalPage(searchRes.data?.total_pages);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <SearchForm
          onSubmit={onSubmit}
          setMovie={setMovie}
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
      {/* <Pagin /> */}
    </div>
  );
};

export default MovieList;
