import React from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/About'
import ServicesProducts from '../components/Services'
import CTASection from '../components/CTA'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <ServicesProducts/>
      <CTASection/>
    </div>
  )
}

export default Home
