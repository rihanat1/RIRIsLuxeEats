import React from 'react'
import { FaRegUser, FaUser } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'

const SendMessage = () => {
  return (
    <div className='min-h-[80vh] w-[100%] bg-[#F9F9FF] lg:w-[60%]'>
        <div className="w-[95%] h-[100%] mx-auto ">

            <div className=" h-[100%] flex flex-col gap-6 p-10 bg-white border-[1px] shadow-md rounded-lg">
                <p className="font-semibold text-3xl text-[#151C27]  ">Send a Message</p>
                <form action="" className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-md font-semibold'>Fullname</label>
                   <div className="flex gap-2 items-center border-[1px] outline-none bg-[#F9F9FF] p-3 shadow-md rounded-lg">
                   <FaRegUser className='text-xl' />
                     <input type="text" placeholder='Enter your fullname' className='outline-none w-[90%] bg-[#F9F9FF]' />
                   </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-md font-semibold'>Email Address</label>
                   <div className="flex gap-2 items-center border-[1px] outline-none bg-[#F9F9FF] p-3 shadow-md rounded-lg">
                   <MdMailOutline className="text-[23px]" />
                     <input type="email" placeholder='Enter your email address' className='outline-none w-[90%] bg-[#F9F9FF]' />
                   </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className='text-md font-semibold'>Your Message</label>
                        <textarea name="" id="" cols={15} rows={9}  className='border-[1px] rounded-lg outline-none bg-[#F9F9FF] shadow-md'></textarea>
                    </div>

                    <button className='bg-[#FA7315] text-white py-[10px] rounded-xl mt-1 text-[14px] hover:bg-[#9D4300]'>Send Message</button>

                </form>
            </div>

        </div>

    </div>
  )
}

export default SendMessage