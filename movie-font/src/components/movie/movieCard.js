import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/movie.css";
import { getuPularMovie } from "../../api/filterApi";

const MovieCard = (info) => {
  const [movies, setMovies] = useState([]);
  const [isNewMovie, setIsNewMovie] = useState(false);

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
        {/* {!movies && <div>Loading...........</div>} */}
        {movies.map((mv, key) => {
          return (
            <div className="movie-card card ml-2" key={key}>
              <Link to={`/movie/${mv.id}`} className="movie-item">
                <img
                  className="card-img-top"
                  src="https://www.themoviedb.org/t/p/w220_and_h330_face/130H1gap9lFfiTF9iDrqNIkFvC9.jpg"
                  alt="Card image cap"
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
