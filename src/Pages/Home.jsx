import React from "react";
import homeImg from "../assets/HomeImages/homeImg.png";
import Carousel from "../Components/Carousel";
import Hero from "../homeSubSection/Hero";
import Cravings from "../homeSubSection/Cravings";
import FeaturedDishes from "../homeSubSection/ FeaturedDishes";

const Home = () => {
  return (
    <div className="">
      <div className="relative pt-20 min-h-[85vh] md:h-screen w-screen  ">
      <Carousel />
      <div className=" absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <Hero/>
    </div>
     <Cravings/>
     <FeaturedDishes/>
    </div>
  );
};

export default Home;
