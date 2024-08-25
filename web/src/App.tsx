import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ExerciseOne } from "./pages/exerciseOne";
import { ExerciseTwo } from "./pages/exerciseTwo";

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/exercise-one" replace />} />
            <Route path="/exercise-one" element={<ExerciseOne />} />
            <Route path="/exercise-two" element={<ExerciseTwo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
