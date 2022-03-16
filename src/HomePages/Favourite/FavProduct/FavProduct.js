import React from "react";
import { Card, Col, Container } from "react-bootstrap";

const FavProduct = ({ favProduct }) => {
  const { img, title, price } = favProduct;

  return (
    <Container className="text-center justfy-content-center container">
      <Col>
        <Card className=" all-card">
          <Card.Img
            variant="top"
            src={img}
            className="img"
            style={{ width: "100%", height: "240px", margin: "0 auto" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="card-header border-none btn">{price}</div>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default FavProduct;
