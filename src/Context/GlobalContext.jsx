import React, { createContext, useContext, useState } from "react";
import food1 from "../assets/Carousel/food1.png"
import food2 from "../assets/Carousel/food2.png"
import food3 from "../assets/Carousel/food3.png"
import food4 from "../assets/Carousel/food4.png"
import food5 from "../assets/Carousel/food5.png"
import Dishes from "../JsFiles/FeaturedDishesData";

const CreateGlobalContext = createContext();

const GlobalContext = ({ children }) => {
  const images = [food1, food2, food3, food4, food5];
  const [carouselImages, setCarouselImages] = useState(images);
  const [slideInterval, setSlideInterval] = useState(5000);
  const [productDetails, setProductDetails] = useState([...Dishes]);
  const [featuredDishes, setFeaturedDishes] = useState(Dishes);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(()=>{
    const saved = localStorage.getItem("riri_user")
    return saved? JSON.parse(saved) : null
  })

  const signUp = (userData)=>{ //to get form from form state
    setUser(userData)
    localStorage.setItem("riri_user", JSON.stringify(userData))
  }
 const logOut = (userData)=>{
  setUser(null)
  localStorage.removeItem("riri_user")
 }

  function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCart(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function increaseQuantity(Id) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === Id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
    setCart(updatedCart);
  }
  function decreaseQuantity(Id) {
    const updatedCart = cart
      .map((cartItem) =>
        cartItem.id === Id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      )
      .filter((cartItem) => cartItem.quantity > 0); //  Remove at 0(0>0, false, so item gets removed)
    setCart(updatedCart);
  }
  function removeFromCart(Id) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== Id); //Keep items where id does NOT equal Id
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
    addToCart,
    user,
    setUser,
    signUp,
    logOut
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
