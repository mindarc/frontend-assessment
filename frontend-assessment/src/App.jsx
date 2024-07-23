import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseOne from './pages/exerciseOne'
import ExerciseTwo from './pages/exerciseTwo';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ExerciseOne />} />
        <Route path="/exercise-two" element={<ExerciseTwo />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
