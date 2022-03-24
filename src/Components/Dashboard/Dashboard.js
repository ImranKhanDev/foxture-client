import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct/AddProduct";
import Admin from "./Admin/Admin";
import ManegeProducts from "./ManegeProducts/ManegeProducts";
import "./Dashboard.css";
import GiveReview from "./GiveReview/GiveReview";
const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="mt-1  container-fluid">
      <Row className="row">
        <Col className="mt-5 left-dash col-md-4">
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", fontSize: "22px" }}
                to={url}
              >
                Make Admin
              </Link>
            </li>
            <hr />
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                }}
                to={`${url}/addProduct`}
              >
                Add product
              </Link>
              <hr />
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                }}
                to={`${url}/manegeProducts`}
              >
                Manege Products
              </Link>
            </li>
            <hr />
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                }}
                to={`${url}/addReview`}
              >
                Give Review
              </Link>
            </li>
            <hr />
          </ul>
        </Col>
        <Col className="col-md-8 g-0 right ">
          <Switch>
            <Route exact path={path}>
              <Admin />
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct />
            </Route>
            <Route path={`${path}/manegeProducts`}>
              <ManegeProducts />
            </Route>
            <Route path={`${path}/addReview`}>
              <GiveReview />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
