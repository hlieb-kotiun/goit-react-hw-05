import { useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getMovieWithQuery } from "../../tmbd-api";
import MovieList from "../../components/MovieList/MovieList";
import { SyncLoader } from "react-spinners";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const fetchFilms = async () => {
      try {
        setLoader(true);
        const { data } = await getMovieWithQuery(query);
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchFilms();
  }, [query]);

  const handleSetQuery = (query) => {
    setFilms([]);
    searchParams.set("query", query);
    setSearchParams(searchParams);
  };

  return (
    <div className="films-container">
      <SearchBar handleSetQuery={handleSetQuery} />
      {films.length === 0 && <h2>Find a Movie!</h2>}
      {loader && <SyncLoader className="loader" color="rgb(202, 35, 35" />}

      {films.length > 0 ? (
        <MovieList location={location} films={films} />
      ) : (
        <p>There is no films matching your request! </p>
      )}
    </div>
  );
};
export default MoviesPage;
