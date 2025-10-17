import React from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/About'
import ServicesProducts from '../components/Services'
import CTASection from '../components/CTA'
import FellowshipPopup from '../layouts/Fellowship'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <FellowshipPopup/>
      <Hero/>
      <AboutSection/>
      <ServicesProducts/>
      <CTASection/>
    </div>
  )
}

export default Home
