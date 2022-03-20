import React from "react";
import { Nav, Navbar, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";

const Navigation = () => {
  const style = {
    color: "#000",
    fontSize: "20px",
  };
  const { user, logOut } = useAuth();
  return (
    <nav
      className="navbar navbar-expand-lg  fixed-top"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <strong style={{ fontSize: "35px", color: "black" }}>Foxture</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon border border"
            color="dark"
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0  text-secondary"
            style={style}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>

            {user.email && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/pages">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex justify-content-between">
            {!user?.email ? (
              <Link to="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
            ) : (
              <Link to="/register">
                <button onClick={logOut} className="btn btn-secondary">
                  Logout || {user.email}
                </button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
