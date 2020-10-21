import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { feeds } from "../../actions/Feeds";
import Picker from "emoji-picker-react";
import "./Feeds.css";

const Feed = ({ feeds, user, posts }) => {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [newPost, setNewText] = useState("");
  const [emoji, setEmoji] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  var images =
    "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg";

  const addPost = () => {
    if (newPost !== "" || chosenEmoji!=="") {
      feeds(images, user.name, newPost + chosenEmoji.emoji);
     
      setChosenEmoji(null);
      setEmoji(false);
    }
 
  };

    if (user.name === undefined) {
      return <Redirect to="/" />;
    }
  return (
    <div className="feeds-container">
      <div className="feeds-box">
        <div className="field-head">
          <div className="your-feeds">
            <div className="feed-item-box">
              <div className="header-text">Your Feed</div>
            </div>
            <Link to="/">
              <span className="feeds-logout">LOGOUT</span>
            </Link>
          </div>
        </div>

        <div className="post-container">
          <div className="post-textarea">
            <textarea
              type="text"
              className="write-feed-here"
              placeholder="Write a post..."
              onChange={(e) => setNewText(e.target.value)}
            ></textarea>
          </div>
          <div className="emoji-button" onClick={() => setEmoji(!emoji)} >
        <span role="img" aria-label="happy-emoji">
          &#128515;
        </span>
      </div>
   
         
          <div className="feeds-post-button" onClick={addPost}>
            POST
          </div>
        </div>
        <div
  className="emoji-container"
        >
 {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
            <span></span>
          )}

          {emoji === true ? (
            <Picker onEmojiClick={onEmojiClick} />
          ) : (
            <span></span>
          )}

        </div>
        {posts.map((posts) => (
          <div className="posts-container">
            <div className="feeds-user-info-box">
              <img alt="" src={posts.image} className="user-image" />

              <div className="feeds-user-info-box-right">
                <div>
                  <div className="feed-name">{posts.name}</div>
                  <div className="icons-box">
                    <img
                      alt=""
                      className="icon"
                      src="https://www.freeiconspng.com/thumbs/graduate-icon/graduate-icon-16.png"
                    />
                    <div className="icon-info">100</div>
                    <div className="circle-box">
                      <div className="circle"></div>
                    </div>
                    <img
                      alt=""
                      className="icon"
                      src="https://www.iconpacks.net/icons/2/free-euro-coin-icon-2141-thumb.png"
                    />
                    <div className="icon-info">340</div>
                  </div>
                </div>
                <div className="post-time">5h</div>
              </div>
            </div>
            <div className="feeds-text">{posts.post}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
  posts: state.Feeds.posts,
});
export default connect(mapStateToProps, { feeds })(Feed);
