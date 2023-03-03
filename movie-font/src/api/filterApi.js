import axios from "axios";

export const getGenres = () => {
  return axios.get(
    `${process.env.REACT_APP_REST_API_BASE_URL}/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
};

export const getRating = () => {
  return axios.get(
    `${process.env.REACT_APP_REST_API_BASE_URL}/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
};

export const searchMovie = (movie, page) => {
  return axios.get(
    `${process.env.REACT_APP_REST_API_BASE_URL}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&query=${movie}`
  );
};

export const getuPularMovie = (page) => {
  return axios.get(
    `${process.env.REACT_APP_REST_API_BASE_URL}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );
};

export const getRatingMovie = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};

export const getyearWiseMovie = (page) => {
  return ["2000", "2001", "2002", "2003", "2021", "2022"];
};
