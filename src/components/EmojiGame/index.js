import React from "react";
import EmojiCard from "../EmojiCard";
import Navbar from "../Navbar";
import "./index.css";
import WinOrLoss from "../WinOrLoseCard";
import { Component } from "react";

class Emoji extends Component {
  state = { gameOn: true, clickedEmojisList: [], topScore: 0 };

  popUpRulesBoard = () => {
    window.alert(`1) When an Emoji is clicked, If it is not the same as any of the previously clicked emojis, then the Score should be incremented by one.
    2) If all the emojis are clicked exactly once Won Game.
    3) If it is the same as any of the previously clicked emojis Lose Game.
  `);
  };

  resetGame = () => {
    this.setState({ clickedEmojisList: [], gameOn: true });
  };

  finishGameAndSetTopScore = (currentScore) => {
    const { topScore } = this.state;
    let newTopScore = topScore;
    if (currentScore > topScore) {
      newTopScore = currentScore;
    }
    this.setState({ topScore: newTopScore, gameOn: false });
  };

  getShuffleEmojiList = () => {
    //to shuffle the emojis every time use below code...
    const { emojisList } = this.props;
    return emojisList.sort(() => Math.random() - 0.5);
  };

  clickHero = (id) => {
    const { emojisList } = this.props;
    const { clickedEmojisList } = this.state;
    const emojiPresent = clickedEmojisList.includes(id);
    const clickedEmojisLength = clickedEmojisList.length;

    if (emojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength);
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length);
      }
      this.setState((prevState) => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }));
    }
  };

  gameInProgress = () => {
    const shuffleEmojiList = this.getShuffleEmojiList();

    return (
      <ul className="unordered-list">
        {shuffleEmojiList.map((eachEmoji) => (
          <EmojiCard
            cardDetails={eachEmoji}
            key={eachEmoji.id}
            clickHero={this.clickHero}
          />
        ))}
      </ul>
    );
  };

  gameOver = () => {
    const { emojisList } = this.props;
    const { clickedEmojisList } = this.state;
    const isWon = clickedEmojisList.length === emojisList.length;

    return (
      <WinOrLoss
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    );
  };

  render() {
    const { gameOn, clickedEmojisList, topScore } = this.state;
    return (
      <>
        <Navbar currentScore={clickedEmojisList.length} topScore={topScore} />
        {gameOn ? this.gameInProgress() : this.gameOver()}
        {gameOn ? (
          <button
            className="rules-button"
            type="button"
            onClick={this.popUpRulesBoard}
          >
            Rules
          </button>
        ) : null}
      </>
    );
  }
}

export default Emoji;
