import React from "react";
import "./index.css";

const EmojiCard = (props) => {
  const { cardDetails, clickEmoji } = props;
  const { id, emojiName, emojiUrl } = cardDetails;

  const selectedEmoji = () => {
    clickEmoji(id);
  };

  return (
    <li className="emoji-card">
      <button type="button" className="button" onClick={selectedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  );
};

export default EmojiCard;
