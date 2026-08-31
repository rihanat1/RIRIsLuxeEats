import React from "react";
import homeImg from "../assets/HomeImages/homeImg.png";
import Carousel from "../Components/Carousel";
import Hero from "../homeSubSection/Hero";
import Cravings from "../homeSubSection/Cravings";

const Home = () => {
  return (
    <div className="">
      <div className="relative pt-20 min-h-[85vh] w-screen border-2 border-red-500">
      <Carousel />
      <div className=" absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <Hero/>
    </div>
     <Cravings/>
    </div>
  );
};

export default Home;
