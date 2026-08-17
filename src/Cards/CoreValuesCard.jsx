import React from "react";
// import { MdOutlineStarBorderPurple500 } from "react-icons/md";


const CoreValuesCard = ({icon,text1,desc}) => {
  return (
    <div className="flex flex-col items-start gap-3 py-10 px-7 border-[1px] border-[#E0C0B1] rounded-xl hover:shadow-lg transition-all duration-300">
      <span className="">
        
        {icon}
      </span>
      <p className="font-bold text-lg">{text1}</p>
      <p className="text-[#555F6F] text-start">{desc}</p>
    </div>
  );
};

export default CoreValuesCard;
