import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isAuth = localStorage.getItem("isAuthenticated");
  const currentUser = useSelector((state) => state.auth);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Movie App
        </Link>
        {isAuth ? (
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
              <Link className="dropdown-item" to="/wishlist">
                Wishlist
              </Link>
              <Link className="dropdown-item" to="/#">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link className="btn btn-primary navbar-brand" to="/login">
            login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
