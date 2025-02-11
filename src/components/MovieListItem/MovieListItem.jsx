import { Link, NavLink, useLocation } from "react-router-dom";

const MovieListItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={id.toString()} state={location}>
        {title}
      </Link>
      ;
    </li>
  );
};

export default MovieListItem;
