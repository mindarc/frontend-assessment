import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/landingPage";
import { DynamicContent } from "./pages/dynamicContent";

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/landing-page" replace />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/dynamic-content" element={<DynamicContent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
