import Header from "../header/Header";
import MovieCard from "./movieCard";
import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="input-group mt-3">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            search
          </button>
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
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
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
        <MovieCard page={page} />
      </div>
    </div>
  );
};

export default MovieList;
