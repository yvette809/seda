import React from 'react'
import Hero from '../components/Hero'
import image1 from '../assets/about-us3.jpg'
import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";

const Mission = () => {
  return (
   <>
   <Hero title= "Our Mission" image1={image1} description="SEDA endeavors, through pioneering advocacy, to play a pivotal role in the creation of inherently sustainable ecosystems. Our aim is to foster equitable resource distribution that enhances livelihoods, with a particular emphasis on vulnerable communities affected by crises. In pursuit of this vision, our mission is to:"/>

   <p className='my-4 mission'><em><FaQuoteLeft className='fa-right mx-3'/> To reach cities and local communities through innovative advocacy, improving livelihoods, Ensuring Natural and Sustainable Ecosystems with rights respect of all components.</em><FaQuoteRight className='fa-right mx-3'/></p>
   </>
  )
}

export default Mission