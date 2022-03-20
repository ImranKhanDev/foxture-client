import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Badge, ListGroup } from "react-bootstrap";
import Products from "../../HomePages/Products/Products";

const Shop = () => {
  //   const [shop, setShop] = useState([]);
  //   useEffect(() => {
  //     fetch("/fakeData.json");
  //   }, []);
  return (
    <Container className="mt-5">
      <div className="p-4 mt-5 bg-secondary">
        <h1>Shop the product you Like</h1>
      </div>
      <Row>
        <Col className="col-md-3 mb-2 ">
          <h1 className="text-start">Categories</h1>
          <br />
          <ListGroup as="ol" numbered style={{ cursor: "pointer" }}>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Electronics</div>
              </div>
              <Badge bg="primary" pill>
                27
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Ladies item</div>
              </div>
              <Badge bg="primary" pill>
                23
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Kitechen item</div>
              </div>
              <Badge bg="primary" pill>
                42
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Coffie & Tables</div>
              </div>
              <Badge bg="primary" pill>
                09
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Beds</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Available Stocks</div>
              </div>
              <Badge bg="primary" pill>
                99+
              </Badge>
            </ListGroup.Item>
          </ListGroup>

          <h1 className="text-start">Brands</h1>
          <br />
          <ul
            className="text-start"
            type="none"
            style={{ fontSize: "18px", cursor: "pointer" }}
          >
            <li className="text-start mb-1">Azuri</li>
            <li className="text-start mb-1">Apple</li>
            <li className="text-start mb-1">Panda</li>
            <li className="text-start mb-1">Laptamia</li>
            <li className="text-start mb-1">Best Buy</li>
            <li className="text-start mb-1">Ebay</li>
            <li className="text-start mb-1">Samsung</li>
            <li className="text-start mb-1">Quartz</li>
          </ul>
        </Col>
        <Col className="col-md-9 text-center mt-4">
          <Products></Products>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
