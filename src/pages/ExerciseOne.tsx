import { Banner } from "../ui/Banner";
import { Card } from "../ui/Card";
import Image from "../assets/images/400x300.png";

export const ExerciseOne = () => {
	return (
		<div>
			<Banner />
			<div className="grid gap-y-[30px] gap-x-[30px] grid-cols-[1fr] px-[30px] py-10 w-full max-w-[1200px] mx-auto my-0 p-10  md:grid-cols-[1fr_1fr_1fr] md:gap-y-10 md:gap-x-10">
				<Card
					image={Image}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					}
				/>
				<Card
					image={Image}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					}
				/>
				<Card
					image={Image}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco."
					}
				/>
			</div>
		</div>
	);
};
