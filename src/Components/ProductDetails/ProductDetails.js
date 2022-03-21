import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiTwitch } from "react-icons/si";

import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

import { Link } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
const ProductDetails = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/products",)

      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const details = products.find((detail) => detail?.id == id);

  const [lgShow, setLgShow] = useState(false);

  return (
    <Container>
      <Row xs={1} md={2} lg={2} className="g-4 mt-5 d-flex align-items-center">
        <Col>
          <img src={details?.img} alt="" />
        </Col>
        <Col className="text-start text-left">
          <div>
            <h2 className="">{details?.title}</h2>
            <h6>
              <span className="text-warning">
                {" "}
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </span>{" "}
              ( {details?.review} reviews)
            </h6>
            <h5>
              {details?.price} <del>$120.00</del>
              <h5 className="muted">Availability :{details?.availability}</h5>
              <h5 className="muted">Brand :{details?.brand}</h5>
              <Button variant="secondary" onClick={() => setLgShow(true)}>
                Add to Proceed
              </Button>
              <Row className="mt-5 text-start">
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
      {/* Modal  */}
      <br />

      <br />
      <h4 className="mt-3">Imran Khan </h4>
      <h6>
        <span className="text-warning">
          {" "}
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </span>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Dignissimos repellat quos illum ipsam sed in voluptatibus porro!
          Consectetur, voluptatum iste!
        </p>
      </h6>

      <CheckOutForm
        details={details}
        user={user}
        setLgShow={setLgShow}
        lgShow={lgShow}
      />
    </Container>
  );
};

export default ProductDetails;
