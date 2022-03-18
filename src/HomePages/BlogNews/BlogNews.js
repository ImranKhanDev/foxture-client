import React from "react";
import { Container, Row } from "react-bootstrap";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog1.png";

import Blog from "./Blog/Blog";

const blogs = [
  {
    id: 1,
    img: blog1,
    title: "By(Imran khan) | Commennts (56)",
    header: "Quibusdam sapiente neque irure quas diam ligula at",
  },
  {
    id: 2,
    img: blog2,
    title: "By(Imran khan) | Commennts (34)",
    header: "Eveniet velit urna tristique empor quam minus dis atione",
  },
  {
    id: 333333,
    img: blog3,
    title: "By(Imran khan) | Commennts (23)",
    header: "Quibusdam sapiente neque irure quas diam ligula at",
  },
];
const BlogNews = () => {
  return (
    <div className="container-fluid py-5 " style={{ background: "#f5f5f5" }}>
      <Container>
        <div className="text-center mb-5">
          <h2>Blog News </h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            ipsam nostrum ea culpa maxime?
          </p>
        </div>

        <Row xs={12} md={3} sm={6} className="g-4">
          {blogs?.map((blog) => (
            <Blog blog={blog} key={blog.id}></Blog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogNews;
