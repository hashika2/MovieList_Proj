import axios from "axios";

const userClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
});

userClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

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
  return userClient.delete(`movie/remove`, {
    data: {
      movieIds,
    },
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
