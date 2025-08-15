import React, { useEffect } from 'react'
import AboutHero from '../components/founder/Founderhero'
import OurApproach from '../components/founder/Process'
import CoreValues from '../components/founder/Values';

const Founder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , []);
  return (
    <div>
      <AboutHero/>
      <OurApproach/>
      <CoreValues/>
    </div>
  )
}

export default Founder
