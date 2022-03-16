import React from "react";
import { Button } from "react-bootstrap";
import { AiFillLock, AiOutlineReload } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import "./HowWork.css";
const HowWork = () => {
  return (
    <div className=" bg-container mt-4 my-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">
            <div className="card-body">
              <div className="card-subtitle">
                <p>UPTO 30% OFF</p>
              </div>
              <h2>How we work</h2>

              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto illo totam rerum quidem similique.
                </p>
              </div>
              <Button variant="link">SHOW NOW</Button>
            </div>
          </div>
          <div class="col">
            <div className="card-body">
              <AiFillLock size="2em"></AiFillLock>
              <h3 className="my-4">Free Shipping</h3>
              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto illo totam rerum quidem similique.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card-body">
              <AiOutlineReload size="2em"></AiOutlineReload>
              <h3 className="my-4">Return policy 30 days</h3>
              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto illo totam rerum quidem similique.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card-body">
              <BiWorld size="2em"></BiWorld>
              <h3 className="my-4">Free Shipping</h3>
              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto illo totam rerum quidem similique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
