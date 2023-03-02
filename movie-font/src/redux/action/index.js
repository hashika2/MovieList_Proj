export const loginUser = (userObj) => {
  return {
    type: "USER_LOGGED",
    payload: userObj,
  };
};

export const registerUser = (userObj) => {
  return {
    type: "USER_REGISTERED",
    payload: userObj,
  };
};

export const addMovie = (movieObj) => {
  return {
    type: "MOVIE_ADDED",
    payload: movieObj,
  };
};

export const removeMovie = (movieObj) => {
  return {
    type: "MOVIE_REMOVED",
    payload: movieObj,
  };
};
