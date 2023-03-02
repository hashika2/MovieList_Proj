import { combineReducers } from "redux";
import auth from "./auth";
import movie from "./movie";

export default combineReducers({
  auth: auth,
  movie: movie,
});
