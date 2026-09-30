import React from "react";
import ViewCartPageHeader from "../SubSections/ViewCartPageSubScetions/ViewCartHeader";
import AllOrders from "../SubSections/ViewCartPageSubScetions/AllOrders";
import OrderSummary from "../SubSections/ViewCartPageSubScetions/OrderSummary";
import { useGlobalContextHook } from "../Context/GlobalContext";

const ViewCartPage = () => {
  const { cart } = useGlobalContextHook();

  return (
    <div className="relative top-[4.5rem] lg:h-[90vh]">
      <ViewCartPageHeader />
      <div className="flex flex-col gap-6 md:w-[85vw] md:mx-auto lg:h-full">
        {cart.length > 0 ? (
          <div className=" w-full lg:h-full">
            <div className="flex flex-col items-center mb-10 mt-6 ">
              <h2 className="text-4xl text-center text-white/85 font-bold">
                Checkout
              </h2>
              <div className="w-16 h-[2px] bg-[#F2CA51] mt-3"></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <AllOrders />
              <OrderSummary />
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex flex-col items-center mb-10 mt-6 ">
              <h2 className="text-4xl text-center text-white/85 font-bold">
                Checkout
              </h2>
              <div className="w-16 h-[2px] bg-[#F2CA51] mt-3"></div>
            </div>
            <p className="text-white ml-10">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCartPage;
