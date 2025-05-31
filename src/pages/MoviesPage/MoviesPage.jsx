import { useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getMovieWithQuery } from "../../tmbd-api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  // const [page, setPage] = useState(1);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const fetchFilms = async () => {
      try {
        const { data } = await getMovieWithQuery(query);
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally");
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
      <MovieList location={location} films={films} />
    </div>
  );
};
export default MoviesPage;
