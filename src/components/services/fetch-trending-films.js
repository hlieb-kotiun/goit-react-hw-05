import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDUwZWFlNDc5YzQ1ZTIwZWE4ZjE4Njc5MWEzMTI3MiIsIm5iZiI6MTczOTExMzM3Ni41NDQsInN1YiI6IjY3YThjM2EwMDhkZmY5MDMxOGYxMTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5mgGuEofmztGhSVDRnQ3eKWsukewc8PCN-n1rgp5ZU",
  },
};

const fetchMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export default fetchMovies;
