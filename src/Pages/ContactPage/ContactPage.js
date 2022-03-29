import React from "react";
import "./ContactPage.css";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../images/contact.png";

import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <div className="contact">
      <Container className="align-items-center">
        <div className="mt-5 text-center text-warning">
          <Row>
            <h1 className="text-dark border-0"> Keep in Touch</h1>
            <Col className="col-md-6 ">
              <img
                style={{ width: "70%", height: "100%" }}
                src={contact}
                alt="contact-image"
              />
            </Col>
            <Col className="col-md-6 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>First name</label>
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Your first name"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
                <br />
                <label>Last name</label>
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Your last name"
                  {...register("Last name", { required: true, maxLength: 100 })}
                />
                <br />
                <label>Email</label>
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Whats your email ?"
                  {...register("Last name", { required: true, maxLength: 100 })}
                />
                <br />
                <textarea
                  type="text"
                  placeholder="Leave a message"
                  style={{ width: "100%", height: "240px", fontSize: "24px" }}
                  {...register("Last name", { required: true, maxLength: 100 })}
                />

                <input type="submit" />
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
