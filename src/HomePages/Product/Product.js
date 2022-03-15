import React from "react";
import { Container } from "react-bootstrap";

const Product = ({ product }) => {
  const { img, title, review, price } = product;
  console.log(product);

  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default Product;
