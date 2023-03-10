const SearchForm = ({
  onSubmit,
  setMovie,
  movie,
  genreses,
  setGenres,
  genres,
  ratings,
  setRating,
  years,
  dropDownSearch,
}) => {
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className="input-group mt-3">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => setMovie(e.target.value)}
              // value={movie}
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
                        <button
                          key={key}
                          class="dropdown-item"
                          // onClick={() => {
                          //   setGenres(genres.name);
                          //   setMovie(genres.name);
                          // }}
                          onClick={() => dropDownSearch(genres.id, genres.name)}
                        >
                          {genres.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                  value={genres}
                  name="genres"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div class="dropdown">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Rating
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {ratings.map((rating) => {
                      return (
                        <button
                          class="dropdown-item"
                          onClick={() => {
                            setRating(rating);
                            setMovie(rating);
                          }}
                        >
                          {rating}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                  value={rating}
                  name="rating"
                /> */}
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
                  Year
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {years.map((year) => {
                    return (
                      <button class="dropdown-item" href="#">
                        {year}
                      </button>
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
                  Order
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    ASC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
