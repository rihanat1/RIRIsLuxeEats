import React, { useState } from 'react'
import { useGlobalContextHook } from '../../Context/GlobalContext'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  
  const navigate = useNavigate()
   const { user } = useGlobalContextHook()
  const {cart} = useGlobalContextHook()
 
  // console.log("cart",cart)

const handlePlaceOrder = () => {
  if (!user) {
    navigate('/sign-up', { state: { fromCart: true } })
  } else {
    navigate('/checkout-confirm')
  }
}
 

 const TAX_RATE = 0.08


const subTotal = cart.reduce(
  (total, item) => total + item.quantity * Number(item.price),
  0
)
const DELIVERY_FEE = subTotal==0.00 ? 0.00 : 3.99

const taxesAndFees = subTotal * TAX_RATE

const deliveryFee = subTotal >= 50 ? 0 : DELIVERY_FEE

const total = subTotal + taxesAndFees + deliveryFee

  return (
    <div className='border bg-[#080808] border-[#1A1A1A] text-white mx-4 p-4 flex flex-col gap-9 lg:w-[40%] h-fit'>
      <h2 className="text-3xl mt-4">Order Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-white/80">
          <p className="">Subtotal</p>
          <p className="">${subTotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-white/80">
          <p className="">Taxes & Fees</p>
          <p className="">${taxesAndFees.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-white/80">
          <p className="">Delivery Fee</p>
          <p className="">{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-white/20 pt-5">
        <p className="text-2xl">Total</p>
        <p className="text-primary text-3xl">${total.toFixed(2)}</p>
      </div>
      <button onClick={handlePlaceOrder} className="w-full bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F5E6A8] text-[#050505] py-4 px-8 rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">Place Order </button>
    </div>
  )
}

export default OrderSummary