import React from "react";
import { Link } from "react-router-dom";
import dogHeart from "../../assets/dogHeart.png";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="header">
        <h1>Adopt your favorite pet!</h1>
        <p>Help find these wonderful pets a home!</p>
        <div className="buttons">
          <Link className="hvr-fade">About Us</Link>

          <Link to="/find-pet" className="hvr-fade">
            Find a Pet
          </Link>
        </div>
      </div>
      <div className="dog-image">
        <img src={dogHeart} alt="dog" />
      </div>
    </div>
  );
};

export default Homepage;
