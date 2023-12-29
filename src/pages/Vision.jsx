import React from 'react'
import Hero from '../components/Hero'
import image1 from '../assets/IMG-20221217-WA0060.jpg'
import { FaQuoteRight } from "react-icons/fa6";


const Vision = () => {
  return (
    <>
    <Hero title= "Our Vision" image1={image1} description="We have our Vision as a Blue Print on the tablets of our Hearts. While Thriving for a just,peaceful and sustainable communities across the globe where everyone can live and thrive, we strongly believe that to call it out from rhetoric to reality requires the collaborative efforts of individuals and organisations. Our main Vision is therefore:"/>

    <p className='my-4  vision'><em><FaQuoteRight className='fa-right mx-3'/> Sustainable ecosystems<br/> with Equitable Distribution of resources for <br/> improved livelihoods within all parts and wholes</em></p>
    
    </>
    
  )
}

export default Vision