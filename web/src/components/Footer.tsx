import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="mt-auto py-4 bg-gray-100">
      <div className="container mx-auto flex justify-center">
        <nav>
          <Link
            to="/landing-page"
            className={`mx-4 text-lg font-semibold hover:text-gray-600 transition-colors ${
              location.pathname === "/landing-page"
                ? "border-b-2 border-gray-600"
                : ""
            }`}
          >
            Landing Page
          </Link>
          <Link
            to="/dynamic-content"
            className={`mx-4 text-lg font-semibold hover:text-gray-600 transition-colors ${
              location.pathname === "/dynamic-content"
                ? "border-b-2 border-gray-600"
                : ""
            }`}
          >
            Dynamic Content
          </Link>
        </nav>
      </div>
    </footer>
  );
};
