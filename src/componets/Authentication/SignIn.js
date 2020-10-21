import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Error from "./Error";

import "./SignIn.css";

const SignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    if (email === user.email && password === user.password) {
      setSuccess("yes");
    } else {
      setSuccess("fail");
      if (email !== user.email) {
        setError("Incorrect email or password");
      } else if (password !== user.password) {
        setError("Incorrect password");
      }
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

        {success === "fail" ? <Error error={error} /> : <span></span>}

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

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});
export default connect(mapStateToProps, {})(SignIn);
