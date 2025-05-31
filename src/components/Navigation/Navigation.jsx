import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
