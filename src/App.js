import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './scss/index.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './views/LandingPage';
import ExerciseOne from './views/ExerciseOne';
import ExerciseTwo from './views/ExerciseTwo';
import Banana from './views/Banana';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/exercise1" component={ExerciseOne} />
          <Route exact path="/exercise2" component={ExerciseTwo} />
          <Route exact path="/banana" component={Banana} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

