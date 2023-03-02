import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Login from "../components/authentication/Login";

export default function AuthGuard({ children }) {
  const currentUser = useSelector((state) => state.auth);
  const { isAuthenticated } = currentUser;
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState("");

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
