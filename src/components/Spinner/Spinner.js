import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="spinner-container">
        <Player
          autoplay
          loop
          keepLastFrame
          src="https://assets8.lottiefiles.com/packages/lf20_kehwtvbf.json"
          style={{ width: "300px", height: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <h1 className="loading">Loading...</h1>
      </div>
    </div>
  );
};

export default Spinner;
