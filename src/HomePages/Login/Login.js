import { Button } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
const googleSignIn = (e) => {
  e.target.value();
};
const handleFormSubmit = (e) => {
  e.preventDefault();
};

const Login = () => {
  return (
    <div className="my-5 py-5">
      <div className="login">
        <h1>Login to Web App</h1>
        <form onSubmit={handleFormSubmit}>
          <p>
            <input type="text" name="login" placeholder="Username " />
          </p>
          <p>
            <input type="password" name="password" placeholder="Password" />
          </p>
          <p className="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me" />
              Remember me on this computer
            </label>
          </p>
          <p className="submit">
            <input type="submit" name="commit" />
          </p>
        </form>
        <br />
      </div>

      <div className="login-help">
        <p className="font">
          Are you a new user ?{" "}
          <Link to="/register">Click here to Register.</Link>
        </p>
        <button className="btn btn-dark" onClick={googleSignIn}>
          Login with GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
