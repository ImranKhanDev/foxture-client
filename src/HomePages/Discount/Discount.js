import React from "react";
import "./Discount.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";

import img1 from "../../images/discount-1.png";
import img2 from "../../images/discount-2.png";
import img3 from "../../images/discount-3.png";
const Discount = () => {
  return (
    <Container className="d-flex text-left mt-5">
      <div
        className="card card-hover card-hover mb-3"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img1}
              className="img-fluid rounded-start"
              style={{ height: "250px", width: "250pxx" }}
              alt="img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-hover mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img2}
              className="img-fluid rounded-start"
              style={{ height: "250px", width: "250pxx" }}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-hover mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img3}
              style={{ height: "250px", width: "250pxx" }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Discount;
