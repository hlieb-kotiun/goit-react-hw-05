import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../services/fetch-movie-reviews";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const response = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        console.log(reviews);

        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, [movieId]);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {reviews.data.results.length < 1 && <h3>Sorry, there are no reviews</h3>}
      <ul className={s.list}>
        {reviews.data.results.map((item) => {
          return (
            <li className={s.item} key={item.id}>
              <h3>{`Author: ${item.author}`}</h3>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
