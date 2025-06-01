import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getTrendingMovies = async () => {
  const result = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return result;
};

export const getMovieWithQuery = async (query) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return result;
};
export const getMovieDetails = async (id) => {
  const film = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return film;
};
export const getMovieCredits = async (id) => {
  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return credits;
};

export const getMovieReviews = async (id) => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return reviews;
};
