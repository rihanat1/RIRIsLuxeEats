import React, { createContext, useContext, useState } from 'react'
import image from "../assets/Carousel/image.png"
import image1 from "../assets/Carousel/image1.png"
import image2 from "../assets/Carousel/image2.png"
import image3 from "../assets/Carousel/image3.png"
import image4 from "../assets/Carousel/image4.png"


const CreateGlobalContext = createContext()

const GlobalContext = ({children}) => {

    const images = [
        image, image1, image2 , image3 , image4
    ]
     const [carouselImages, setCarouselImages] = useState(images)
    const [interval,setInterval] = useState(5000)

    const value = {
    carouselImages,    
    setCarouselImages,
    interval,
    setInterval,
  };
   



  return (
    <CreateGlobalContext.Provider value={value}>
        {children}
    </CreateGlobalContext.Provider>
  )
}

export default GlobalContext

export function useGlobalContextHook(){
    return useContext(CreateGlobalContext)
}