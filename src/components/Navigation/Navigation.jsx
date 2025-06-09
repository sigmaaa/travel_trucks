import React from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "/Logo.svg";

const Navigation = () => {
  const navClasses = ({ isActive }) => (isActive ? css.active : css.link);
  return (
    <header className={css.container}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={css.navLinks}>
        <NavLink to="/" className={navClasses}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navClasses}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
