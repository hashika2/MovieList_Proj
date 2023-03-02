import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import WishListMovie from "../components/movie/WishListMovie";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import MovieList from "../components/movie/MovieList";
import Movie from "../components/movie/Movie";
import AuthGuard from "../guards/AuthGuard";

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
