import React from "react";
import homeImg from "../assets/HomeImages/homeImg.png";
import Carousel from "../Components/Carousel";
import Hero from "../SubSections/homeSubSection/Hero";
import Cravings from "../SubSections/homeSubSection/Cravings";
import FeaturedDishes from "../SubSections/homeSubSection/ FeaturedDishes";

const Home = () => {
  return (
    <div className="">
      <div className="relative pt-20 min-h-[75vh] md:min-h-[80vh] lg:min-h-[90vh] xl:h-screen w-screen  ">
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
