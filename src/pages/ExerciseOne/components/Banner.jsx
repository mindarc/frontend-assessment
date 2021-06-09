import desktopBanner from "../../../images/1920x650.png";
import mobileBanner from "../../../images/600x600.png";

const Banner = () => {
	return (
		<div className="banner">
			{/* Banner for Desktop */}
			<img
				src={desktopBanner}
				alt="Exercise 1 Banner"
				className="banner-image banner-image-desktop"
			/>
			{/* Banner for Mobile */}
			<img
				src={mobileBanner}
				alt="Exercise 1 Banner"
				className="banner-image banner-image-mobile"
			/>

			<div className="banner-content">
				<div className="content-text">
					<h1 class="content-title">Hello Developer!</h1>
					<hp className="content-subtitle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</hp>
				</div>
			</div>
		</div>
	);
};

export default Banner;
