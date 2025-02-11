import MovieList from "../../components/MovieList/MovieList";
import fetchMovies from "../../components/services/fetch-trending-films";
import { useEffect, useState } from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies();
        setTrendingFilms(movies);
        console.log(movies);
      } catch (error) {
        console.log("catch");
      } finally {
        console.log("finaly");
      }
    };
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Trending movies</h2>
      <MovieList trendingFilms={trendingFilms} />
    </div>
  );
};

export default HomePage;
