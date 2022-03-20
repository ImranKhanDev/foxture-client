import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <h2 class>Best Products </h2>

      <Row xs={12} md={4} sm={6} className="g-4">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
