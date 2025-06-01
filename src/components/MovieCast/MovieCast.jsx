import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getMovieCredits } from "../../tmbd-api";
import s from "./MovieCast.module.css";
import { SyncLoader } from "react-spinners";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const { data } = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="container">
      {loader && <SyncLoader className="loader" color="rgb(202, 35, 35" />}

      <ul className={s.list}>
        {cast.map((item) => (
          <li key={item.cast_id}>
            <div className={s.cardWrapper}>
              <div className={s.imgWrapper}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt="profile"
                />
              </div>

              <p className={s.name}>{item.original_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
