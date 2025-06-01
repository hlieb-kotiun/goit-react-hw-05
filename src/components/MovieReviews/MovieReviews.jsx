import { useEffect, useState } from "react";
import { getMovieReviews } from "../../tmbd-api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import { SyncLoader } from "react-spinners";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const { data } = await getMovieReviews(movieId);
        setReviews(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="films-container">
      <h2 className={s.title}>Movie reviews</h2>
      {reviews.length === 0 && (
        <p className={s.warning}>There is no reviews!</p>
      )}
      {loader && <SyncLoader className="loader" color="rgb(202, 35, 35" />}
      <ul className={s.list}>
        {reviews.map((item) => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;
