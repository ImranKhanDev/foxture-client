import React from "react";
import { Container, Row } from "react-bootstrap";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog1.png";

import FavProduct from "./FavProduct/FavProduct";
const favouritePD = [
  {
    img: blog1,
    title: "Stand Sound Silver Box",
    price: "$36.00",
  },
  {
    img: blog2,
    title: "Stand Sound Silver Box",
    price: "$36.00",
  },
  {
    img: blog3,
    title: "Stand Sound Silver Box",
    price: "$76.00",
  },
  {
    img: blog4,
    title: "Stand Sound Silver Box",
    price: "$46.00",
  },
];
const Favourite = () => {
  return (
    <div className="container-fluid py-5 " style={{ background: "#f5f5f5" }}>
      <Container>
        <div className="text-center mb-5">
          <h2>Best Products </h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            ipsam nostrum ea culpa maxime?
          </p>
        </div>

        <Row xs={12} md={4} sm={6} className="g-4">
          {favouritePD?.map((favProduct) => (
            <FavProduct favProduct={favProduct}></FavProduct>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Favourite;
