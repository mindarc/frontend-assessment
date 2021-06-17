import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './assets/scss/index.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './views/HomePage';
import ExerciseTwo from './views/ExerciseTwo';
import ExerciseOne from './views/ExerciseOne';
import Banna from './views/Banna';

// import HomePage from './views/HomePage';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/banna" component={Banna} />
          <Route exact path="/exercise1" component={ExerciseOne} />
          <Route exact path="/exercise2" component={ExerciseTwo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;