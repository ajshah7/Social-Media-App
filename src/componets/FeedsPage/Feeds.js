import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { feeds } from "../../actions/Feeds";
import PostField from "../container/PostField";
import "./Feeds.css";

const Feed = ({ posts }) => {
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

        <PostField />
        {posts.map((posts) => (
          <Link to={`/feed/${posts.postID}`} id="link">
            <div className="posts-container">
              <div className="feeds-user-info-box">
                <img alt="" src={posts.image} className="user-image" />

                <div className="feeds-user-info-box-right">
                  <div>
                    <Link to={`/user/${posts.uuid}`} id="link">
                      <div className="feed-name">{posts.name}</div>
                    </Link>
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
                  <div className="post-time">{posts.time}</div>
                </div>
              </div>
              <div className="feeds-text">{posts.post}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.Feeds.posts,
});
export default connect(mapStateToProps, { feeds })(Feed);
