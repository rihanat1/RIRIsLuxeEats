import React from 'react'
import CartCard from '../../Components/CartCard'
import { useGlobalContextHook } from '../../Context/GlobalContext';

const AllOrders = () => {
    const { cart } = useGlobalContextHook();
  return (
    <div className="relative p-4 text-primary top-[4.5rem] border-2 border-yellow-700">
      <div className="flex flex-col items-center mb-6 mt-6">
  <h2 className="text-4xl text-center text-white/85 font-bold">Checkout</h2>
  <div className="w-16 h-[2px] bg-[#F2CA51] mt-3"></div>
</div>
      <div className="flex flex-col items-center">
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