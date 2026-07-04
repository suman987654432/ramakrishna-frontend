import React from 'react'
import AboutHero from '../components/aboutPage/AboutHero'
import AboutAtreum from '../components/aboutPage/AboutAtreum'
import Vision from '../components/aboutPage/Vision'
import AboutDoctor from '../components/aboutPage/AboutDoctor'

const AboutPage = () => {
  return (
   <>
   <div className='bg-[#19628D66] '>

  <AboutHero/>
   <AboutAtreum/>
    <Vision/>
    <AboutDoctor/>
    <div className='h-10'></div>
   </div>
 
   
   </>
  )
}

export default AboutPage