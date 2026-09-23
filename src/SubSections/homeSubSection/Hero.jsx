import React from 'react'
import { Link } from 'react-router-dom'
import AllPaths from '../../routes/AllPaths.js'

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 absolute top-[26%] md:top-[22%] lg:top-[20%] xl:top-[23%] left-4 sm:left-8 md:left-12 lg:left-16 xl:left-[110px] w-[92%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
      <p className="text-primary border border-[#6D623E] w-fit px-3 py-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm font-bold rounded-full bg-black/40 tracking-wide">
        PREMIUM DELIVERY
      </p>

      <h1 className="text-primary font-bold lg:font-extrabold leading-none text-[40px] sm:text-[56px] md:text-[68px] lg:text-[72px] xl:text-[74px] max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
        Gourmet Meals Delivered to Your Door.
      </h1>

      <p className="text-secondary text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-snug max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
        Experience the finest culinary creations from top chefs, delivered with care to your dining table.
      </p>

      <Link to={AllPaths.menu} className="w-fit">
        <button className="bg-black/50 hover:bg-black/70 border border-primary text-primary text-sm sm:text-base md:text-lg font-light hover:scale-105 transition-all duration-300 px-5 sm:px-7 md:px-10 py-3 sm:py-3.5 md:py-4 xl:px-8 xl:py-3 xl:text-sm rounded-lg">
          Explore Menu
        </button>
      </Link>
    </div>
  )
}

export default Hero