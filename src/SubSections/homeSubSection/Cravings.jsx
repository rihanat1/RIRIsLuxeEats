import React from 'react'
import SVIcons from "../../SVIcons.jsx"

const Cravings = () => {
  const text = ["Pizza", "Sushi", "Desserts", "Burgers", "Bowls", "Vegan"]

  return (
    <div className='mt-0 flex flex-col gap-10 pt-20 pb-20 xl:min-h-[45vh] items-center justify-center text-white'>
      <h2 className="text-primary text-2xl md:text-3xl font-bold lg:text-[35px] lg:-ml-24 md:ml-0">Craving Something Specific?</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:w-[90%] xl:w-[80%] md:gap-4 justify-around">
        {SVIcons.map((icon, index) => {
          return (
            <div 
              key={index} 
              className="group flex flex-col justify-center items-center gap-2 hover:scale-105 hover:bg-[#080808] hover:shadow-[0_8px_20px_-4px_rgba(242,202,81,0.3)] cursor-pointer py-3 px-9 hover:-translate-y-2 transition-all duration-30"
            >
             
              <div className="flex justify-center items-center w-20 h-20 bg-[#353534] border border-[#4C4220] rounded-lg transition-all duration-300 group-hover:bg-[#F2CA51]">
    
                <div className="w-5 h-5 text-primary transition-all duration-300 group-hover:text-[#080808]">
                  {icon}
                </div>
              </div>
              <p className="text-secondary text-sm transition-colors duration-300 group-hover:text-primary">
                {text[index]}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cravings