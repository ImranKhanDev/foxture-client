import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import "./Register.css";
const Register = () => {
  const { user, registerUser, isLoading } = useAuth();
  const [registerData, setRegisterData] = useState([]);

  const handleOnBlur = (e) => {
    const field = e.target.name;

    const value = e.target.value;

    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    console.log(newRegisterData);
  };

  const handleFormSubmit = (e) => {
    registerUser(registerData?.email, registerData?.password);
    e.preventDefault();
  };

  return (
    <div className="my-5 py-5">
      <div className="register">
        <h1>Register to Web App</h1>(
        <form onSubmit={handleFormSubmit}>
          <p>
            <input
              type="text"
              name="name"
              onBlur={handleOnBlur}
              placeholder="Username"
            />
          </p>
          <p>
            <input
              type="text"
              name="email"
              onBlur={handleOnBlur}
              placeholder=" Email"
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              onChange={handleOnBlur}
              placeholder="Password"
            />
          </p>

          <p className="submit">
            <input type="submit" onClick={handleOnBlur} />
          </p>
        </form>
        ){/* {isLoading && <Spinner animation="border" />} */}
        {user?.email && (
          <div class="alert alert-primary" role="alert">
            new user successfully done.
          </div>
        )}
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
