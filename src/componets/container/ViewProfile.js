import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { feeds } from "../../actions/Feeds";
import "../FeedsPage/Feeds.css";
import img from "../../images/back icon.png";

const ViewProfile = ({ loggedUser, posts, match }) => {
  var id = match.params.id;
  var gotPosts = [];

  //   iterating through all post to get all user postID
  for (var i = 0; i < posts.length; i++) {
    if (id == posts[i].uuid) {
      gotPosts.push(posts[i]);
    }
  }

  //   if reloaded, the logged user will be undefined. redirecting back to login
  if (loggedUser.name === undefined) {
    return <Redirect to="/" />;
  }
  return (
    <div className="feeds-container">
      <div className="feeds-box">
        <div className="field-head">
          <div className="your-feeds">
            <div className="feed-item-box">
              <Link to="/feeds">
                <img alt="" className="back-icon" src={img} />
              </Link>
              <div className="header-text">User Feed</div>
            </div>
            <Link to="/">
              <span className="feeds-logout">LOGOUT</span>
            </Link>
          </div>
        </div>
        <div className="toFeeds">
          {gotPosts.map((posts) => (
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
                  <div className="post-time">{posts.time}</div>
                </div>
              </div>
              <div className="feeds-text">{posts.post}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.Feeds.posts,
  loggedUser: state.Auth.loggedUser,
});
export default connect(mapStateToProps, { feeds })(ViewProfile);
