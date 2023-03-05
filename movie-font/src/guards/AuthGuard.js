import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Login from "../pages/auth/Login";

export default function AuthGuard({ children }) {
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState("");

  if (!token) {
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
