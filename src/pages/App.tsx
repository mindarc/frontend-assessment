import { Link } from "react-router-dom";

export const App = () => {
	return (
		<div className="w-full h-screen bg-slate-900 text-white flex justify-center items-center flex-col">
			<div className="max-w-[1000px] px-10 text-center">
				<h1 className="font-bold text-4xl mb-10">
					Olaa! Thanks for the exam. My answer for the Third bonus
					point is in the readme file.
				</h1>
				<div className="flex gap-4 justify-center">
					<Link to="/exercise-one" className="underline text-2xl">
						Exercise 1
					</Link>
					<Link to="/exercise-two" className="underline text-2xl">
						Exercise 2
					</Link>
				</div>
			</div>
		</div>
	);
};

export default App;
