import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/movie.css";
import { getuPularMovie } from "../../api/filterApi";
import { MOVIE_DB_IMAGE_URL } from "../../constant/inde";

const MovieCard = (info) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieDatails();
  }, [info.movies]);

  const getMovieDatails = async () => {
    if (!info.inputMovie) {
      const res = await getuPularMovie(info.page);
      setMovies(res.data?.results);
    } else {
      setMovies(info.movies);
    }
  };

  return (
    <>
      <div className="row">
        {movies.length == 0 && <div>Empty</div>}
        {movies.map((mv, key) => {
          return (
            <div className="movie-card card ml-2" key={key}>
              <Link to={`/movie/${mv.id}`} className="movie-item">
                <img
                  src={`${MOVIE_DB_IMAGE_URL}/${mv.poster_path}`}
                  alt="Card image cap"
                  class="img-fluid rounded-3"
                />
                <div className="card-body">
                  <h5 className="card-title">{mv.title}</h5>
                  <p className="card-text">{mv.release_date}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
