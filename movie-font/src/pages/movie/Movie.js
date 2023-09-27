import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { BsBookmark } from "react-icons/bs";
import { addMovie } from "../../redux/action";
import { addToWishList, getUserId } from "../../api/userApi";
import Loader from "../../components/common/Loader";
import { MOVIE_DB_IMAGE_URL } from "../../constant/inde";
import { getMovieInfo } from "../../api/filterApi";
import Header from "../../components/header/Header";
import "../../style/movie.css";
import { viewPageEvent } from "../../mixpanel/init";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    try {
      const res = await getMovieInfo(id);
      setMovie(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(true);
    }
  };

  const addWishList = async () => {
    viewPageEvent("Sign Up", {
      age: 28,
      gender: "male",
      source: "facebook",
    })
    const userData = await getUserId();
    try {
      const res = await addToWishList(movie, userData);
      setIsAdd(true);
      dispatch(addMovie(res.data));
      Notiflix.Notify.success("Added to wishlist");
    } catch (err) {
      //error dispatch
      Notiflix.Notify.failure(err?.response?.data?.message);
      // setIsAdd(false);
    }
  };

  return (
    <div>
      <Header isAdd={isAdd} />
      {isloading && <Loader />}
      {!isloading && (
        <div className="container">
          <div className="card mt-3 mb-3 text-left">
            <div className="row no-gutters">
              <div className="col-sm-5">
                <img
                  className="card-img"
                  src={`${MOVIE_DB_IMAGE_URL}/${movie.poster_path}`}
                  alt="Suresh Dasari Card"
                />
              </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <button
                    data-toggle="modal"
                    style={{
                      float: "right",
                    }}
                    onClick={addWishList}
                  >
                    <BsBookmark
                      style={{ backgroundColor: isAdd ? "orange" : "white" }}
                    />
                  </button>
                  <h2 className="movie card-title">{movie.title}</h2>
                  <p className="movie card-text">{movie.release_date}(US)</p>
                  <h5 className="movie card-text">Overview</h5>
                  <p className="movie card-text">{movie.overview}</p>
                  <h5 className="movie card-text">Reviews</h5>
                  <h2 className="movie card-text">{movie.vote_average}</h2>
                  {/* <a href="#" className="btn btn-primary">
                  View Profile
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
