import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import "./Blog.css";
const Blog = ({ blog }) => {
  const { img, title, header } = blog;

  return (
    <Container className="text-center justify-content-center container">
      <Col>
        <Card className="all-card">
          <Card.Img
            variant="top"
            src={img}
            className="img"
            style={{ width: "100%", height: "240px", margin: "0 auto" }}
          />
          <Card.Body>
            <p>{title}</p>
            <h6>{header}</h6>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Blog;
