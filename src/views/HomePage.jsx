import React from 'react'
import {
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home__wrapper--absolute">
      <div className="home__center">
        <Link to="/exercise1">
          <Button color="primary">Exercise1</Button>
        </Link>
        <Link to="/exercise2">
          <Button color="secondary">Exercise2</Button>
        </Link>
        <Link to="/banna">
          <Button color="primary">Banna</Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;