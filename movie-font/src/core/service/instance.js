import axios from "axios";

const userClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

userClient.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
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

userClient.interceptors.response.use(
  (response) => {
    if (response.headers["refresh-token"]) {
      this.authService.setAuthToken(response.headers["refresh-token"]);
      // event.dispatch(ON_JWT_REFRESHED);
    }
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      // event.dispatch(ON_JWT_EXPIRED);
      localStorage.clear();
      return (window.location.href = "/signin");
      return Promise.reject(error);
    }
    if (error.response.status === 500 && error.response.data?.message === "internal_server_error") {
      // event.dispatch(ON_SERVER_ERROR);
      return Promise.reject(error);
    }
    if (error?.code === "ERR_NETWORK") {
      // event.dispatch(ON_NETWORK_ERROR);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);