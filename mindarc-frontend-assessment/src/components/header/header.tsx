import './header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="header__image" src="https://via.placeholder.com/1920x650" />
      <div className="header__text">
        <h1 className="header__title">Hello Developer!</h1>
        <h3 className="header__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
    </div>
  );
};

export default Header;
