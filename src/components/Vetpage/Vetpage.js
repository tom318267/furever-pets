import React from "react";
import vet from "../../assets/vet.png";
import wave from "../../assets/wave.png";
import "./Vetpage.scss";

const Vetpage = () => {
  return (
    <div className="Vetpage">
      <div className="vet-overlay">
        <div className="container">
          <img className="vet" src={vet} alt="vet" />
          <div className="header-container">
            <h1>Spay/Neuter and wellness clinics</h1>
            <p>
              We provide low cost veterinary services to keep your pet happy and
              healthy!
            </p>
            <button className="appointment">Make an appointment</button>
          </div>
        </div>
        <img className="wave" src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default Vetpage;
