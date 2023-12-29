import React from 'react'
import Hero from '../components/Hero'
import image1 from '../assets/IMG-20221217-WA0060.jpg'
import { FaQuoteRight } from "react-icons/fa6";


const Vision = () => {
  return (
    <>
    <Hero title= "Our Vision" image1={image1} description="We have etched our vision as a blueprint on the tablets of our hearts. As we aspire to foster just, peaceful, and sustainable communities worldwide, where every individual can not only exist but flourish, we firmly acknowledge that transitioning from mere rhetoric to tangible reality necessitates the concerted efforts of individuals and organizations alike. Our overarching vision is thus:"/>

    <p className='my-4  vision'><em><FaQuoteRight className='fa-right mx-3'/>Establish a sustainable ecosystem<br/> with an equitable distribution of resources <br/> to enhance livelihoods across all parts and wholes</em></p>
    
    </>
    
  )
}

export default Vision