import React from "react";
import { Link } from "react-router-dom";
import AllPaths from "../routes/AllPaths";

const Footer = () => {
  return (
    <div className="bg-[#201F1F] border-t border-t-primary/50 h-[46vh] flex justify-end md:h-[40vh] lg:h-[37vh]">
     <div className="w-[95%] m-auto flex flex-col gap-5  md:grid grid-cols-4 items-start md:gap-5 md:w-[90%] xl:w-[85%] xl:mx-auto xl:ml-32">
         <div className="">
        <h4 className="text-primary text-[44px] font-bold md:text-[27px] md:whitespace-nowrap xl:text-[45px]">
          RIRI's LuxeEats
        </h4>
        <p className="text-[#BDC7DA] max-w-[70%] md:text-[14px] ">
          © 2024 LuxeEats Premium Delivery. Crafted for connoisseurs.
        </p>
      </div>
      <div className="text-[#BDC7DA] md:ml-[27px] md:mt-2 xl:flex xl:flex-col xl:gap-3 xl:mt-4">
        <p className="">Our Story</p>
        <p className="md:whitespace-nowrap">Partner Restaurants</p>
      </div>
      <div className="text-[#BDC7DA] md:ml-[22px] md:mt-2 xl:flex xl:flex-col xl:gap-3 xl:mt-4">
        <p className="">Delivery Zones</p>
        <p className="">Privacy Policy</p>
      </div>
      <Link to={AllPaths.contact} className="md:mt-2 xl:mt-4">
      <p className="text-[#BDC7DA]">Contact Us</p>
      </Link>
     </div>
    </div>
  );
};

export default Footer;
