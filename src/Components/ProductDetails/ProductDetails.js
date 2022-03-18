import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiTwitch } from "react-icons/si";

import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

import { Link } from "react-router-dom";
const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const details = products.find((detail) => detail?.id == id);
  console.log(details);
  console.log(products);
  return (
    <Container>
      <Row xs={1} md={2} lg={2} className="g-4 mt-5 d-flex align-items-center">
        <Col>
          <img src={details?.img} alt="" />
        </Col>
        <Col className="text-start ">
          <div>
            <h2 className="">{details?.title}</h2>
            <h6>
              <span className="text-warning">
                {" "}
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>{" "}
              ( {details?.review} reviews)
            </h6>
            <h5>
              {details?.price} <del>$120.00</del>
              <h5 className="muted">Availability :{details?.availability}</h5>
              <h5 className="muted">Brand :{details?.brand}</h5>
              <Row className="mt-5">
                <Col>
                  <div className="social ">
                    <ul className="mr-2">
                      <h5 className="text-start mr-4">Share :</h5>
                      <li>
                        {" "}
                        <BsFacebook
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Connect Me on Facebook : dreamCoderr22"
                          data-bs-placement="right"
                        ></BsFacebook>
                      </li>
                      <li>
                        <BsYoutube
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="watch tutorial on Youtube"
                          data-bs-placement="right"
                        ></BsYoutube>
                      </li>
                      <li>
                        <SiTwitch
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Knock me on TWITCH"
                          data-bs-placement="right"
                        ></SiTwitch>
                      </li>
                      <li>
                        {" "}
                        <BsTwitter
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Connect Me on Twitter : Muhammad Imran khan"
                          data-bs-placement="right"
                        ></BsTwitter>
                      </li>
                      <li>
                        {" "}
                        <FaDiscord
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Poke me on Discord : dreamCoderr22"
                          data-bs-placement="right"
                        ></FaDiscord>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <br />
            </h5>
          </div>
        </Col>
      </Row>

      <h4 className="mt-3">Description</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        perspiciatis repellat necessitatibus praesentium omnis corporis
        doloribus iusto, dolorum voluptas impedit. Explicabo beatae facilis
        possimus nisi sunt deserunt animi veritatis. <br /> <br /> itaque maxime
        optio at. Possimus, officia. Molestiae debitis enim, optio numquam esse
        explicabo nihil, deserunt praesentium aut ullam odio nam! Voluptatem
        quasi voluptatibus at odio velit error maiores reprehenderit placeat
        similique ad nihil. ea ullam quam laboriosam optio corporis minus
        aspernatur aliquid ducimus deserunt quos. Possimus itaque necessitatibus
        architecto quod officiis.
      </p>
    </Container>
  );
};

export default ProductDetails;
