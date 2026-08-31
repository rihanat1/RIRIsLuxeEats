import React from 'react'
import Header from '../Components/Header'
import GetInTouch from '../SubSections/ContactPageSubSections/GetInTouch'
import SendMessage from '../SubSections/ContactPageSubSections/SendMessage'
import Details from '../SubSections/ContactPageSubSections/Details'
import Footer from '../Components/Footer'

const ContactPage = () => {
  return (
    <div className='bg-black'>
     
      <GetInTouch/>
      <div className="lg:flex lg:w-[85%] lg:mx-auto lg:justify-center lg:gap-4 lg:mb-12 mt-4 ">
        <SendMessage  className="border-2 border-yellow-700 lg:w-[50%] "/>
      <Details className=" w-[45%]"/>
      </div>

    </div>
  )
}

export default ContactPage