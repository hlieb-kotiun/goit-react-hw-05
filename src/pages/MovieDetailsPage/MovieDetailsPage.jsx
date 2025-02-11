import { data, Outlet, useParams, useLocation } from "react-router-dom";
import fetchMovieDetails from "../../components/services/fetch-movie-data";
import { useEffect, useState } from "react";
import s from "./MovieDetailsPage.module.css";
import { Link, NavLink } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [user, setUser] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        console.log(response);

        setUser(response);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [movieId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={location.state} state={location.state}>
        Go back
      </Link>
      <div className={s.wrapper}>
        <div>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${user.data.backdrop_path}`}
          />
        </div>
        <div className={s.dataContainer}>
          <div className={s.data}>
            <h2>{user.data.original_title}</h2>
            <p>{`Rating: ${user.data.vote_average.toFixed(1)}`}</p>
          </div>
          <div className={s.data}>
            <h3>Overview</h3>
            <p>{user.data.overview}</p>
          </div>
          <div className={s.data}>
            <h4>Genres</h4>
            <p>{user.data.genres.map((item) => item.name).join(", ")}</p>
          </div>
        </div>
      </div>
      <h2 className={s.title}>Aditional information</h2>
      <ul className={s.list}>
        <li>
          <NavLink className={s.link} to="cast">
            Cast
          </NavLink>
        </li>
        <NavLink className={s.link} to="reviews">
          Reviews
        </NavLink>
        <li></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
