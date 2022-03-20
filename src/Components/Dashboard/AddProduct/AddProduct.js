import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
const AddProduct = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  console.log(errors);
  return (
    <div className="App mt-5" style={{ background: "#F5F5F5" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <input
          type="text"
          style={{ width: "100%" }}
          {...register("Product Name", { required: true, maxLength: 80 })}
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
    </div>
  );
};

export default AddProduct;
