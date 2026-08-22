import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'

const MenuFooter = () => {
  return (
    <div className='mt-8 pb-28 bg-[#131313] border-t border-[#353534]'>

      <div className='w-[95%] md:w-[85%] mx-auto'>
        
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
       
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center">
              <GiKnifeFork className="text-[#F2CA51] text-[30px]" />
              <p className="text-[#F2CA51] text-lg font-semibold">RIRI's LuxeEats</p>
            </div>
            <p className="text-[#777166] text-[16px] leading-relaxed">
              Elevating dining to an art form. Experience culinary mastery delivered to your door.
            </p>
            <div className="flex gap-3">
              <div className="bg-[#201F1F] p-3 w-fit rounded-lg hover:bg-[#F2CA51] transition-colors cursor-pointer">
                <FaInstagram className='text-white text-xl' />
              </div>
              <div className="bg-[#201F1F] p-3 w-fit rounded-lg hover:bg-[#F2CA51] transition-colors cursor-pointer">
                <FaTwitter className='text-white text-xl' />
              </div>
              <div className="bg-[#201F1F] p-3 w-fit rounded-lg hover:bg-[#F2CA51] transition-colors cursor-pointer">
                <FaFacebookF className='text-white text-xl' />
              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-3">
            <p className="text-[#E5E2E1] text-lg font-semibold mb-2">Experience</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Our Story</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">The Chefs</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Sourcing</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Sustainability</p>
          </div>

          {/* Column 3: Service */}
          <div className="flex flex-col gap-3">
            <p className="text-[#E5E2E1] text-lg font-semibold mb-2">Service</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Our Story</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">The Chefs</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Sourcing</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Sustainability</p>
          </div>

          
          <div className="flex flex-col gap-3">
            <p className="text-[#E5E2E1] text-lg font-semibold">The Reserve List</p>
            <p className="text-[#D1C5AF] text-sm leading-relaxed">
              Subscribe for early access to seasonal menus and exclusive events.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                required 
                placeholder="Email address" 
                className="bg-[#080808] border border-[#353534] rounded-md placeholder:text-[#353534] text-white w-full outline-none focus:border-[#F2CA51] p-[10px]" 
              />
              <button className='bg-[#F2CA51] w-full py-[9px] rounded-md hover:bg-[#e6b800] transition-colors font-semibold'>
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

       
        <div className="border-t border-[#353534] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[#D1C5AF]">&copy; 2024 LuxeEats. All rights reserved.</p>
          <div className="flex gap-7">
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Privacy Policy</p>
            <p className="text-[#D1C5AF] hover:text-[#F2CA51] cursor-pointer transition-colors">Terms of Service</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MenuFooter