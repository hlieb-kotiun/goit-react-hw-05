import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import searchMovieByName from "../../components/services/serch-movie-by-name";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [movieName, setMovieName] = useSearchParams();
  const [userFilms, setUserFilms] = useState([]);
  const movie = movieName.get("query") || "";
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const response = async () => {
      try {
        const films = await searchMovieByName(movie);
        setUserFilms(films.data.results);
      } catch (error) {
        setLoader(false);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    response();
  }, [movie]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = e.target.text.value.trim();
    movieName.set("query", query);
    setMovieName(movieName);
    form.reset();
  };

  if (loader) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" />
        <button type="submit">Search</button>
      </form>

      <MovieList trendingFilms={userFilms} />
    </div>
  );
};

export default MoviesPage;
