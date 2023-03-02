import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header";

const WishListMovie = () => {
  const [wishlist, setWishlist] = useState([]);
  const currentUser = useSelector((state) => state.auth);

  useEffect(() => {
    fetchWishlistMovie();
  }, []);

  const fetchWishlistMovie = async () => {
    const token = localStorage.getItem("token");
    const wishlistMovies = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/movie/1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTY3NzU5NzkyMX0.rWv-a7Wamk5J3YMvopYl3nMJfz5yz3T4R4mNwNRjH4M",
        },
      }
    );
    console.log(wishlistMovies.data);
    setWishlist(wishlistMovies.data);
  };
  return (
    <div>
      <Header />
      <h1>WishList</h1>
      <div className="container">
        {wishlist.map((wish, key) => {
          return (
            <div class="card w-100 mt-2">
              <div className="row">
                <div className="col-md-2">1</div>
                <div className="col-md-3">
                  <p>{wish.name}</p>
                </div>
                <div className="col-md-6">3</div>
                <div className="col-md-1">
                  <button className="btn btn-danger">delete</button>
                </div>
              </div>
              {/* <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Button
            </a>
          </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishListMovie;
