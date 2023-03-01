import Header from "../header/Header";
import MovieCard from "./movieCard";
import React, { useEffect, useState } from "react";
import { getGenres, getRating, searchMovie } from "../../api/filterApi";

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [genreses, setGenres] = useState([]);
  const [ratings, setRating] = useState([]);
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchGenres();
    fetchRatingMovie();
  }, []);

  const fetchGenres = async () => {
    const genRes = await getGenres();
    setGenres(genRes.data?.genres);
  };

  const fetchRatingMovie = async () => {
    const gratingRes = await getRating();
    console.log(gratingRes);
    setRating(gratingRes.data?.results);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchRes = await searchMovie(movie, page);
    setMovies(searchRes.data?.results);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="input-group mt-3">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => setMovie(e.target.value)}
            />
            <input
              type="submit"
              className="btn btn-outline-primary"
              value="search"
            />
          </div>

          <div className="row mt-3">
            <div className="col-md-3">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id="dropdownMenuButton"
                  >
                    Genres
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {genreses.map((genres, key) => {
                      return (
                        <a class="dropdown-item" href="#">
                          {genres.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {ratings.map((rating, key) => {
                    return (
                      <a class="dropdown-item" href="#">
                        {rating.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
        <MovieCard page={page} movies={movies} length={movies.length} />
      </div>
    </div>
  );
};

export default MovieList;
