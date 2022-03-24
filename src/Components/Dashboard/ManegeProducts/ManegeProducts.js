import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
const ManegeProducts = () => {
  const [manegeProducts, setManegeProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://sleepy-beyond-85979.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManegeProducts(data));
  }, []);

  return (
    <Table
      striped
      bordered
      hover
      size="md"
      className="mt-5 text-center"
      style={{ fontSize: "16px" }}
    >
      <thead className="mt-5">
        <tr className="mr-2">
          <th>#</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Address</th>
          <th>Price</th>
          <th>Email</th>
          <th>Approve</th>
        </tr>
      </thead>
      {manegeProducts.map((managePD, index) => (
        <tbody>
          <tr>
            <td>{index}</td>
            <td>{managePD?.productName}</td>
            <td>{managePD?.brand}</td>
            <td>{managePD?.address}</td>
            <td>{managePD?.email}</td>
            <td>{managePD?.price}</td>
            <td>
              <AiFillDelete style={{ cursor: "pointer" }} />
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default ManegeProducts;
