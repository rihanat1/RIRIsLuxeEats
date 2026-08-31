import React from 'react'
import SVIcons from "../SVIcons.jsx"

const Cravings = () => {
  const text = ["Pizza", "Sushi", "Desserts", "Burgers", "Bowls", "Vegan"]

  return (
    <div className='border border-blue-700 flex flex-col gap-10 min-h-[60vh] items-center justify-center text-white'>
      <h2 className="text-[#F2CA51] font-bold text-[35px]">Craving Something Specific?</h2>
      <div className="grid grid-cols-3 justify-around gap-10">
        {SVIcons.map((icon, index) => {
          return (
            <div 
              key={index} 
              className="group flex flex-col justify-center items-center gap-2 hover:scale-105 hover:bg-[#080808] hover:shadow-[0_8px_20px_-4px_rgba(242,202,81,0.3)] cursor-pointer py-3 px-9 hover:-translate-y-2 transition-all duration-300"
            >
             
              <div className="flex justify-center items-center w-20 h-20 bg-[#353534] border border-[#4C4220] rounded-lg transition-all duration-300 group-hover:bg-[#F2CA51]">
    
                <div className="w-5 h-5 text-[#F2CA51] transition-all duration-300 group-hover:text-[#080808]">
                  {icon}
                </div>
              </div>
              <p className="text-[#C6C3C2] text-sm transition-colors duration-300 group-hover:text-[#F2CA51]">
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