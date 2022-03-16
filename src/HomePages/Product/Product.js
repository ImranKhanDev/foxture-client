import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import "./product.css";

const Product = ({ product }) => {
  const { img, title, review, price } = product;

  return (
    <Container className="text-center justfy-content-center container">
      <Col>
        <Card className=" all-card">
          <Card.Img
            variant="top"
            src={img}
            className="img"
            style={{ width: "60%", margin: "0 auto" }}
          />
          <Card.Body>
            <Card.Text>{review}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <div className="card-header border-none btn">{price}</div>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Product;
