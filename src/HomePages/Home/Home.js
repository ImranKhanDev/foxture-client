import React from "react";
import Banner from "../Banner/Banner";
import BlogNews from "../BlogNews/BlogNews";
import Discount from "../Discount/Discount";
import Favourite from "../Favourite/Favourite";
import HowWork from "../HowWork/HowWork";

import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Discount />
      <Products />
      <HowWork />
      <Favourite />
      <BlogNews />
    </>
  );
};

export default Home;
