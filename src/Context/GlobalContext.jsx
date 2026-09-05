import React, { createContext, useContext, useState } from 'react'
import burger from "../assets/FeaturedImages/burger.png"
import beef from "../assets/Carousel/beef.png"
import ravioli from "../assets/Carousel/ravioli.png"
import cake from "../assets/Carousel/cake.png"
import image4 from "../assets/Carousel/image4.png"


const CreateGlobalContext = createContext()

const GlobalContext = ({children}) => {

    const images = [
        burger, beef, ravioli , cake , image4
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