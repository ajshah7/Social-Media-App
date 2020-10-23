import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { feeds } from "../../actions/Feeds";
import Picker from "emoji-picker-react";
import "./PostField.css";


const Feed = ({ feeds, loggedUser }) => {
  const [newPost, setNewPost] = useState("");
  const [emoji, setEmoji] = useState("");

  // choosing and adding emoji into the text
  const onEmojiClick = (event, emojiObject) => {
    setNewPost(newPost+emojiObject.emoji+" ");
  };
  
 // posting to the feeds.
  const addPost = () => {
    if ( newPost !== "") {
      feeds(
        loggedUser.uuid,
        loggedUser.name,
        newPost,
        Date.now,
      );
      setNewPost("")
      setEmoji(false);
    }
  };

  //   if reloaded, the logged user will be undefined. redirecting back to login
  if (loggedUser.name === undefined) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="post-container">
        {/* text area to post */}
        <div className="post-textarea">
          <textarea
            value={newPost}
            type="text"
            className="write-feed-here"
            placeholder="Write a post..."
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
        </div>

        {/* emoji button div */}
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
