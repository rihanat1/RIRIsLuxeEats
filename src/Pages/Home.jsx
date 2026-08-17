import React from 'react'
import Header from '../Components/Header'
import Hero from '../SubSections/HomeSubSections/Hero'
import CoreValues from '../SubSections/HomeSubSections/CoreValues'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <main className='flex-grow'>
            <Hero/>
            <CoreValues/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home