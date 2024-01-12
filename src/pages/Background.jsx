import React from 'react'
import Hero from '../components/Hero'
import image1 from '../assets/about-us.jpg'
import image2 from '../assets/about-us2.jpg'
import DonationBanner from '../components/DonationBanner'
import {Link} from 'react-router-dom'

const Background = () => {
  return (
    <>
   <Hero
  title="Who We are"
  description={
    <>
      <p>
        Imagine a spark ignited in 2019, evolving into SEDA – a vibrant force for change! We're not just an organization; we're a not-for-profit, non-governmental, and non-political powerhouse, officially recognized with registration number 63/E.29/1111/VOL.8/ALPAS in 2021 under Cameroon's Ministry of Territorial Administration.
      </p>
      <p>
        Meet the visionary minds behind SEDA, a dynamic group of young leaders led by our trailblazing president, <Link to="https://www.linkedin.com/in/ache-william-275bab205" className="founder">Ache William</Link>. Inspired during his university days, Ache developed an unwavering passion to tackle the pressing challenges of human well-being and settlement, with a special focus on empowering women and youth in rural communities.
      </p>
      <p>
        At SEDA, we're not just about dreams; we're about impactful action. We've already achieved significant milestones in community development, and with your support, we can accomplish so much more. By investing in SEDA, you're not just supporting an organization; you're investing in the future of sustainable, inclusive, and thriving communities.
      </p>
      <p>
        Your contributions will directly fund our initiatives aimed at improving healthcare, education, and economic opportunities in underserved areas. Our transparent and accountable approach ensures that every dollar you invest in SEDA translates into tangible positive changes on the ground.
      </p>
      <p>
        Join us in this transformative journey. Together, we can create a lasting impact and build a future where every individual, regardless of their background, has the opportunity to lead a fulfilling and prosperous life. Partner with SEDA today and be a catalyst for positive change!
      </p>
     
    </>
  }
  image1={image1}
 
/>


<DonationBanner title1="Please Join Us To Give Our Community A Better Life " title2='Just Like Muhammed Ali said "Service To Others Is The Rent You Pay Here On Earth"' action="Let's Donate"/>
<div className="container mb-3">
   <p className='mt-4'><strong>Our Core Objectives are:</strong></p>
   <ul className="objectives">
    <li>To fight against climate change by ensuring the protection, preservation, rehabilitation, restoration and efficient management of water tables, wetlands, water catchments etc as well as other fresh water sources and habitats for fauna and flora</li>
    <li>To promote sustainable agricultural practices, motivate youths and women in grassroots Communities to be engaged in Agriculture as a way to fight poverty and unemployment, thereby ensuring food security and reducing hunger, malnutrition and promotion of Entrepreneurial and leadership skills for sustainable livelihoods</li>
    <li>To promote empowerment and social outreach programs intended to train or mentor the underprivileged ir order for them to acquire skills in domains such as Agriculture and other social development initiatives that can help improve their social and economic well-being</li>
    <li>To Encourage Rural Communities to preserve and protect their biodiversity and support them in planting of environmentally friendly trees</li>
    <li>To Curb youth unemployment by promoting social entrepreneurship</li>
    <li>To promote the practice of Eco-friendly Agricultural activities, mitigating the effects of land degradation and ensuring healthy dieting habits</li>
    <li>To enhance Sustainable Development by educating the local population on the need to protect the environment and better manage their natural resources so as to prevent the adverse effects of climate change and nature degradation</li>

   </ul>
   </div>
   
   </>
  )
}

export default Background