import React from 'react'
import CartCard from '../../Components/CartCard'
import { useGlobalContextHook } from '../../Context/GlobalContext';

const AllOrders = () => {
    const { cart } = useGlobalContextHook();
  return (
    <div className="relative p-4 text-primary top-[4.5rem] border-2 border-yellow-700">
      <h2 className="text-4xl font-bold mb-6 mt-6">My Orders</h2>
      <div className="flex flex-col ">
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