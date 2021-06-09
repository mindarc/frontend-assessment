import "./ExerciseOne.scss";
import Banner from "./components/Banner";
import Card from "./components/Card";

// Images
import contentImage from "../../images/400x300.png";

const ExerciseOne = () => {
	return (
		<div className="exercise-one">
			<Banner />
			<div className="cards">
				<Card
					image={contentImage}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					}
				/>
				<Card
					image={contentImage}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					}
				/>
				<Card
					image={contentImage}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco."
					}
				/>
			</div>
		</div>
	);
};

export default ExerciseOne;
