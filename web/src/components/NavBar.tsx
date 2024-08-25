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
              to="/landing-page"
              className={`navbar__link ${
                location.pathname === "/landing-page"
                  ? "navbar__link--active"
                  : ""
              }`}
            >
              Landing Page
            </Link>
          </li>
          <li>
            <Link
              to="/dynamic-content"
              className={`navbar__link ${
                location.pathname === "/dynamic-content"
                  ? "navbar__link--active"
                  : ""
              }`}
            >
              Dynamic Content
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
