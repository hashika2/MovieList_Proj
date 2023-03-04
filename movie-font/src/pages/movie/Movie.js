import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Notiflix, { Loading } from "notiflix";
import { BsBookmark } from "react-icons/bs";
import { addMovie } from "../../redux/action";
import { getUserId } from "../../api/userApi";
import Loader from "../../components/common/Loader";
import { MOVIE_DB_IMAGE_URL } from "../../constant/inde";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_REST_API_BASE_URL}/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovie(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(true);
    }
  };

  const addWishList = async () => {
    const userData = await getUserId();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/movie/add`,
        {
          movieId: movie.id,
          name: movie.title,
          userId: userData.data.id,
          imgUrl: `${movie.poster_path}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
                <div className="movie card-body">
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
                  <h2 className="card-title">{movie.title}</h2>
                  <p className="card-text">{movie.release_date}(US)</p>
                  <h5 className="card-text">Overview</h5>
                  <p className="card-text">{movie.overview}</p>
                  <h5 className="card-text">Reviews</h5>
                  <h2 className="card-text">{movie.vote_average}</h2>
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
