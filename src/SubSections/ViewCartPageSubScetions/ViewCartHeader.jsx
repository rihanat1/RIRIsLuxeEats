import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const ViewCartHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-2 border-blue-500 backdrop-blur text-primary p-3 z-50 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 z-50">
          <GiKnifeFork className="text-primary text-[39px]" />
          <p className="z-50 text-primary font-bold text-[30px]">
            RIRI's LuxeEats
          </p>
        </div>
        <Link to="/menu" className="flex gap-1 items-center text-secondary ">
          <button className="flex gap-1 items-center text-secondary cursor-pointer ">
            <FaArrowLeftLong /> Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCartHeader;
