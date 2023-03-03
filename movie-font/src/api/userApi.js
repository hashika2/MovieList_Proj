import axios from "axios";
const token = localStorage.getItem("token");
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
