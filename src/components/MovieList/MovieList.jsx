import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ films, location }) => {
  return (
    <ul className={s.list}>
      {films.map((item) => {
        return (
          <li key={item.id} className={s.listItem}>
            <Link to={`/movies/${item.id}`} state={location}>
              <div className={s.wrapper}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt="film"
                />
                <p className={s.title}>{item.title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
