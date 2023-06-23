import React from "react";
import "./index.css";

const EmojiCard = (props) => {
  const { cardDetails, clickHero } = props;
  const { id, heroName, heroUrl } = cardDetails;

  const selectedHero = () => {
    clickHero(id);
  };

  return (
    <li className="emoji-card">
      <button type="button" className="button" onClick={selectedHero}>
        <img src={heroUrl} alt={heroName} className="image" />
      </button>
    </li>
  );
};

export default EmojiCard;
