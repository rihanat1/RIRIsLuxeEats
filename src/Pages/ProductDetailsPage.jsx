import React, { useEffect, useState } from "react";
import ProductDetailsHeader from "../SubSections/ProductDetailsPageSubSections/ProductDetailsHeader";
import Footer from "../Components/Footer";
import burger from "../assets/FeaturedImages/burger.png";
import { MdOutlineTimer } from "react-icons/md";
import { FaBurn } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useGlobalContextHook } from "../Context/GlobalContext";
import Dishes from "../JsFiles/FeaturedDishesData";

const ProductDetailsPage = () => {
  const { productDetails } = useGlobalContextHook();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (productDetails.length > 0 || Dishes.length > 0) {
      setIsLoading(false);
    }
  }, [productDetails]); //initially, product details is false. so when the api loads, productdetails is not empty then useEffect triggers so isLoading is set to false. This will prevent the page from rendering before the data is loaded.

const allCardData = productDetails.find((card) => String(card?.id) === String(id)) 
    || Dishes.find((dish) => String(dish?.id) === String(id));



  if (isLoading || productDetails.length === 0) {
    return (
      <div className="bg-black min-h-screen pt-24">
        <ProductDetailsHeader />
        <div className="w-[95%] xl:w-[85%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 p-3">
            <div className="lg:w-[50%]">
              <div className="w-full h-[400px] bg-gray-800 rounded-2xl animate-pulse"></div>
            </div>
            <div className="lg:w-[50%] space-y-4">
              <div className="h-10 bg-gray-800 rounded w-3/4 animate-pulse"></div>
              <div className="h-8 bg-gray-800 rounded w-1/4 animate-pulse"></div>
              <div className="h-24 bg-gray-800 rounded w-full animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-20 bg-gray-800 rounded w-1/2 animate-pulse"></div>
                <div className="h-20 bg-gray-800 rounded w-1/2 animate-pulse"></div>
              </div>
              <div className="h-10 bg-gray-800 rounded w-full animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-800 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div>
      <ProductDetailsHeader />

      <div className="w-[95%] md:w-[90%] xl:w-[85%] md:mx-auto mt-24">
        <div className="flex flex-col lg:flex-row mt-24 gap-8 p-3">
          <div className="border rounded-2xl overflow-hidden border-[#4D4635]  md:h-[78vh] md:object-fill relative md:w-[92%] lg:h-fit  md:mx-auto">
            <img
              src={allCardData?.image || burger}
              alt={allCardData?.name}
              className="w-[100%] h-[100%] relative md:object-cover lg:h-[100%] lg:w-[100%] lg:object-cover"
            />
            <div className="flex gap-2 items-center w-fit absolute top-10 left-3 bg-black/50 backdrop-blur-sm border border-[#4D4635] rounded-lg p-2">
              <FaRegStar className="text-primary" />
              <p className="text-primary">{allCardData?.rating}</p>
            </div>
          </div>

          <div className="p-2 flex flex-col gap-4 md:mx-auto md:w-[92%] lg:w-[50%]">
            <div className="flex gap-2 w-fit border border-[#4D4635] rounded-lg px-6 py-3">
              <p className="text-primary text-sm">Add to Cart</p>
            </div>
            <p className="text-primary font-medium text-3xl">
              {allCardData?.name || "Delicious Dish"}
            </p>
            <p className="font-sans text-[36px] text-primary">
              ${allCardData?.price}
            </p>

            <div className="flex gap-4 mt-5">
              <div className="bg-[#191818] backdrop-blur(16px) shadow-[0_8px_20px_-4px_rgba(242,202,81,0.3)] text-secondary border border-[#4D4635] rounded-lg pl-3 py-2 text-[14px] font-light flex gap-4 items-center pr-20 w-[45%] lg:w-[50%]">
                <MdOutlineTimer className="text-xl text-primary" />
                <div className="flex flex-col">
                  <p className="font-semibold uppercase tracking-widest lg:text-sm lg:whitespace-nowrap">
                    Prep Time
                  </p>
                  <p className="font-bold text-[16px]">
                    {allCardData?.cookTimeMinutes} mins
                  </p>
                </div>
              </div>
              <div className="bg-[#191818] backdrop-blur(16px) shadow-[0_8px_20px_-4px_rgba(242,202,81,0.3)] text-secondary border border-[#4D4635] rounded-lg pl-3 py-2 text-[14px] font-light flex gap-4 items-center pr-20 w-[45%] lg:w-[50%]">
                <FaBurn className="text-xl text-primary" />
                <div className="flex flex-col">
                  <p className="font-semibold uppercase tracking-widest lg:text-sm whitespace-nowrap">
                    Calories Per Serving
                  </p>
                  <p className="font-bold text-[16px]">
                    {allCardData?.caloriesPerServing} Kcal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 mb-16">
              <p className="mt-4 text-primary text-3xl font-normal w-full pb-2 border-b border-primary">
                Ingredients
              </p>
              <ul className="grid grid-cols-2 gap-4 list-disc marker:text-primary marker:text-3xl ml-4 lg:text-xs">
                {allCardData?.ingredients?.map((ingredient, index) => (
                  <li
                    key={index}
                    className="text-secondary text-[18px] font-light"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
