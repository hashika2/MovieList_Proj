import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmark, BsFillPersonFill } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { getWishlistMovie } from "../../api/userApi";
import "../../style/movie.css";

const Header = ({ isAdd, id, wishlist }) => {
  const [count, setCount] = useState(0);
  const isAuth = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  useEffect(() => {
    wishlistCount();
  }, [isAdd, id, wishlist]);

  async function wishlistCount() {
    const wishlist = await getWishlistMovie();
    setCount(wishlist.data.length);
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
    window.location.reload(true);
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Movie App
        </Link>
        {isAuth ? (
          <div className="nav-bar">
            <Link className="navbar-brand" to="/wishlist">
              <Badge bg="danger">{count}</Badge>
              <BsBookmark />
            </Link>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BsFillPersonFill />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
                {/* <Link className="dropdown-item" to="/wishlist">
                  Wishlist
                </Link> */}
                <Link className="dropdown-item" onClick={logout}>
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
