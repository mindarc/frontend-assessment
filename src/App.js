import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExerciseOne from './pages/ExerciseOne';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exercise-one" element={<ExerciseOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
