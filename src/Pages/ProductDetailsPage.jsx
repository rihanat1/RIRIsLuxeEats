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
import ProductDetailsSkeletonLoader from "../Components/ProductDetailsSkeletonLoader";

const ProductDetailsPage = () => {
  const { productDetails, featuredDishes } = useGlobalContextHook();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const apiDataLoaded = productDetails && productDetails.length > 0;
    const featuredDataLoaded = Dishes && Dishes.length > 0;
    if (apiDataLoaded || featuredDataLoaded) {
      setIsLoading(false);
    }
  }, [productDetails]); //initially, product details is false. so when the api loads, productdetails is not empty then useEffect triggers so isLoading is set to false. This will prevent the page from rendering before the data is loaded.

  const allCardData =
    productDetails.find((card) => String(card?.id) === String(id)) ||
    featuredDishes.find((dish) => String(dish?.id) === String(id));
  console.log("allCardData:", allCardData);

  if (allCardData) {
    const isFeatured = !productDetails.find(
      (card) => String(card?.id) === String(id),
    );

    return (
      <div className=" ">
        <ProductDetailsHeader />

        <div className="w-[95%] xl:w-[85%] mx-auto mt-24">
          <div className="flex flex-col lg:flex-row lg:items-center mt-24 gap-8 p-3  lg:w-[98%] lg:h-[87vh] lg:mx-auto">
            {/* image div section start */}
            <div className="border rounded-2xl overflow-hidden border-[#4D4635] relative md:h-[70vh] md:mx-auto md:w-[85%] lg:w-[50%] lg:h-fit ">
              <img
                src={allCardData?.image || burger}
                alt={allCardData?.name}
                className="w-[100%] md:w-[100%] h-[100%] relative"
              />
              <div className="flex gap-2 items-center w-fit absolute top-10 left-3 bg-black/50 backdrop-blur-sm border border-[#4D4635] rounded-lg p-2">
                <FaRegStar className="text-primary" />
                <p className="text-primary">{allCardData?.rating || "4.5"} ★</p>
              </div>
            </div>
            {/* image div section end */}

            {/* details:nbame,price... start*/}
            <div className="md:w-[85%] lg:w-[50%] md:mx-auto ">
              <div className="lg:hidden flex gap-2 w-fit border border-[#4D4635] rounded-lg px-6 py-3 cursor-pointer">
                <p className="text-primary text-sm">Add to Cart</p>
              </div>
              <div className="p-2 flex flex-col gap-4 lg:w-[100%]">
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium text-3xl whitespace-nowrap">
                    {allCardData?.name}
                  </p>
                  <p className="font-sans text-[36px] text-primary">
                    ${allCardData?.price}
                  </p>
                </div>

                {/* prepTime and calorie card start */}
                <div className="flex gap-4 lg:gap-2 mt-5 w-full ">
                  {/* prepTime card start */}

                  <div className="bg-[#191818] backdrop-blur(16px) w-[50%] shadow-[0_8px_20px_-4px_rgba(242,202,81,0.3)] text-secondary border border-[#4D4635] rounded-lg pl-3 py-2 text-[14px] font-light flex gap-4 items-center pr-20 ">
                    <MdOutlineTimer className="text-xl text-primary" />
                    <div className="flex flex-col">
                      <p className="font-semibold uppercase tracking-widest lg:text-sm lg:whitespace-nowrap">
                        Prep Time
                      </p>
                      <p className="font-bold text-[16px]">
                        {allCardData?.prepTime || "N/A"}
                      </p>
                    </div>
                  </div>
                  {/* prepTime card end */}

                  {/* calorie card start */}

                  <div className="bg-[#191818] backdrop-blur(16px) w-[50%] shadow-[0_8px_20px_-4px_rgba(242,202,81,0.3)] text-secondary border border-[#4D4635] rounded-lg pl-3 py-2 text-[14px] font-light flex gap-4 lg:gap-3 items-center lg:pr-1 ">
                    <FaBurn className="text-xl text-primary" />
                    <div className="flex flex-col">
                      <p className="font-semibold uppercase tracking-widest lg:text-sm whitespace-nowrap">
                        Calories Per Serving
                      </p>
                      <p className="font-bold text-[16px]">
                        {allCardData?.caloriesPerServing || "N/A"}
                      </p>
                    </div>
                  </div>
                  {/* calorie card end */}
                </div>
                {/* prepTime and calorie card end */}

                <div className="mt-6 mb-16 lg:mb-6">
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

                <div className="md:w-[85%] lg:w-[50%] lg:ml-2  ">
                  <div className="hidden lg:flex  gap-2 w-fit border border-[#4D4635] rounded-lg px-6 py-3 cursor-pointer">
                    <p className="text-primary text-sm">Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
            {/* details:nbame,price... end*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (productDetails.length === 0) {
    return <ProductDetailsSkeletonLoader />;
  }
};

export default ProductDetailsPage;
