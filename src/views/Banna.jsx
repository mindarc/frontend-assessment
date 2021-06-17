import React from 'react'
import {
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'

const Banna = () => {
  return (
    <div className="text-center">
      <p>'b' + 'a' + + 'a' equal to 'b' + 'a' + NaN + 'a'. So the toLowerCase() method will make the string become 'banana'</p>
    </div>
  );
}

export default Banna;