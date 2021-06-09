import "./App.css";
import ExerciseOne from "./pages/ExerciseOne/ExerciseOne";
import ExerciseTwo from "./pages/ExerciseTwo/ExerciseTwo";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/exercise-one">
					<ExerciseOne />
				</Route>
				<Route path="/exercise-two">
					<ExerciseTwo />
				</Route>
			</Switch>
			<div class="home-page-container">
				<h1 className="home-page-title">
					Hi! Thank you for the exam. My answer for the 3rd bonus
					point is in the readme file. Thank you and have a nice day!
				</h1>
				<div className="exercises">
					<Link to="/exercise-one" className="exercise-item">
						Exercise 1
					</Link>
					<Link to="/exercise-two" className="exercise-item">
						Exercise 2
					</Link>
				</div>
			</div>
		</Router>
	);
};

export default App;
