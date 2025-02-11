import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieCast from "../services/fetch-movie-cast";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        console.log(movieId);

        const response = await fetchMovieCast(movieId);
        console.log(response);

        setActors(response);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [movieId]);

  if (!actors) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {actors.data.cast.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default MovieCast;
