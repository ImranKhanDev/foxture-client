import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-beyond-85979.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <h2 className="text-center my-5">
        Choose The Best Products for your Home{" "}
      </h2>

      {products.length === 0 ? (
        <Spinner
          className="text-center"
          animation="border"
          variant="primary"
          size="lg"
        />
      ) : (
        <Row xs={12} md={4} sm={6} className="g-4">
          {products?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
