import desktopBanner from "../assets/images/1920x650.png";
import mobileBanner from "../assets/images/600x600.png";

export const Banner = () => {
	return (
		<div className="relative">
			{/* Banner for Desktop */}
			<img
				src={desktopBanner}
				alt="Exercise 1 Banner"
				className="w-full hidden md:block"
			/>
			{/* Banner for Mobile */}
			<img
				src={mobileBanner}
				alt="Exercise 1 Banner"
				className="w-full md:hidden"
			/>

			<div className="absolute text-white flex items-center justify-center bg-[rgba(0,0,0,0.3)] inset-0">
				<div className="text-center">
					<h1 className="font-bold text-4xl top-0 mb-3 md:text-6xl">
						Hello Developer!
					</h1>
					<p className="text-2xl leading-8 tracking-[2px] md:tracking-[3px] md:text-4xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>
			</div>
		</div>
	);
};
