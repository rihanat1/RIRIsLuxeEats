import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContextHook } from '../Context/GlobalContext'
import AllPaths from '../routes/AllPaths'

const ConfirmPage = () => {
  const { user, cart } = useGlobalContextHook()
  const navigate = useNavigate()

  if (!user) {
    navigate('/sign-up', { state: { fromCart: true } })
    return null
  }

  // Totals
  const subTotal = cart.reduce(
    (total, item) => total + item.quantity * Number(item.price),
    0
  )
  const taxes = subTotal * 0.08
  const delivery = subTotal >= 50 ? 0 : 3.99
  const total = subTotal + taxes + delivery

  const handleConfirmOrder = () => {
    navigate('/order-success')
  }

  return (
    <div className=" min-h-screen text-white px-4 py-10 md:py-16 pb-28">
      <div className="w-full max-w-[85vw] mx-auto flex flex-col gap-8">


        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white/90 text-center">
            Confirm Your Order
          </h1>
          <div className="w-16 h-[2px] bg-[#F2CA51] mt-3"></div>
          <p className="text-white/50 text-sm mt-3 text-center max-w-md">
            One last look before we fire up the kitchen.
          </p>
        </div>

    
        <div className="flex flex-col lg:flex-row gap-6">

       
          <div className="flex flex-col gap-6 lg:flex-1">


            <div className="bg-[#0f0f0f] border border-[#222] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white/90">
                  Delivery Details
                </h2>
                <Link
                  to="/signup"
                  className="text-sm text-[#F2CA51] hover:underline"
                >
                  Change
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white font-medium">{user.name}</p>
                {user.email && (
                  <p className="text-white/60 text-sm">{user.email}</p>
                )}
                <p className="text-white/70 text-sm mt-2">
                  {user.address}
                  {user.city ? `, ${user.city}` : ''}
                </p>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white/90 mb-4">
                Your Items ({cart.length})
              </h2>
              <div className="flex flex-col divide-y divide-[#1a1a1a]">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded object-cover border border-[#222]"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">
                        {item.name}
                      </p>
                      <p className="text-white/50 text-sm">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-[#F2CA51] font-semibold whitespace-nowrap">
                      ${(item.quantity * Number(item.price)).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-[#0f0f0f] border border-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white/90 mb-4">
                Payment Method
              </h2>
              <div className="flex items-center gap-3 bg-[#141414] border border-[#222] rounded-lg p-4">
                <div className="w-10 h-6 bg-gradient-to-r from-[#8B6914] to-[#F2CA51] rounded"></div>
                <div>
                  <p className="text-white text-sm">•••• •••• •••• 4242</p>
                  <p className="text-white/40 text-xs">Demo card</p>
                </div>
              </div>
              <p className="text-white/40 text-xs mt-3">
                This is a portfolio demo — no real payment will be processed.
              </p>
            </div>

          </div>

        
          <div className="lg:w-[380px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-[5.5rem] flex flex-col gap-4">


              <div className="bg-[#080808] border border-[#1A1A1A] rounded-lg p-6 flex flex-col gap-5">
                <h2 className="text-2xl font-semibold text-white/90">
                  Order Total
                </h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>${subTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Taxes & Fees</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Delivery Fee</span>
                    <span>
                      {delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <hr className="border-[#1A1A1A]" />

                <div className="flex justify-between items-center">
                  <span className="text-lg">Total</span>
                  <span className="text-[#F2CA51] text-3xl font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

           
              <button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F5E6A8] text-[#050505] py-4 rounded font-semibold hover:opacity-90 transition shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Confirm & Pay
              </button>

        
              <Link
                to={AllPaths.viewCart}
                className="text-center text-sm text-white/50 hover:text-[#F2CA51] transition"
              >
                ← Back to cart
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ConfirmPage