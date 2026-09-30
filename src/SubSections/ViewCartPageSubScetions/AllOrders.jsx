import React from 'react'
import CartCard from '../../Components/CartCard'
import { useGlobalContextHook } from '../../Context/GlobalContext';

const AllOrders = () => {
    const { cart } = useGlobalContextHook();
  return (
    <div className=" mx-4 text-primary  bg-[#050505] lg:w-[60%] border-2 lg:h-[68vh] lg:overflow-y-auto ">
     
      <div className="flex flex-col items-center ">
        {
            cart.map((item)=>{
            return  <CartCard key={item?.id} item={item}/>
            })
        }
      </div>
    </div>
  )
}

export default AllOrders