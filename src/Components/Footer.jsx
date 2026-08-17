import React from "react";
import { Link } from "react-router-dom";
import AllPaths from "../routes/AllPaths";

const Footer = () => {
  return (
    <div className="bg-[#151C27] h-[51vh] flex justify-end md:h-[40vh] lg:h-[31vh]">
     <div className="w-[95%] m-auto flex flex-col gap-5  md:grid grid-cols-4 items-start md:gap-5 xl:w-[85%]">
         <div className="">
        <h4 className="text-[#FFDBCA] text-[44px] font-bold md:text-[27px] md:whitespace-nowrap">
          RIRI's LuxeEats
        </h4>
        <p className="text-[#BDC7DA] md:text-[14px]">
          © 2024 LuxeEats Premium Delivery. Crafted for connoisseurs.
        </p>
      </div>
      <div className="text-[#BDC7DA] md:ml-[27px]">
        <p className="">Our Story</p>
        <p className="md:whitespace-nowrap">Partner Restaurants</p>
      </div>
      <div className="text-[#BDC7DA] md:ml-[22px]">
        <p className="">Delivery Zones</p>
        <p className="">Privacy Policy</p>
      </div>
      <Link to={AllPaths.contact}>
      <p className="text-[#BDC7DA]">Contact Us</p>
      </Link>
     </div>
    </div>
  );
};

export default Footer;
