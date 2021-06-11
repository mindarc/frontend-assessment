import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ExerciseOne from './modules/exercise-1/ExerciseOne';
import ExerciseTwo from './modules/exercise-2/ExerciseTwo';
import Banana from './modules/banana/Banana';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Banana</Link>
          </li>
          <li>
            <Link to="/one">Exercise 1</Link>
          </li>
          <li>
            <Link to="/two">Exercise 2</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Banana />
          </Route>
          <Route path="/one">
            <ExerciseOne />
          </Route>
          <Route path="/two">
            <ExerciseTwo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
