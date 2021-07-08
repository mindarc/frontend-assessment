import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="home__wrapper--absolute">
            <header className="home__wrapper__header">
                <h1>Frontend Assessment</h1>
                <p>Ryan</p>
            </header>
            <div className="home__wrapper__center">

                <Link to="/exercise1">
                    <button className="home__wrapper__center__button">Exercise1</button>
                </Link>
                <Link to="/exercise2">
                    <button className="home__wrapper__center__button">Exercise2</button>
                </Link>
                <Link to="/banana">
                    <button className="home__wrapper__center__button">Banana</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;