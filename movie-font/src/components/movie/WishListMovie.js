import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../api/userApi";
import Header from "../header/Header";

const WishListMovie = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState("");
  const [movieId, setMovieId] = useState("");
  const currentUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("**********");
    fetchWishlistMovie();
  }, [movieId]);

  const fetchWishlistMovie = async () => {
    const userData = await getUserId();
    setUserId(userData.data.id);
    try {
      const wishlistMovies = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/movie/${userData.data.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlist(wishlistMovies.data);
    } catch (err) {}
  };

  const removeMovie = async (id) => {
    try {
      const deleteMovie = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/movie/remove?userId=${userId}&movieId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // fetchWishlistMovie();
      setMovieId(id);
      // dispatch(removeMovie("The item is removed"));
    } catch (err) {}
  };
  return (
    <div>
      <Header />
      <h1>WishList</h1>
      <div className="container">
        {wishlist.length == 0 && <div>Empty</div>}
        {wishlist.map((wish, key) => {
          return (
            <div class="card w-100 mt-2" key={key}>
              <div className="row">
                <div className="col-md-2">1</div>
                <div className="col-md-3">
                  <img src={wish.imgUrl} width={70} style={{ padding: 10 }} />
                </div>
                <div className="col-md-6">
                  <p>{wish.name}</p>
                </div>
                <div className="col-md-1">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeMovie(wish.movieId)}
                  >
                    delete
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
