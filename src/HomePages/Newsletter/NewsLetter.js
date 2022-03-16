import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-around align-items-center my-5">
        <Col md={6} xs={12} className="pr-4">
          <div>
            <h1>Subscribe our newsletter</h1>
            <p>
              Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
              voluptate sequuy
            </p>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className="d-flex ml-3">
            {" "}
            <input
              placeholder="Enter your email here "
              style={{ width: "60%", height: "50px" }}
            />
            <Button>Subscribe</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsLetter;
