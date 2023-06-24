import React from "react";
import "./index.css";

const WinOrLoss = (props) => {
  const { onClickPlayAgain, isWon, score } = props;

  const setGame = () => {
    onClickPlayAgain();
  };

  const wonCard = () => {
    return (
      <div className="win-loose-container">
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>12/{score}</p>
          <button className="play-button" type="button" onClick={setGame}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win-pic"
          className="emoji-image"
        />
      </div>
    );
  };

  const lossCard = () => {
    return (
      <div className="win-loose-container">
        <div>
          <h1>You Lose</h1>
          <h3>Best Score</h3>
          <h3 style={{ color: "red", fontWeight: "bold" }}>{score}/12</h3>
          <button className="play-button" type="button" onClick={setGame}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win-pic"
          className="emoji-image"
        />
      </div>
    );
  };

  return <div>{isWon ? wonCard() : lossCard()}</div>;
};

export default WinOrLoss;
