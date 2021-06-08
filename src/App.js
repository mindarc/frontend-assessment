import "./App.css";
import ExerciseOne from "./pages/ExerciseOne/ExerciseOne";
import ExerciseTwo from "./pages/ExerciseTwo/ExerciseTwo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
		</Router>
	);
};

export default App;
