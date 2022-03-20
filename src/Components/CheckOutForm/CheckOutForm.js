import React from "react";
import { Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";
const CheckOutForm = ({ lgShow, setLgShow, details }) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
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
              style={{ width: "100%" }}
              {...register("name")} 
              
            />
            <label>Price</label>
            <input
              type="text"
              style={{ width: "100%" }}
              {...register("email", { required: true, maxLength: 100 })}
            />
            <label>Email</label>
            <input
              type="text"
              style={{ width: "100%" }}
              {...register("Price", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <label>Image URL</label>
            <input
              type="text"
              style={{ width: "100%" }}
              {...register("charge", {
                required: true,

                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <label>Brand</label>
            <input
              type="text"
              style={{ width: "100%" }}
              {...register("brand", {
                required: true,
                maxLength: 11,
                minLength: 8,
              })}
            />

            <input type="submit" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CheckOutForm;
