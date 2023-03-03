import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { getuPularMovie } from "../../api/filterApi";

const MovieTable = ({ genres, moviesInfo, inputMovie, page }) => {
  const [movies, setMovies] = useState([]);
  const [isNewMovie, setIsNewMovie] = useState(false);

  useEffect(() => {
    getMovieDatails();
  }, [moviesInfo]);

  const getMovieDatails = async () => {
    if (!inputMovie) {
      const res = await getuPularMovie(page);
      setMovies(res.data?.results);
    } else {
      setMovies(moviesInfo);
    }
  };

  return (
    <div>
      <div class="row">
        <div class="col-md-8">
          <div class="cart-item">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr id="table-id">
                    <th style={{ width: "10%" }} scope="col">
                      Image
                    </th>
                    <th style={{ width: "40%" }} scope="col">
                      Ttile
                    </th>
                    <th style={{ width: "20%" }} scope="col">
                      Genre
                    </th>
                    <th style={{ width: "20%" }} scope="col">
                      Rating
                    </th>
                    <th style={{ width: "10%" }} scope="col">
                      Year
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((mv, key) => {
                    return (
                      <tr class="table-row" key={key}>
                        <th scope="row">
                          <div class="d-flex align-items-center">
                            <img
                              src="https://www.themoviedb.org/t/p/w220_and_h330_face/130H1gap9lFfiTF9iDrqNIkFvC9.jpg"
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

                  <br />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTable;