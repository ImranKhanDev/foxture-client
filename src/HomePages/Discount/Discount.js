import React, { useEffect, useState } from "react";
import "./Discount.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const Discount = () => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDiscounts(data));
  }, []);

  return (
    <Container className="d-flex text-left mt-5">
      <Row xs={1} md={3} className="g-4">
        {discounts.splice(0, 3) &&
          discounts?.map((discount) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={discount?.img} height="250px" />
                <Card.Body>
                  <Card.Title>{discount?.title}</Card.Title>
                  <Card.Text>{discount.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Discount;
