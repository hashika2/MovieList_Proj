import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import {
  getUserId,
  getWishlistMovie,
  removeFromWishList,
} from "../../api/userApi";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { removeMovie } from "../../redux/action";
import { MOVIE_DB_IMAGE_URL } from "../../constant/inde";
import "../../style/movie.css";

const WishListMovie = () => {
  const [wishlist, setWishlist] = useState([]);
  const [removeList, setRemoveList] = useState([]);
  const [userId, setUserId] = useState("");
  const [movieId, setMovieId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWishlistMovie();
  }, [movieId, wishlist]);

  const fetchWishlistMovie = async () => {
    const userData = await getUserId();
    setUserId(userData.data.id);
    try {
      const wishlistMovies = await getWishlistMovie();
      setWishlist(wishlistMovies.data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        setRemoveMovie(id);
      }
    });
  };

  const handleCheck = (event) => {
    let updatedList = [...removeList];
    if (event.target.checked) {
      updatedList = [...removeList, event.target.value];
    } else {
      updatedList.splice(removeList.indexOf(event.target.value), 1);
    }
    setRemoveList(updatedList);
  };

  async function setRemoveMovie(id) {
    let updatedList = [...removeList];
    updatedList = [...removeList, id];

    await removeMovies(updatedList);
    setMovieId(id);
  }

  function removeAllItem() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove all this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        removeMovies(removeList);
      }
    });
  }

  async function removeMovies(updatedList) {
    try {
      await removeFromWishList(updatedList, userId);
      dispatch(removeMovie("The item is removed"));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Header id={movieId} wishlist={wishlist} />
      <div className="container">
        <div>
          <h1>WishList</h1>
          <button
            className="remove-btn btn btn-danger mb-2"
            onClick={() => removeAllItem()}
          >
            Remove Selected
          </button>
        </div>
        {wishlist.length == 0 && <div>Empty</div>}
        {wishlist.map((wish, key) => {
          return (
            <div class="card w-100 mt-2" key={key}>
              <div className="row">
                <div className="col-md-2">
                  <input
                    class="form-check-input mt-4"
                    type="checkbox"
                    value={wish.movieId}
                    id="flexCheckDefault"
                    onChange={(e) => handleCheck(e)}
                  />
                </div>

                <div className="col-md-3">
                  <Link to={`/movie/${wish.movieId}`} className="movie-item">
                    <img
                      src={`${MOVIE_DB_IMAGE_URL}/${wish.imgUrl}`}
                      width={70}
                      className="p-1"
                    />
                  </Link>
                </div>
                <div className="col-md-6">
                  <p className="mt-4">{wish.name}</p>
                </div>
                <div className="col-md-1">
                  <button
                    className="btn btn-danger mt-4"
                    onClick={() => removeItem(wish.movieId)}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishListMovie;
