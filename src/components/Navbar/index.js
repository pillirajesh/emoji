import React from "react";
import "./index.css";

const Navbar = (props) => {
  const { currentScore, topScore } = props;
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji-logo"
          className="logo"
        />
        <h2 className="navbar-heading">Memory Game</h2>
      </div>
      <div className="score-container">
        <p style={{ marginRight: "20px" }}>
          Score: <span style={{ fontWeight: "bold" }}>{currentScore}</span>
        </p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  );
};

export default Navbar;
