import React, { createContext, useContext, useState } from "react";
import burger from "../assets/FeaturedImages/burger.png";
import beef from "../assets/Carousel/beef.png";
import ravioli from "../assets/Carousel/ravioli.png";
import cake from "../assets/Carousel/cake.png";
import image4 from "../assets/Carousel/image4.png";
import Dishes from "../JsFiles/FeaturedDishesData";

const CreateGlobalContext = createContext();

const GlobalContext = ({ children }) => {
  const images = [burger, beef, ravioli, cake, image4];
  const [carouselImages, setCarouselImages] = useState(images);
  const [slideInterval, setSlideInterval] = useState(5000);
  const [productDetails, setProductDetails] = useState([]);
  const [featuredDishes, setFeaturedDishes] = useState(Dishes);
  const [cart, setCart] = useState([]);
  

  function addToCart(item){
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function increaseQuantity(Id) {
    const updatedCart = cart.map(cartItem =>cartItem.id === Id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    setCart(updatedCart);
  }
  function decreaseQuantity(Id) {
    const updatedCart = cart.map(cartItem =>cartItem.id === Id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem) .filter(cartItem => cartItem.quantity > 0); //  Remove at 0(0>0, false, so item gets removed)
    setCart(updatedCart);
  }
  function removeFromCart(Id) {
    const updatedCart = cart.filter(cartItem => cartItem.id !== Id); //Keep items where id does NOT equal Id
    setCart(updatedCart);
  }
  const value = {
    carouselImages,
    setCarouselImages,
    slideInterval,
    setInterval,
    productDetails,
    setProductDetails,
    featuredDishes,
    setFeaturedDishes,
    cart,
    setCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    addToCart
    
  };

  return (
    <CreateGlobalContext.Provider value={value}>
      {children}
    </CreateGlobalContext.Provider>
  );
};

export default GlobalContext;

export function useGlobalContextHook() {
  return useContext(CreateGlobalContext);
}
