import Register from "../pages/auth/Register";
import WishListMovie from "../pages/movie/WishListMovie";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Movie from "../pages/movie/Movie";
import AuthGuard from "../guards/AuthGuard";
import Login from "../pages/auth/Login";
import MovieList from "../pages/movie/MovieList";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MovieList />,
    },
    {
      path: "/",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/movie/:id",
      element: <Movie />,
    },
    {
      path: "/wishlist",
      element: (
        <AuthGuard>
          <WishListMovie />
        </AuthGuard>
      ),
    },
  ]);
}
