import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import banner from "../../images/banner-img.png";
const Banner = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
      <Container>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between  ",
          }}
        >
          <Col className="mt-4" style={{ alignItems: "center" }}>
            <span className="text-secondary">UP TO 30% OFF</span>
            <br />
            <h1>Minimal Lighting Nordic</h1>
            <p className="py-3 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              laborum quasi nesciunt!
            </p>
            <Button variant="dark">Shop Now</Button>{" "}
          </Col>

          <Col>
            <img src={banner} style={{ width: "100%" }} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
