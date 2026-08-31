import React from 'react'
import { Link } from 'react-router-dom'
import AllPaths from '../routes/AllPaths'

const Hero = () => {
  return (
  
        <div className="flex flex-col gap-5 absolute top-[35%] left-5 border-2 border-red-500">
                <p className="text-[#F2CA51] border border-[#6D623E] w-fit px-3 py-1 text-sm font-bold rounded-full bg-black/40 tracking-wide">
                  PREMIUM DELIVERY
                </p>
                <h1 className="text-[#F2CA51] text-4xl font-extrabold max-w-[64%]">Gourmet Meals Delivered to Your Door.</h1>
                <p className="text-[#C6C3C2] text-[20px] max-w-[77%]">Experience the finest culinary creations from top chefs, delivered with care to your dining table.</p>
                <div className="flex gap-4">
                  <button className="bg-[#F2CA51] hover:bg-[#DBB649] hover:scale-105 transition-all duration-300  px-5 py-3 rounded-xl font-light text-sm">Order Now</button>
                 <Link to={AllPaths.menu}>
                  <button className="bg-black/50 hover:bg-black/70 border border-[#F2CA51] text-[#F2CA51] text-sm font-light hover:scale-105 transition-all duration-300  px-5 py-3 rounded-lg ">Explore Menu</button>
                  </Link>
                </div>
        
              </div>
 
  )
}

export default Hero