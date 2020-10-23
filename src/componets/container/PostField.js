import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { feeds } from "../../actions/Feeds";
import Picker from "emoji-picker-react";
import "./PostField.css";

var images = "https://rb.gy/g72myz";

const Feed = ({ feeds, loggedUser }) => {
  const [chosenEmoji, setChosenEmoji] = useState([]);
  const [newPost, setNewText] = useState("");
  const [emoji, setEmoji] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const addPost = () => {
    if (chosenEmoji.emoji || newPost !== "") {
      feeds(
        loggedUser.uuid,
        images,
        loggedUser.name,
        chosenEmoji.emoji ? newPost + chosenEmoji.emoji : newPost,
        1 + "s"
      );
      console.log(chosenEmoji.emoji);
      setChosenEmoji("");
      setEmoji(false);
    }
  };

  if (loggedUser.name === undefined) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="post-container">
        {/* text area to post */}
        <div className="post-textarea">
          <textarea
            value={chosenEmoji.emoji ? newPost + chosenEmoji.emoji : newPost}
            type="text"
            className="write-feed-here"
            placeholder="Write a post..."
            onChange={(e) => setNewText(e.target.value)}
          ></textarea>
        </div>

        {/* emoji div */}
        <div className="emoji-button" onClick={() => setEmoji(!emoji)}>
          <span role="img" aria-label="happy-emoji">
            &#128515;
          </span>
        </div>

        {/* button to post the feed */}
        <div className="feeds-post-button" onClick={addPost}>
          POST
        </div>
      </div>

      {/* emoji selector window */}
      <div className="emoji-container">
        {emoji === true ? (
          <Picker onEmojiClick={onEmojiClick} />
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedUser: state.Auth.loggedUser,
});
export default connect(mapStateToProps, { feeds })(Feed);
