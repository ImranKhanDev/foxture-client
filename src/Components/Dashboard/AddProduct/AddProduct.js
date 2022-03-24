import React from "react";

import { useForm } from "react-hook-form";
import "./styles.css";
import useAuth from "../../Hooks/useAuth";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    
    fetch("https://sleepy-beyond-85979.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App mt-5" style={{ background: "#F5F5F5" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Product Name">Product Name</label>
          <input type="text" style={{ width: "100%" }} {...register("title")} />
        </div>

        <div>
          <label htmlFor="Price">Price</label>
          <input type="text" style={{ width: "100%" }} {...register("price")} />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            defaultValue={user?.email}
            style={{ width: "100%" }}
            {...register("email")}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" style={{ width: "100%" }} {...register("img")} />
        </div>
        <div>
          <label htmlFor="Brand">Brand</label>
          <input type="text" style={{ width: "100%" }} {...register("price")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
