import React from "react";
import { connect } from "react-redux";
import { addLike } from "../../actions/pets";
import ellipse from "../../assets/ellipse.png";
import "./PetCard.scss";

const PetCard = ({ id, name, img, breed, age, info, story, like, addLike }) => {
  return (
    <div className="PetCard">
      <div className="card border-0">
        <img className="petPic" src={img} alt="" />
        <div
          onClick={() => {
            addLike(id);
          }}
          className="circle-div"
        >
          <img src={ellipse} alt="" className="circle" />
          {like ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </div>
        <div className="card-body">
          <h2>{name}</h2>
          <p>
            <span>Breed:</span> {breed}
          </p>
          <p>
            <span>Age:</span> {age}
          </p>
          <p className="story">{story}</p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addLike })(PetCard);
