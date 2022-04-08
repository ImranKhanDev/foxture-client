import { Button } from "bootstrap";
import React, { useState } from "react";

import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import useAuth from "../../Components/Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const { user, manualLoginUser, googleSignIn } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await manualLoginUser(loginData?.email, loginData?.password);
      history.push(redirect_uri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="my-5 py-5">
      <div className="login">
        <h1>Login to Web App {user?.displayName}</h1>
        <form onSubmit={handleFormSubmit}>
          <p>
            <input
              type="text"
              onChange={handleOnBlur}
              name="email"
              placeholder="Username "
            />
          </p>
          <p>
            <input
              type="password"
              onChange={handleOnBlur}
              name="password"
              placeholder="Password"
            />
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
