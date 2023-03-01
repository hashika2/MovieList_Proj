import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import WishListMovie from "../components/movie/WishListMovie";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import MovieList from "../components/movie/MovieList";
import Movie from "../components/movie/Movie";

const authProtectedRoutes = [{ path: "/wishlist", component: WishListMovie }];

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export default function Router() {
  return useRoutes([
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
      path: "/home",
      element: <MovieList />,
      children: [{ path: "movie", element: <Movie /> }],
    },
    {
      path: "/movie/:id",
      element: <Movie />,
    },
  ]);
}
