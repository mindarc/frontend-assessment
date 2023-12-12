import './contentTile.css';

const ContentTile = () => {
  return (
    <div className="contentTile__container">
      <img className="contentTile__image" src="https://via.placeholder.com/400x300" />
      <p className="contentTile__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button className="contentTile__button">READ MORE</button>
    </div>
  );
};

export default ContentTile;
