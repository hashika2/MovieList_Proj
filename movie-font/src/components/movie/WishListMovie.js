import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";

const WishListMovie = () => {
  const [wishlist, setWishlist] = useState([]);
  const currentUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWishlistMovie();
  }, []);

  const fetchWishlistMovie = async () => {
    const token = localStorage.getItem("token");
    try {
      const wishlistMovies = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/movie/6`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTY3NzU5NzkyMX0.rWv-a7Wamk5J3YMvopYl3nMJfz5yz3T4R4mNwNRjH4M",
          },
        }
      );
      console.log(wishlistMovies.data);
      setWishlist(wishlistMovies.data);
    } catch (err) {}
  };

  const removeMovie = async (id) => {
    try {
      const deleteMovie = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/movie/remove?userId=${currentUser.data.userId}&movieId=${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTY3NzU5NzkyMX0.rWv-a7Wamk5J3YMvopYl3nMJfz5yz3T4R4mNwNRjH4M",
          },
        }
      );
      fetchWishlistMovie();
      dispatch(removeMovie("The item is removed"));
      console.log(deleteMovie.data);
    } catch (err) {}
  };
  return (
    <div>
      <Header />
      <h1>WishList</h1>
      <div className="container">
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
