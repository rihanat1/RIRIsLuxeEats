import React from 'react'
import Header from '../Components/Header'
import GetInTouch from '../SubSections/ContactPageSubSections/GetInTouch'
import SendMessage from '../SubSections/ContactPageSubSections/SendMessage'
import Details from '../SubSections/ContactPageSubSections/Details'
import Footer from '../Components/Footer'

const ContactPage = () => {
  return (
    <div className='bg-[#F9F9FF]'>
      <Header/>
      <GetInTouch/>
      <div className="lg:flex lg:w-[85%] lg:mx-auto">
        <SendMessage className="lg:w-[50%]"/>
      <Details className="w-[50%]"/>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage