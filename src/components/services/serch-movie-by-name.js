import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDUwZWFlNDc5YzQ1ZTIwZWE4ZjE4Njc5MWEzMTI3MiIsIm5iZiI6MTczOTExMzM3Ni41NDQsInN1YiI6IjY3YThjM2EwMDhkZmY5MDMxOGYxMTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5mgGuEofmztGhSVDRnQ3eKWsukewc8PCN-n1rgp5ZU",
  },
};

const searchMovieByName = async (query) => {
  const details = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    options
  );
  return details;
};

export default searchMovieByName;
