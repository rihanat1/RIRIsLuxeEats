import React from 'react'
import Dishes from "../../JsFiles/FeaturedDishesData.js"
import FeaturedDishCard from '../../Cards/FeaturedDishCard.jsx';
import { Link } from 'react-router-dom';
import AllPaths from '../../routes/AllPaths.js';

const FeaturedDishes = () => {


  return (
    <div className=' pt-28 xl:pt-14 px-4 pb-24 xl:pb-16'>
      <div className="md:w-[95%] xl:w-[80%] mx-auto">
        <div className="flex flex-col gap-2 mb-8">
        <h3 className="text-primary text-3xl md:text-[38px] font-normal">Featured Dishes</h3>
        <div className="flex items-center justify-between">
            <p className="text-secondary text-[18px] text-sm md:text-md">Curated selections from our top partner restaurants.</p>
            <Link to={AllPaths.menu}>
            <p className="hidden  md:block text-primary text-sm">View all →</p></Link>
            </div>  
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:w-[100%] mx-auto">
        {Dishes.map((dish, index) => (
          <FeaturedDishCard key={index} dish={dish}/>
         
        ))}
      </div>
       <div className="text-center md:hidden">
        <Link to={AllPaths.menu}>
                  <button className="bg-black/50 hover:bg-black/70 border border-primary text-primary text-sm font-light hover:scale-105 transition-all duration-300  px-5 py-3 rounded-lg capitalize mt-6 mb-8">View all dishes →</button>
                  </Link>
       </div>
      </div>
    </div>
  )
}

export default FeaturedDishes