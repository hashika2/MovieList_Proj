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
