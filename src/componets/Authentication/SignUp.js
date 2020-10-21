import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUp } from "../../actions/Auth";
import Error from "./Error";

import "./SignIn.css";

const Signup = ({ signUp, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const onSubmit = () => {
    if (password !== confirmPassword) {
      setSuccess("fail");
      setError("password do not match");
    } else if (email === user.email) {
      setSuccess("fail");
      setError(
        "Oops, account with this email already exists! Try again with different email"
      );
    } else if (
      email !== user.email &&
      password &&
      confirmPassword &&
      fullName
    ) {
      console.log(email);

      signUp(email, password, fullName);
      setSuccess("yes");
    } else {
      setSuccess("fail");
    }
  };

  if (success === "yes") {
    return <Redirect to="/" />;
  }

  return (
    <div className="Sign-in-container">
      <div className="Sign-in-box">
        <div className="login-heading">Sign Up </div>
        <div className="login-sub-text">Create Account for Camp K12</div>
        <input
          className="login-input"
          type="email"
          name="email"
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
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          className="login-input"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        {success === "fail" ? <Error error={error} /> : <span></span>}
        <button onClick={onSubmit} className="sign-in-button ">
          SIGN UP
        </button>

        <div className="dont-have-an-acc">
          Already have an account?
          <Link to="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

Signup.prototype = {
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});
export default connect(mapStateToProps, { signUp })(Signup);
