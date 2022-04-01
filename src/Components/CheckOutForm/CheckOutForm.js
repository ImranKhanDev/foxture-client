import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";
const CheckOutForm = ({ lgShow, setLgShow, details, user }) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    fetch("https://sleepy-beyond-85979.herokuapp.com/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // alert(JSON.stringify(data));
  };

  const handleSubmitBtn = () => {
    alert("Your cart proceded successfully !");
  };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg text-center">
            Fill this form before we proceedd to cart.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Product Name</label>
            <input
              type="text"
              className="fw-bold"
              defaultValue={details?.title}
              style={{ width: "100%" }}
              {...register("productName")}
            />
            <label>Price</label>
            <input
              type="text"
              className="fw-bold"
              defaultValue={details?.price}
              style={{ width: "100%" }}
              {...register("price")}
            />
            <label>Email</label>
            <input
              type="text"
              className="fw-bold"
              defaultValue={user?.email}
              style={{ width: "100%" }}
              {...register("email")}
            />
            <label>Address</label>
            <input
              type="text"
              className="fw-bold"
              style={{ width: "100%" }}
              {...register("address")}
            />
            <label>Delivery Charge</label>
            <input
              defaultValue="$120"
              className="fw-bold"
              style={{ width: "100%" }}
              {...register("charge")}
            />
            <label>Brand</label>
            <input
              type="text"
              className="fw-bold"
              defaultValue={details?.brand}
              style={{ width: "100%" }}
              {...register("brand")}
            />

            <input type="submit" onClick={handleSubmitBtn} />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CheckOutForm;
