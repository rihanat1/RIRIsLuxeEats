import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative top-20 bg-heroNew w-full min-h-[72vh] bg-cover bg-center flex justify-center items-center xl:h-screen">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center px-3 space-y-2 lg:flex flex-col items-center justify-center lg:space-y-4">
          <h1 className="font-bold text-[30px] text-primary md:text-[44px] md:font-bold lg:text-[3.6rem] lg:-mt-14 leading-none">
            Bringing premium dining to your home
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#E5E2E1] lg:w-[70%] lg:text-center">
            We believe that exceptional food shouldn't be confined to restaurant
            walls. Experience culinary perfection delivered directly to your
            doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
