import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BlogNews from "../BlogNews/BlogNews";
import Discount from "../Discount/Discount";
import Favourite from "../Favourite/Favourite";
import HowWork from "../HowWork/HowWork";
import NewsLetter from "../Newsletter/NewsLetter";

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
      {/* <Review /> */}
      <NewsLetter />
    </>
  );
};

export default Home;
