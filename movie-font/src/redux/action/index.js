import { Types } from "../types";

export const loginUser = (userObj) => {
  return {
    type: Types.USER_LOGGED,
    payload: userObj,
  };
};

export const registerUser = (userObj) => {
  return {
    type: Types.USER_REGISTERED,
    payload: userObj,
  };
};

export const addMovie = (movieObj) => {
  return {
    type: Types.MOVIE_ADDED,
    payload: movieObj,
  };
};

export const removeMovie = (movieObj) => {
  return {
    type: Types.MOVIE_REMOVED,
    payload: movieObj,
  };
};
