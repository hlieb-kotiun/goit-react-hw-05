import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../tmbd-api";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(movieId);

        const film = await getMovieDetails(movieId);
        console.log(film);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("finally");
      }
    };
    fetchData();
  }, [movieId]);

  // if (!details) {
  //   return;
  // }

  return (
    <div>
      <h2>Movie details page</h2>
    </div>
  );
};
export default MovieDetailsPage;
