import axios from "axios";

export const getUserId = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
