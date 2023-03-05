import axios from "axios";

const token = localStorage.getItem("token");

const userClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const userLogin = (email, password) => {
  return userClient.post(`auth/signin`, {
    email,
    password,
  });
};

export const userRegister = (firstName, lastName, email, password) => {
  return userClient.post(`auth/signup`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const getUserId = () => {
  return userClient.get(`auth/user`);
};

export const getWishlistMovie = () => {
  return userClient.get(`movie`);
};

export const removeFromWishList = (movieIds) => {
  return userClient.post(`movie/remove`, {
    movieIds,
  });
};

export const addToWishList = (movie, userData) => {
  return userClient.post(`movie/add`, {
    movieId: movie.id,
    name: movie.title,
    userId: userData.data.id,
    imgUrl: `${movie.poster_path}`,
  });
};
