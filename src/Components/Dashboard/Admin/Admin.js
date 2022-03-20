import React from "react";
import "./Admin.css";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
const Admin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="App mt-5" style={{ background: "#F5F5F5" }}>
      <h2>Make An Admin</h2>
      <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="getInput "
            style={{ width: "100%" }}
            type="name"
            placeholder="Name"
            {...register("name")}
          />
        </div>

        <div>
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="getInput "
            type="email"
            style={{ width: "100%" }}
            placeholder="Last Name"
            {...register("lastName")}
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="getInput "
            type="email"
            style={{ width: "100%" }}
            placeholder="Email"
            {...register("email")}
          />
        </div>

        <input className="btn btn-secondary" type="submit" />
      </form>
    </div>
  );
};

export default Admin;
