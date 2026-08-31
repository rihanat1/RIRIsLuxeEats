import React, { useEffect, useState } from "react";
import { useGlobalContextHook } from "../Context/GlobalContext";

const Carousel = () => {
 
  const { carouselImages, interval } = useGlobalContextHook();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  if (!carouselImages|| carouselImages.length === 0) {
    return null;
  }

  return (
    <div className="relative w-[100%] min-h-[75vh] border-2 border-green-600 mx-auto overflow-hidden rounded-lg shadow-lg">

      

        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 pointer-events-none w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      

    
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
     
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 pointer-events-auto rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;