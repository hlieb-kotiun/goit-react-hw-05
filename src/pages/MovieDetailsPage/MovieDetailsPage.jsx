import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../tmbd-api";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { SyncLoader } from "react-spinners";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const film = await getMovieDetails(movieId);
        setDetails(film.data);
        console.log(film);
      } catch (e) {
        console.log(e);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (!details) {
    return;
  }

  return (
    <div className={s.container}>
      <Link to={location?.state ?? "/movies"} className={s.goBackLink}>
        Go back
      </Link>
      {loader && <SyncLoader className="loader" color="rgb(202, 35, 35" />}
      <div className={s.wrapper}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w400${details.backdrop_path}`}
          alt={details.original_title}
        />
        <ul className={s.list}>
          <li className={s.item}>
            <h2>{details.title}</h2>
          </li>

          <li className={s.item}>
            <h3>Overview: </h3>
            {details.overview}
          </li>

          <li className={s.item}>
            <h3>Genres:&nbsp;</h3>
            {details.genres.map((item) => (
              <span key={item.name}>{item.name}&nbsp;</span>
            ))}
          </li>
          <li className={s.item}>
            <h3>Original country:</h3>
            <p>{details.origin_country}</p>
          </li>
        </ul>
      </div>
      <div className={s.linksWrapper}>
        <NavLink
          to="cast"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Reviews
        </NavLink>
      </div>
      <div className={s.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
