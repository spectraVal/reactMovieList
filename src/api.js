import axios from "axios";
const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

const API_URL = "http://localhost:3000/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getMovieList = async (page = 1, query = "") => {
  const url = query
    ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
    : `${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`;

  const response = await axios.get(url);
  return response.data.results;
};

export const searchMovie = async (q) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASEURL}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${q}`
  );
  const search = await response.json();
  return search.results;
};

export default api;
