import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { getuPularMovie } from "../../api/filterApi";
import { MOVIE_DB_IMAGE_URL } from "../../constant/inde";

const MovieTable = ({ genres, moviesInfo, inputMovie, page, setTotalPage }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieDatails();
  }, [moviesInfo, page]);

  const getMovieDatails = async () => {
    if (!inputMovie) {
      const res = await getuPularMovie(page);
      setMovies(res.data?.results);
      setTotalPage(res.data?.total_pages);
    } else {
      setMovies(moviesInfo);
    }
  };

  return (
    <div>
      <div class="cart-item">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr id="table-id">
                <th className="tb-cl-1" scope="col">
                  Image
                </th>
                <th className="tb-cl-2" scope="col">
                  Ttile
                </th>
                <th className="tb-cl-3" scope="col">
                  Genre
                </th>
                <th className="tb-cl-4" scope="col">
                  Rating
                </th>
                <th className="tb-cl-5" scope="col">
                  Year
                </th>
                <th className="tb-cl-6" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {movies.map((mv, key) => {
                return (
                  <tr class="table-row" key={key}>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <img
                          src={`${MOVIE_DB_IMAGE_URL}/${mv.poster_path}`}
                          alt="Card image cap"
                          class="img-fluid rounded-3"
                          style={{ width: 130 }}
                        />
                      </div>
                    </th>
                    <td class="align-middle">
                      <div class="flex-column ms-4">
                        <p class="card-title">{mv.title}</p>
                      </div>
                    </td>
                    <td class="align-middle">
                      <p class="mb-0">{genres}</p>
                    </td>
                    <td class="align-middle">
                      <p class="mb-0">{mv.vote_average}</p>
                    </td>
                    <td class="align-middle">
                      <p class="mb-0">{mv.release_date}</p>
                    </td>
                    <td class="align-middle">
                      <Link class="nav-link" to={`/movie/${mv.id}`}>
                        <BsEye />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieTable;
