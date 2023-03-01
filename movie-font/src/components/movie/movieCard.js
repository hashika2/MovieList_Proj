import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../style/movie.css";

const MovieCard = (info) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieDatails();
  }, []);

  const getMovieDatails = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_REST_API_BASE_URL}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${info.page}`
    );
    setMovies(res.data?.results);
    console.log(res.data.results);
  };

  return (
    <div className="row">
      {/* {!movies && <div>Loading...........</div>} */}
      {movies.map((mv, key) => {
        return (
          <div className="movie-card card ml-2" key={key}>
            <Link to={`/movie/${mv.id}`}>
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
  );
};

export default MovieCard;
