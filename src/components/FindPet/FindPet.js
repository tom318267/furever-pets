import React, { useEffect } from "react";
import { getPets } from "../../actions/pets";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import PetCard from "../PetCard/PetCard";
import "./FindPet.scss";

const FindPet = ({ pets, getPets }) => {
  const { loading } = pets;
  useEffect(() => {
    getPets();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="FindPet">
      <div className="pets-overlay">
        <div className="pets-header">
          <h1>
            <i className="fas fa-paw"></i> Available Pets
          </h1>
        </div>
        <div className="card-container">
          {pets.pets.map((pet, idx) => (
            <PetCard key={idx} {...pet} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pets: state.pets,
});

export default connect(mapStateToProps, { getPets })(FindPet);
