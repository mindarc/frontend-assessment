import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              to="/exercise-one"
              className={`text-white text-lg font-semibold hover:text-gray-300 transition-colors ${
                location.pathname === "/exercise-one"
                  ? "border-b-2 border-white"
                  : ""
              }`}
            >
              Exercise One
            </Link>
          </li>
          <li>
            <Link
              to="/exercise-two"
              className={`text-white text-lg font-semibold hover:text-gray-300 transition-colors ${
                location.pathname === "/exercise-two"
                  ? "border-b-2 border-white"
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
