import { useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem";
import s from "./MovieList.module.css";

const MovieList = ({ trendingFilms }) => {
  return (
    <ul className={s.list}>
      {trendingFilms.map((item) => {
        return <MovieListItem key={item.id} title={item.title} id={item.id} />;
      })}
    </ul>
  );
};

export default MovieList;
