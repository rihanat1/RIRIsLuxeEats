import React from 'react'
import { Link } from 'react-router-dom'
import AllPaths from '../../routes/AllPaths.js'

const Hero = () => {
  return (
  
        <div className="flex flex-col gap-6 absolute top-[31%] left-4 w-[95%] md:w-[90%] md:left-[37px] xl:w-[85%] xl:left-[110px]">
                <p className="text-primary border border-[#6D623E] w-fit px-3 py-1 text-sm font-bold rounded-full bg-black/40 tracking-wide">
                  PREMIUM DELIVERY
                </p>
                <h1 className="text-primary text-[40px] md:text-[50px] lg:text-[57px] xl:text-[74px] xl:w-[50%] lg:font-extrabold font-bold leading-none max-w-[68%]">Gourmet Meals Delivered to Your Door.</h1>
                <p className="text-secondary text-[20px] md:text-[24px] md:leading-tight max-w-[77%] xl:w-[50%]">Experience the finest culinary creations from top chefs, delivered with care to your dining table.</p>
                <div className="flex gap-4">
                  <button className="bg-primary hover:bg-[#DBB649] hover:scale-105 transition-all duration-300  px-5 py-3 md:px-12 md:text-md rounded-xl font-light text-sm">Order Now</button>
                 <Link to={AllPaths.menu}>
                  <button className="bg-black/50 hover:bg-black/70 border border-primary text-primary text-sm font-light hover:scale-105 transition-all duration-300  px-5 py-3 md:px-12 md:text-md rounded-lg ">Explore Menu</button>
                  </Link>
                </div>
        
              </div>
 
  )
}

export default Hero