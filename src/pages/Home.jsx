import React from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/About'
import ServicesProducts from '../components/Services'
import FellowshipPopup from '../layouts/Fellowship'
import WhoWeServe from '../components/Who'
import Testimonials from '../components/Testimonials'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <FellowshipPopup/>
      <Hero/>
      <AboutSection/>
      <WhoWeServe/>
      <ServicesProducts/>
      <Testimonials/>
    </div>
  )
}

export default Home
