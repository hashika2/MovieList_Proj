import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsBookmark, BsFillPersonFill } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { getWishlistMovie } from "../../api/userApi";

const Header = ({ isAdd, id }) => {
  const [count, setCount] = useState(0);
  const isAuth = localStorage.getItem("isAuthenticated");
  const currentUser = useSelector((state) => state.auth);

  useEffect(() => {
    wishlistCount();
  }, [isAdd, id]);

  async function wishlistCount() {
    const wishlist = await getWishlistMovie();
    setCount(wishlist.data.length);
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Movie App
        </Link>
        {isAuth ? (
          <div style={{ display: "flex" }}>
            <Link className="navbar-brand" to="/wishlist">
              <Badge bg="danger">{count}</Badge>
              <BsBookmark />
            </Link>
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BsFillPersonFill />
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
                {/* <Link className="dropdown-item" to="/wishlist">
                  Wishlist
                </Link> */}
                <Link className="dropdown-item" to="/#">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <Link
            className="btn btn-primary navbar-brand"
            to="/login"
            style={{ color: "white" }}
          >
            login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
