import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import appStore from "../../images/appStore.png";
import googlePlay from "../../images/googlePlay.png";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { SiTwitch } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-fluid  full-container py-5 ">
      <Container>
        <Row>
          <Col className="col1">
            <ul>
              <h5>
                <strong
                  className="mb-3"
                  style={{
                    borderBottom: "3px solid grey",
                  }}
                >
                  Customer service
                </strong>
              </h5>

              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Location
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  54 Road, 36 Floor New York, USA
                </Link>{" "}
              </li>
            </ul>
          </Col>
          <Col className="col1">
            <ul>
              {" "}
              <h5>
                <strong style={{ borderBottom: "3px solid grey" }}>
                  Our Shop
                </strong>
              </h5>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Wooden Chair
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Pendent Light
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  {" "}
                  Glass Bottle
                </Link>{" "}
              </li>
            </ul>
          </Col>
          <Col className="col1">
            <ul>
              <h5>
                <strong style={{ borderBottom: "3px solid grey" }}>
                  Useful Link
                </strong>
              </h5>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  About Us
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Term of Service
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Shipping
                </Link>{" "}
              </li>
            </ul>
          </Col>
          <Col className="col1">
            <ul>
              <h5>
                {" "}
                <strong style={{ borderBottom: "3px solid grey" }}>
                  Social Profile
                </strong>
              </h5>
              <li> Download from</li>
              <li> App Store</li>
              <li>
                {" "}
                <div className="app d-flex justify-content-center align-items-center">
                  <img src={appStore} alt="appstore" className="appstore" />
                  <img src={googlePlay} alt="googlePlay" />
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="social ">
              <ul className=" ">
                <li>
                  {" "}
                  <BsFacebook
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Connect Me on Facebook : dreamCoderr22"
                    data-bs-placement="right"
                  ></BsFacebook>
                </li>
                <li>
                  <BsYoutube
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="watch tutorial on Youtube"
                    data-bs-placement="right"
                  ></BsYoutube>
                </li>
                <li>
                  <SiTwitch
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Knock me on TWITCH"
                    data-bs-placement="right"
                  ></SiTwitch>
                </li>
                <li>
                  {" "}
                  <BsTwitter
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Connect Me on Twitter : Muhammad Imran khan"
                    data-bs-placement="right"
                  ></BsTwitter>
                </li>
                <li>
                  {" "}
                  <FaDiscord
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Poke me on Discord : dreamCoderr22"
                    data-bs-placement="right"
                  ></FaDiscord>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <p>
              All right reserved @CopyRight & designed by{" "}
              <Link to="/home">
                <i>DreamCoderr22</i>
              </Link>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
