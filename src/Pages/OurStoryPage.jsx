import React from 'react'
import Header from '../Components/Header'
import Hero from '../SubSections/ourStoryPageSubSections/Hero'
import CoreValues from '../SubSections/ourStoryPageSubSections/CoreValues'
import Footer from '../Components/Footer'

const OurStoryPage = () => {
  return (
    <div className='bg-black'>
    
        <main className='flex-grow'>
            <Hero/>
            <CoreValues/>
        </main>
       
    </div>
  )
}

export default OurStoryPage