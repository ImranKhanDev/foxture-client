import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import pd1 from "../../images/pd-1.png";
import pd2 from "../../images/pd-2.png";
import pd3 from "../../images/pd-3.png";
import pd4 from "../../images/pd-4.png";
import pd5 from "../../images/pd-5.png";
import pd6 from "../../images/pd-6.png";
import pd7 from "../../images/pd-7.png";
import pd8 from "../../images/pd-8.png";
import Product from "../Product/Product";

const products = [
  {
    img: pd1,
    review: "32 reviews",
    title: "Pendent roof minimal",
    price: " $55.00",
  },

  { img: pd2, review: "32 reviews", title: "Headphone base", price: " $55.00" },
  {
    img: pd3,
    review: "32 reviews",
    title: "Apple Music Setup",
    price: " $55.00",
  },
  {
    img: pd4,
    review: "32 reviews",
    title: "Pendent  roof minimal",
    price: " $55.00",
  },
  {
    img: pd5,
    review: "32 reviews",
    title: "Pendent roof light",
    price: " $55.00",
  },
  {
    img: pd6,
    review: "32 reviews",
    title: "Pendent roof light",
    price: " $55.00",
  },
  {
    img: pd7,
    review: "32 reviews",
    title: "Life saver watch",
    price: " $55.00",
  },
  {
    img: pd8,
    review: "32 reviews",
    title: "Camera lens clipart",
    price: " $55.00",
  },
];
const Products = () => {
  return (
    <Container>
      <h2>Best Products </h2>

      <Row xs={12} md={4} sm={6} className="g-4">
        {products?.map((product) => (
          <Product product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
