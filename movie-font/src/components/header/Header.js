import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const currentUser = useSelector((state) => state.auth);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://localhost:3001/home">
          My Movie App
        </a>
        {currentUser.isAuthenticated ? (
          <a className="navbar-brand" href="http://localhost:3001/wishlist">
            wishlist
          </a>
        ) : (
          <a className="navbar-brand" href="http://localhost:3001/login">
            login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
