import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const { img, title, review, price, id } = product;

  return (
    <Container className="text-center justify-content-center">
      <Col>
        <Card className=" all-card">
          <Card.Img
            variant="top"
            src={img}
            className="img"
            style={{ width: "100%", margin: "0 auto" }}
          />
          <Link to={`/productDetails/${id}`} style={{ textDecoration: "none" }}>
            <Card.Body>
              <Card.Text>{review}</Card.Text>

              <Card.Title>{title}</Card.Title>

              <div className="card-header border-none btn">{price}</div>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </Container>
  );
};

export default Product;
