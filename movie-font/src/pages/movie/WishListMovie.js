import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { getUserId, getWishlistMovie } from "../../api/userApi";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { removeMovie } from "../../redux/action";

const WishListMovie = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState("");
  const [movieId, setMovieId] = useState("");
  const currentUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchWishlistMovie();
  }, [movieId]);

  const fetchWishlistMovie = async () => {
    const userData = await getUserId();
    setUserId(userData.data.id);
    try {
      const wishlistMovies = await getWishlistMovie();
      setWishlist(wishlistMovies.data);
    } catch (err) {}
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

  async function setRemoveMovie(id) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/movie/remove?userId=${userId}&movieId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMovieId(id);
      dispatch(removeMovie("The item is removed"));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Header id={movieId} />
      <h1>WishList</h1>
      <div className="container">
        {wishlist.length == 0 && <div>Empty</div>}
        {wishlist.map((wish, key) => {
          return (
            <div class="card w-100 mt-2" key={key}>
              <div className="row">
                <div className="col-md-2">
                  <input
                    class="form-check-input mt-4"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <div className="col-md-3">
                  <Link to={`/movie/${wish.movieId}`} className="movie-item">
                    <img src={wish.imgUrl} width={70} style={{ padding: 10 }} />
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
