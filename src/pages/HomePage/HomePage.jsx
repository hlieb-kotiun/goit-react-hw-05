import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../tmbd-api";
import s from "./HomePage.module.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setFilms([]);
        setLoader(true);
        const { data } = await getTrendingMovies();
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchFilms();
  }, []);

  return (
    <div className="films-container">
      {films.length > 0 && <h1 className={s.title}>Trending movies</h1>}
      {loader && <h2>Loading...</h2>}
      {films.length === 0 ? (
        <h3>There is no films yet!</h3>
      ) : (
        <MovieList location={location} films={films} />
      )}
    </div>
  );
};
export default HomePage;
