import contentImage from "../../../images/400x300.png";

const Card = ({ image, text }) => {
	return (
		<div class="card-item">
			<img
				src={image}
				alt="Exercise One Item"
				className="card-item-image"
			/>
			<p className="card-item-text">{text}</p>
			<a href="/" className="card-item-button">
				Read More
			</a>
		</div>
	);
};

export default Card;
