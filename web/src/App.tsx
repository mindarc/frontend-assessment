import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./pages/landingPage";
import { DynamicContent } from "./pages/dynamicContent";
import { Footer } from "./components/Footer";

export const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/landing-page" replace />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/dynamic-content" element={<DynamicContent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);
