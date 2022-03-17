import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="my-5 py-5">
      <div className="register">
        <h1>Register to Web App</h1>
        <form method="post" action="">
          <p>
            <input
              type="text"
              name="register"
              value=""
              placeholder="Username "
            />
          </p>
          <p>
            <input type="text" name="register" value="" placeholder=" Email" />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Password"
            />
          </p>
          <p className="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me" />
              Remember me on this computer
            </label>
          </p>
          <p className="submit">
            <input type="submit" name="commit" value="Submit" />
          </p>
        </form>
      </div>

      <div className="login-help">
        <p className="font">
          Already registered ? <Link to="/login">Click here to Login.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
