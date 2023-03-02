import Header from "../header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addMovie } from "../../redux/action";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_REST_API_BASE_URL}/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovie(res.data);
  };

  const addWishList = async () => {
    console.log(currentUser.data.userId);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/movie/add`,
        {
          movieId: movie.id,
          name: movie.title,
          userId: currentUser.data.userId,
          imgUrl:
            "https://www.themoviedb.org/t/p/w220_and_h330_face/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTY3NzU5NzkyMX0.rWv-a7Wamk5J3YMvopYl3nMJfz5yz3T4R4mNwNRjH4M",
          },
        }
      );
      setIsAdd(true);
      dispatch(addMovie(res.data));
      console.log(res);
    } catch (err) {
      setIsAdd(false);
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="card mt-3 mb-3 text-left">
          <div className="row no-gutters">
            <div className="col-sm-5">
              <img
                className="card-img"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/130H1gap9lFfiTF9iDrqNIkFvC9.jpg"
                alt="Suresh Dasari Card"
              />
            </div>
            <div className="col-sm-7">
              <div className="movie card-body">
                <button
                  data-toggle="modal"
                  style={{
                    backgroundColor: isAdd ? "orange" : "white",
                    float: "right",
                  }}
                  onClick={addWishList}
                >
                  <span class="glyphicon glyphicon-bookmark"></span>
                </button>
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-text">{movie.release_date}(US)</p>
                <h5 className="card-text">Overview</h5>
                <p className="card-text">{movie.overview}</p>
                {/* <a href="#" className="btn btn-primary">
                  View Profile
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
