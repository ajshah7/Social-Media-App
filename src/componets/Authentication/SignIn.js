import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loggedUser } from "../../actions/Auth";
import Error from "./Error";

import "./SignIn.css";
var type;
const SignIn = ({ user, loggedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");



  const onSubmit = () => {
    var flag = true;
    for (var i = 0; i < user.length; i++) {
      if (email === user[i].email) {
        if (password === user[i].password) {
          flag = false;
          loggedUser(user[i].name, user[i].uuid);
          setSuccess("yes");
        }
      }
    }

    if (flag) {
      type = "incorrect-password";
      setSuccess("fail");
      setError("Incorrect password");
    }
  };

  if (success === "yes") {
    return <Redirect to="/feeds" />;
  }

  return (
    <div className="Sign-in-container">
      <div className="Sign-in-box">
        <div className="login-heading">Sign In</div>
        <div className="login-sub-text">Welcome back</div>
        <input
          className="login-input"
          type="email"
          required
          name="name"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-password">Forgot Password?</div>

        {success === "fail" ? (
          <Error error={error} type={type} />
        ) : (
          <span></span>
        )}

        <button className="sign-in-button" onClick={onSubmit}>
          SIGN IN
        </button>

        <div className="dont-have-an-acc">
          Don’t have an account?
          <Link to="/sign-up"> Sign up</Link>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  loggedUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.Auth.user,
});
export default connect(mapStateToProps, { loggedUser })(SignIn);
