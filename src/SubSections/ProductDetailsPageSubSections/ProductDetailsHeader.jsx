import React from 'react'
import { FaOpencart } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import { Link, NavLink } from "react-router-dom";

const ProductDetailsHeader = () => {
  return (
    <div className="flex justify-center h-20 bg-black/50 border-b border-[#4D4635] shadow-sm z-50 backdrop-blur-sm fixed top-0 right-0 left-0">
      <div className="flex justify-between items-center w-[95%] md:w-[85%] lg:w-[95%] xl:w-[85%] m-auto md:flex md:justify-between">
        <div className="flex items-center space-x-2 z-50">
          <GiKnifeFork className="text-primary text-[30px]" />
          <p className="z-50 text-primary font-bold text-[25px]">
            RIRI's LuxeEats
          </p>
        </div>

        
        <div className="z-50 flex gap-4 items-center justify-center">
          <Link to="/view-cart">
            <div className="z-50 flex items-center gap-2 rounded-xl text-[14px] font-bold bg-primary text-black px-3 py-1 hover:bg-[#D4AF37] transition">
              <FaOpencart />
              <span>Cart (0)</span>
            </div>
          </Link>
   
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsHeader