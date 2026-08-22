import React from "react";
// import { MdOutlineStarBorderPurple500 } from "react-icons/md";


const CoreValuesCard = ({icon,text1,desc}) => {
  return (
    <div className="flex flex-col bg-[#201F1F] items-start gap-4 py-10 px-7 border-[1px] border-[#4C4220] rounded-md hover:shadow-lg hover:border-2 hover:border-[#F2CA51] transition-all duration-300">
      <span className="">
        
        {icon}
      </span>
      <p className="font-bold text-xl text-[#E5E2E1]">{text1}</p>
      <p className="text-[#C9C6C5] text-start">{desc}</p>
    </div>
  );
};

export default CoreValuesCard;
