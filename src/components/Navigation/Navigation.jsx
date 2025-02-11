import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const bildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.navigation}>
        <NavLink to="/" className={bildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={bildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
