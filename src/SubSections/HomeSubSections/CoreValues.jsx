import React from "react";
import CoreValuesCard from "../../Cards/CoreValuesCard";
import { MdOutlineStarBorder } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LiaLeafSolid } from "react-icons/lia";

const CoreValues = () => {
  return (
    <div className="mt-20 flex flex-col gap-4 items-center text-center h-[120vh] md:h-[80vh] border-2 border-cyan-800 xl:flex xl:flex-col xl:justify-center xl:mt-[-10px]">
      <div className="w-[95%] mx-auto flex flex-col gap-11 xl:w-[85%]">
        <h2 className="mt-24 text-2xl text-black font-semibold">
          Our Core Values
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <CoreValuesCard
            icon={
              <MdOutlineStarBorder className="text-[#9D4300] text-[40px]" />
            }
            text1="Uncompromising Quality"
            desc="We partner exclusively with Michelin-starred chefs and top-tier local restaurants to ensure every dish meets our rigorous standards of excellence."
          />
          <CoreValuesCard
            icon={
              <AiOutlineThunderbolt className="text-[#9D4300] text-[40px]" />
            }
            text1="Precision Speed"
            desc="Our logistics network is optimized for temperature-controlled transit, ensuring your meal arrives exactly as the chef intended, right on time."
          />
          <CoreValuesCard
            icon={<LiaLeafSolid className="text-[#9D4300] text-[40px]" />}
            text1="Sustainable Sourcing"
            desc="From eco-friendly packaging to supporting local farms, our commitment to the environment is as strong as our passion for extraordinary food."
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
