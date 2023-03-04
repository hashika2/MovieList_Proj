import axios from "axios";

const token = localStorage.getItem("token");

export const userLogin = (email, password) => {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signin`, {
    email,
    password,
  });
};

export const userRegister = (firstName, lastName, email, password) => {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const getUserId = () => {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getWishlistMovie = () => {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/movie`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeFromWishList = (userId, id) => {
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/movie/remove?userId=${userId}&movieId=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const addToWishList = (movie, userData) => {
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/movie/add`,
    {
      movieId: movie.id,
      name: movie.title,
      userId: userData.data.id,
      imgUrl: `${movie.poster_path}`,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
