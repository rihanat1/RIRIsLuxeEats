import React, { useState } from 'react'
import { useGlobalContextHook } from '../Context/GlobalContext'
import { useLocation, useNavigate } from 'react-router-dom'



const SignupPage = () => {
  const data = {
    name: '',
    email: '',
    address: '',
    city: '',
  }
  const {signUp} = useGlobalContextHook()
  const navigate = useNavigate()
  const location = useLocation()
  const fromCart = location.state?.fromCart
  const [form, setForm] = useState(data)

  function handleForm(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }  // ← this closing brace was missing

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!form.name || !form.email || !form.address) return
    signUp(form)
    console.log('Form submitted:', form)
    navigate(fromCart ? "/checkout-confirm" : "/")
  }
console.log("form", form)
  return (
    <div className="relative top-[4.5rem] min-h-screen text-white px-4 py-10">
      <div className="max-w-md mx-auto flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white/90">Create Account</h2>
          <div className="w-16 h-[2px] bg-[#F2CA51] mt-3"></div>
          <p className="text-white/50 mt-3 text-sm">
            Just a few details to complete your order.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleForm}
            className="bg-[#0f0f0f] border border-[#222] rounded px-4 py-3 text-white outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleForm}
            className="bg-[#0f0f0f] border border-[#222] rounded px-4 py-3 text-white outline-none"
          />
          <input
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleForm}
            className="bg-[#0f0f0f] border border-[#222] rounded px-4 py-3 text-white outline-none"
          />
          <input
            name="city"
            placeholder="City / Postal Code"
            value={form.city}
            onChange={handleForm}
            className="bg-[#0f0f0f] border border-[#222] rounded px-4 py-3 text-white outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F5E6A8] text-[#050505] py-4 rounded font-semibold hover:opacity-90 transition"
          >
            Create Account & Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage