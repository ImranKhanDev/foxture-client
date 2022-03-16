import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import pd1 from "../../images/pd-1.png";
// import pd2 from "../../images/pd-2.png";
// import pd3 from "../../images/pd-3.png";
// import pd4 from "../../images/pd-4.png";
// import pd5 from "../../images/pd-5.png";
// import pd6 from "../../images/pd-6.png";
// import pd7 from "../../images/pd-7.png";
// import pd8 from "../../images/pd-8.png";
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
      <h2>Best Products </h2>

      <Row xs={12} md={4} sm={6} className="g-4">
        {products?.map((product) => (
          <Product key={product.img} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
