import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">
          <li>
            <Link
              to="/exercise-one"
              className={`navbar__link ${
                location.pathname === "/exercise-one"
                  ? "navbar__link--active"
                  : ""
              }`}
            >
              Exercise One
            </Link>
          </li>
          <li>
            <Link
              to="/exercise-two"
              className={`navbar__link ${
                location.pathname === "/exercise-two"
                  ? "navbar__link--active"
                  : ""
              }`}
            >
              Exercise Two
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
